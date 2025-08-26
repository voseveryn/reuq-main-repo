import { Component } from "@contember/interface";
import React from "react";
import { Binding, PersistButton } from "~/lib/binding";
import { InputField } from "~/lib/form";
import { Slots } from "~/lib/layout";
import { DefaultRepeater } from "~/lib/repeater";
import { LocaleForm } from "../components/forms/locale-form";


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
