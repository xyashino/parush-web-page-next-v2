import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { OneIntention } from "@/types/interfaces/week-intentions-store.interface";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
interface Props {
  intentionData: OneIntention;
  id: string;
}

const ModifyIntentionsRow = ({ intentionData, id }: Props) => {
  const { deleteIntention } = useWeekIntentionsStore();

  return (
    <TableRow>
      <TableCell>{intentionData.order}</TableCell>
      <TableCell className="font-bold">{intentionData.hour}</TableCell>
      <TableCell>{intentionData.value}</TableCell>
      <TableCell className="flex flex-col items-end justify-center">
        <Button
          variant="ghost"
          onClick={() => deleteIntention(id)}
          role="button"
          className="group hover:bg-red-500  transition-colors"
        >
          <TrashIcon className="text-red-800 group-hover:text-background transition-colors" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default ModifyIntentionsRow;