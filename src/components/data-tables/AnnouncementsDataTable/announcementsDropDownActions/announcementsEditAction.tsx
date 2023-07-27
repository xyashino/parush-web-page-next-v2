import React, { SyntheticEvent } from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";

interface Props {
  id: string;
}

const AnnouncementsEditAction = ({ id }: Props) => {
  const { push } = useRouter();
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    push(`/admin/announcements/${id}`);
  };
  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};

export default AnnouncementsEditAction;
