import { Component, HasOne } from "@contember/interface";
import {
  FormLayout,
  ImageField,
  InputField,
  TextareaField,
} from "../form";

interface SeoForm {
  field: string;
}

export const SeoForm = Component<SeoForm>(({ field }) => (
  <HasOne field={field}>
    <FormLayout className="flex flex-col gap-2 bg-slate-100 p-4 ml-0">
    <h3 className="text-lg font-bold">SEO</h3>
      <InputField field="title" label="Title" />
      <TextareaField field="description" label="Description" />
      <InputField field="keywords" label="Keywords" />
      <ImageField
        baseField="image"
        urlField="url"
        heightField="height"
        widthField="width"

      />
    </FormLayout>
  </HasOne>
));