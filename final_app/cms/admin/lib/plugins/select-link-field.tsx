import { Component, Field, HasOne, If } from "@contember/interface";
import {
  InputField,
  SelectEnumField,
  SelectField,
  TextareaField,
} from "../form";

export const SelectLinkField = Component<{ field: string; label?: string }>(
  ({ field, label }) => (
    <HasOne field={field}>
      <div className="flex flex-col gap-4">
        {label && <div className="">{label}</div>}
        <div className="bg-slate-50 p-4">
          <TextareaField field="title" label="Název" />
          <SelectEnumField
            label="Type"
            field="type"
            options={{ external: "External", internal: "Internal" }}
          />
          <If condition="[type = external]">
            <InputField field="externalTarget" label="URL" required />
          </If>
          <If condition="[type = internal]">
            <SelectField field="internalTarget" label="Target">
              <Field field="url" />
            </SelectField>
          </If>
        </div>
      </div>
    </HasOne>
  )
);