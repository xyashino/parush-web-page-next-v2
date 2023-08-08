import React from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlbumCrud } from "@/lib/services/albums/crud";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export const AlbumDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    await AlbumCrud.delete(id);
    refresh();
  };

  return (
    <DataTableActionsDropDownItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};