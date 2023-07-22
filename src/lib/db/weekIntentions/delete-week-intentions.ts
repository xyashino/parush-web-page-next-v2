import client from "@/lib/db";

export const deleteWeekIntention = async (id: string) => {
  try {
    return await client.weekIntentions.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Intention not found");
  }
};