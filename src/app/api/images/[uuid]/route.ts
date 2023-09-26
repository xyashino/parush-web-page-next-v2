import { revalidateTag } from "next/cache";
import { RevalidateTag } from "@/types/enums";
import { clearImage } from "@/lib/services/images/server-methods";
import { NotFoundResponse } from "@/lib/next-responses";
import { ImageDb } from "@/db/handlers/album";

export async function DELETE(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  revalidateTag(RevalidateTag.IMAGES);
  const deletedImage = await clearImage(id);
  if (!deletedImage) return NotFoundResponse("Image not found");
  return new Response(JSON.stringify(deletedImage), { status: 200 });
}

export async function GET(request: Request, { params }: ParamsWithUUID) {
  const id = params.uuid;
  const foundImage = await ImageDb.findOne(id);
  if (!foundImage) return NotFoundResponse("Image not found");
  revalidateTag(RevalidateTag.IMAGES);
  return new Response(JSON.stringify(foundImage), { status: 200 });
}
