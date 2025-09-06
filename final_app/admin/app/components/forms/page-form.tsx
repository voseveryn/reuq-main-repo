import { Component, Field, HasOne, If } from "@contember/interface";
import { Block } from "@contember/react-block-repeater";
import { BlockContent } from "@contember/react-slate-editor";
import { SideDimensions } from "~/lib/dimensions";
import {
  FormLayout,
  ImageField,
  InputField,
  MultiSelectField,
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
import { LocalizedSlugField } from "../atoms/SlugField";

const HomePage = Component(() => (
  <>
    <BlockRepeater field="blocks">
      <Block name="hero" label="Hero Sekce">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </Block>
      <Block name="card" label="Karty">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <TextareaField field="text" label="Text" />
        <HasOne field="cardList">
          <DefaultRepeater field="items" sortableBy="orderBy">
            <InputField field="text" label="Nadpis" />
            <ImageField
              baseField="image"
              urlField="url"
              label="Obrázek karty"
            />
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
          <ImageField
            baseField="image"
            urlField="url"
            label="Položka v partnerech"
          />
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
            <ImageField
              baseField="image"
              urlField="url"
              label="Obrázek karty"
            />
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
            <RichText field="text" label="Text" />
            <RepeaterItemActions>
              <RepeaterRemoveItemButton />
            </RepeaterItemActions>
          </DefaultRepeater>
        </HasOne>
      </Block>
    </BlockRepeater>
  </>
));

const SolutionPage = Component(() => (
  <BlockRepeater field="blocks">
    <Block name="hero" label="Hero Sekce">
      <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
    </Block>
    <Block name="card" label="Karty">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <TextareaField field="text" label="Text" />
        <HasOne field="cardList">
          <DefaultRepeater field="items" sortableBy="orderBy">
            <InputField field="text" label="Nadpis" />
            <ImageField
              baseField="image"
              urlField="url"
              label="Obrázek karty"
            />
            <RepeaterItemActions>
              <RepeaterRemoveItemButton />
            </RepeaterItemActions>
          </DefaultRepeater>
        </HasOne>
      </Block>
      <Block name="products" label="Produkty">
        <InputField field="title" label="Nadpis" />
        <RichText field="text" label="Text v sekci" />
        <HasOne field="productList">
    <MultiSelectField
      field="product"
      label="Produkty"
    >
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <Field field="title"/>
      </SideDimensions>
    </MultiSelectField>
  </HasOne>
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
        homePage: "Domací stránka",
        solutionPage: "Řešení stránka",
        genericPage: "Generická stránka",
      }}
    />
    <If condition="[pageType=homePage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <InputField field="title" label="Název stránky" />
        <LocalizedSlugField field={"url.url"} derivedFrom={["title"]} />
        <HomePage />
      </SideDimensions>
    </If>
    <If condition="[pageType=solutionPage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <InputField field="title" label="Název stránky" />
        <LocalizedSlugField field={"url.url"} derivedFrom={["title"]} prefix="/solution/" />
        <SolutionPage />
      </SideDimensions>
    </If>
    <If condition="[pageType=genericPage]">
      <SideDimensions
        dimension="locale"
        as="currentLocale"
        field="locales(locale.code=$currentLocale)"
      >
        <InputField field="title" label="Název stránky" />
        <LocalizedSlugField field={"url.url"} derivedFrom={["title"]} />
        <GenericPage />
      </SideDimensions>
    </If>
    <SeoForm field="seo" />
  </FormLayout>
));
