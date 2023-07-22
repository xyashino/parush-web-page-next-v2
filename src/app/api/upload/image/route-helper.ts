import { getAlbumWithRelations } from "@/lib/db/album";
import { mkdir, readdir, writeFile } from "fs/promises";
import { join } from "path";
import sharp from "sharp";

const { UPLOAD_DIR } = process.env;
export const checkDirectory = async (path: string) => {
  if (!UPLOAD_DIR) throw new Error("Upload dir not found , check .env file");
  try {
    await readdir(join(process.cwd(), UPLOAD_DIR, path));
  } catch (error) {
    await mkdir(join(process.cwd(), UPLOAD_DIR, path), { recursive: true });
  }
};

export const checkAlbum = async (id: string) => {
  const album = await getAlbumWithRelations(id);
  if (!album) throw new Error("Album not found");
  await checkDirectory(`public/albums/${album.id}`);
  return album;
};

export const validateImage = (file: [string, File | string]) => {
  const [key, value] = file;
  if (typeof value === "string") throw new Error("File is not an image");
  const { type, size } = value;
  if (!type.includes("image")) throw new Error("File is not an image");
  if (size > 10000000) throw new Error("File is too big");

  return value;
};
export const validateFormData = (formData: [string, File | string][]) => {
  if (formData.length !== 1) throw new Error("Only one file allowed");

  const file = validateImage(formData[0]);

  return {
    albumId: formData[0][0],
    file,
  };
};
export const saveAsWebp = async (buffer: ArrayBuffer, path: string) => {
  let pathCopy = path;
  if (!pathCopy.endsWith(".webp")) pathCopy = pathCopy + ".webp";
  if (!UPLOAD_DIR) throw new Error("Upload dir not found , check .env file");
  const webpBuffer = await sharp(buffer).webp().toBuffer();
  await writeFile(join(process.cwd(), UPLOAD_DIR, `${path}`), webpBuffer);
};