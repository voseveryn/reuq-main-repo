import { Component } from "@contember/interface";
import { InputField } from "~/lib/form";


export const LocaleForm = Component(() => (
  <>
    <InputField field="label" label="Jazyk" />
    <InputField field="code" label="Code" />
  </>
));
