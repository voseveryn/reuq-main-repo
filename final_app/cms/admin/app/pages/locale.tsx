import { Component } from "@contember/interface";
import React from "react";
import { Binding, PersistButton } from "~/lib/binding";
import { InputField } from "~/lib/form";
import { Slots } from "~/lib/layout";
import { DefaultRepeater } from "~/lib/repeater";

export const LocaleForm = Component(() => (
  <>
    <InputField field="label" label="Jazyk" />
    <InputField field="code" label="Code" />
  </>
));

export default () => {
  return (
    <Binding>
      <Slots.Title>Jazyky</Slots.Title>
      <Slots.Actions>
        <PersistButton />
      </Slots.Actions>
      <DefaultRepeater entities={"Locale"} orderBy={"code"}>
        <LocaleForm />
      </DefaultRepeater>
    </Binding>
  );
};
