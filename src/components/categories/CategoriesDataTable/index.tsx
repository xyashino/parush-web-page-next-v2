"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { Category } from "@prisma/client";
import { categoryColumns } from "./category-columns";
import { Separator } from "@/components/ui/separator";

interface Props extends PropsWithChildren {
  data: Category[];
}

export const CategoriesDataTable = ({ data }: Props) => {
  return (
    <div>
      <div className="w-11/12 mx-auto space-y-2 mb-2">
        <h3 className="text-foreground text-2xl font-bold">
          Wszystkie Kategorie:
        </h3>
        <Separator />
      </div>
      <DataTable columns={categoryColumns} data={data} />
    </div>
  );
};
