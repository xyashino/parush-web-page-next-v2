import React, { useState } from "react";
import { FormField } from "@/components/ui/form";
import { z } from "zod";
import { CustomForm, CustomFormControlItem } from "@/components/form";
import { Input } from "@/components/ui/input";
import { MdEditor } from "@/components/MdEditor";
import { Separator } from "@/components/ui/separator";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/CardHeaderWithSeparator";
import { SwitchWithLabel } from "@/components/SwitchWithLabel";
import { weekIntentionsFormSchema } from "@/lib/schemas/week-intentions";

type TypeFormSchema = z.infer<typeof weekIntentionsFormSchema>;

interface Props {
  defaultContent?: TypeFormSchema;
}

export const ModifyWeekIntentionsForm = ({
  defaultContent = { order: 0, hour: "" },
}: Props) => {
  const { createIntention } = useWeekIntentionsStore();
  const { editorValue } = useMdEditorStore();

  const [switchValue, setSwitchValue] = useState(false);
  const onSubmit = (e: TypeFormSchema) => {
    createIntention({
      order: e.order,
      hour: e.hour,
      value: editorValue,
      id: `${Date.now()}}`,
    });
  };

  return (
    <Card>
      <CardHeaderWithSeparator
        title="Dodaj pojedynczą Intencje"
        description="Tutaj możesz dodać pojedynczą intencje. Godzina jest wymagana."
      />
      <CardContent>
        <CustomForm
          formSchema={weekIntentionsFormSchema}
          defaultValues={defaultContent}
          onSubmit={onSubmit}
          className="flex flex-wrap items-center justify-around"
        >
          <div className="flex flex-col space-y-4  items-center justify-around">
            <FormField
              name="order"
              render={({ field }) => (
                <CustomFormControlItem label="Z-index">
                  <Input
                    {...field}
                    type="number"
                    onChange={(e) => {
                      field.onChange(e.target.valueAsNumber);
                    }}
                    min={-20}
                    className="w-[200px]"
                  />
                </CustomFormControlItem>
              )}
            />
            <FormField
              name="hour"
              render={({ field }) => (
                <CustomFormControlItem label="Godzina">
                  <Input {...field} type="time" className="w-[200px]" />
                </CustomFormControlItem>
              )}
            />
          </div>
          <div className="flex flex-col justify-around h-full">
            <SwitchWithLabel
              value={switchValue}
              onChange={setSwitchValue}
              labelText="Czyść formularz po dodaniu intencji?"
              id="clearForm"
            />
            <ButtonWithIcon text="Dodaj Intencje" Icon={PlusCircledIcon} />
          </div>

          <Separator className="w-5/6 my-4" />
          <MdEditor editorHeight="300px" />
        </CustomForm>
      </CardContent>
    </Card>
  );
};
