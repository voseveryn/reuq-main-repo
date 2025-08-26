import { Component, HasOne, If } from "@contember/interface";
import { Block } from "@contember/react-block-repeater";
import { BlockContent } from "@contember/react-slate-editor";
import { SideDimensions } from "~/lib/dimensions";
import {
  FormLayout,
  ImageField,
  InputField,
  RadioEnumField,
  TextareaField,
} from "~/lib/form";
import { BlockRepeater, SeoForm } from "~/lib/plugins";
import {
  DefaultRepeater,
  RepeaterItemActions,
  RepeaterRemoveItemButton,
} from "~/lib/repeater";
import { RichText } from "../atoms/rich-text";

const HomePage = Component(() => (
  <BlockRepeater field="blocks">
    <Block name="hero" label="Hero Sekce">
      <InputField field="title" label="Nadpis" />
      <InputField field="subtitle" label="Malý nadpis" />
      <RichText field="text" label="Text v sekci" />
      <ImageField baseField="image" urlField="url" label="Obrázek na pozádí" />
    </Block>
    <Block name="card" label="Karty">
      <InputField field="title" label="Nadpis" />
      <InputField field="subtitle" label="Malý nadpis" />
      <TextareaField field="text" label="Text" />
      <HasOne field="cardList">
        <DefaultRepeater field="items" sortableBy="orderBy">
          <InputField field="text" label="Nadpis" />
          <ImageField baseField="image" urlField="url" label="Obrázek karty" />
          <RepeaterItemActions>
            <RepeaterRemoveItemButton />
          </RepeaterItemActions>
        </DefaultRepeater>
      </HasOne>
    </Block>
    <Block name="information" label="Krátké info">
      <InputField field="title" label="Nadpis" />
      <RichText field="text" label="Text v sekci" />
    </Block>
    <Block name="partners" label="Partneří">
      <InputField field="title" label="Nadpis" />
      <DefaultRepeater field="imageList.items" sortableBy="order">
        <ImageField baseField="image" urlField="url" label="Položka v partnerech" />
        <RepeaterItemActions>
          <RepeaterRemoveItemButton />
        </RepeaterItemActions>
      </DefaultRepeater>
    </Block>
    <Block name="team" label="Tým">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="PodNadpis" />
        <RichText field="text" label="Popis" />
        <HasOne field="cardList">
        <DefaultRepeater field="items" sortableBy="orderBy">
          <InputField field="title" label="Jméno" />
          <InputField field="subtitle" label="Pozice" />
          <ImageField baseField="image" urlField="url" label="Obrázek karty" />
          <RepeaterItemActions>
            <RepeaterRemoveItemButton />
          </RepeaterItemActions>
        </DefaultRepeater>
      </HasOne>
    </Block>
    <Block name="history" label="Historie">
        <InputField field="title" label="Nadpis" />
        <HasOne field="textList">
                        <DefaultRepeater field="items" sortableBy="order">
                            <RichText field='text' label="Text" />
                            <RepeaterItemActions>
                                <RepeaterRemoveItemButton />
                            </RepeaterItemActions>
                        </DefaultRepeater>
                    </HasOne>
    </Block>
  </BlockRepeater>
));

const SolutionPage = Component(() => (
  <BlockRepeater field="blocks">
    <Block name="hero" label="Hero Sekce">
      t
    </Block>
  </BlockRepeater>
));

const GenericPage = Component(() => (
  <BlockRepeater field="blocks">
    <Block name="hero" label="Hero Sekce">
      t
    </Block>
  </BlockRepeater>
));

export const PageForm = Component(() => (
  <FormLayout>
    <InputField field="publishedAt" label="Publikováno:" />
    <RadioEnumField
      field="pageType"
      label="Typ Stránky"
      options={{
        homepage: "Domací stránka",
        solutionPage: "Řešení stránka",
        genericPage: "Generická stránka",
      }}
    />
    <If condition="[pageType=homepage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <HomePage />
      </SideDimensions>
    </If>
    <If condition="[pageType=solutionPage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <SolutionPage />
      </SideDimensions>
    </If>
    <If condition="[pageType=genericPage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <GenericPage />
      </SideDimensions>
    </If>
    <SeoForm field="seo" />
  </FormLayout>
));
