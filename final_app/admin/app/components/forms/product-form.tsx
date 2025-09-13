import { SideDimensions } from "../../../lib/dimensions";
import {
  FormLayout,
  ImageField,
  InputField,
  MultiSelectField,
  RadioEnumField,
  SelectEnumField,
  TextareaField,
} from "../../../lib/form";
import {
  Component,
  Field,
  HasOne,
  If,
  StaticRender,
} from "@contember/interface";
import { RichText } from "../atoms/rich-text";
import {
  DefaultRepeater,
  RepeaterItemActions,
  RepeaterRemoveItemButton,
} from "../../../lib/repeater";
import { BlockRepeater } from "~/lib/plugins";
import { Block } from "@contember/react-block-repeater";
import { LocalizedSlugField } from "../atoms/SlugField";

export const ProductForm = Component(() => (
  <FormLayout>
    <ImageField baseField="image" urlField="url" label="Obrázek" />
    <SideDimensions
      dimension="locale"
      as="currentLocale"
      field="locales(locale.code=$currentLocale)"
    >
      <InputField field="title" label="Název" />
      <LocalizedSlugField field={"url.url"} derivedFrom={["title"]} />
      <InputField field="shortLabel" label="Krátký popis" />
      <InputField field="infoLabel" label="Informační popis" />
      <TextareaField field="description" label="Popis" />
      <BlockRepeater field="blocks">
        <Block name="text" label="Textová sekce">
          <RadioEnumField
            field="align"
            label="Zarovnání"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
		  <RadioEnumField
            field="colorVariantion"
            label="Barvy"
            defaultValue="classic"
            options={{
              classic: <>Klasické barvy</>,
              reverse: <>Obráceně</>,
              grey: <>Lehce šedivé pozadí</>,
            }}
            orientation="vertical"
          />
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Text s obrázkem</>,
              two: <>Pouze Text</>,
            }}
            orientation="horizontal"
          />

          <If condition="[blockVariation = one]">
            <InputField field="title" label="Nadpis" />
            <InputField field="subtitle" label="PodNadpis" />
            <RichText field="text" label="Text" />
            <ImageField
              baseField="image"
              urlField="url"
              label="Obrázek na pozádí"
            />
          </If>
          <If condition="[blockVariation = two]">
            <InputField field="title" label="Nadpis" />
            <InputField field="subtitle" label="PodNadpis" />
            <RichText field="text" label="Text" />
          </If>
        </Block>
        <Block name="imageList" label="Gallery">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Text s obrázkem</>,
              two: <>Pouze Obrázky</>,
            }}
            orientation="horizontal"
          />
          <If condition="[blockVariation = one]">
            <InputField field="title" label="Nadpis" />
            <InputField field="subtitle" label="PodNadpis" />
            <DefaultRepeater field="imageList.items" sortableBy="order">
              <ImageField
                baseField="image"
                urlField="url"
                label="Položka v Galerii"
              />
              <RepeaterItemActions>
                <RepeaterRemoveItemButton />
              </RepeaterItemActions>
            </DefaultRepeater>
          </If>
          <If condition="[blockVariation = two]">
            <DefaultRepeater field="imageList.items" sortableBy="order">
              <ImageField
                baseField="image"
                urlField="url"
                label="Položka v Galerii"
              />
              <RepeaterItemActions>
                <RepeaterRemoveItemButton />
              </RepeaterItemActions>
            </DefaultRepeater>
          </If>
        </Block>
        <Block name="history" label="Timeline">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Text s Timeline</>,
              two: <>Pouze TimeLine</>,
            }}
            orientation="horizontal"
          />
		  <RadioEnumField
            field="colorVariantion"
            label="Barvy"
            defaultValue="classic"
            options={{
              classic: <>Klasické barvy</>,
              reverse: <>Obráceně</>,
              grey: <>Lehce šedivé pozadí</>,
            }}
            orientation="vertical"
          />
          <If condition="[blockVariation = one]">
            <InputField field="title" label="Nadpis" />
            <HasOne field="textList">
              <DefaultRepeater field="items" sortableBy="order">
                <RichText field="text" label="Text" />
                <RepeaterItemActions>
                  <RepeaterRemoveItemButton />
                </RepeaterItemActions>
              </DefaultRepeater>
            </HasOne>
          </If>
          <If condition="[blockVariation = two]">
            <HasOne field="textList">
              <DefaultRepeater field="items" sortableBy="order">
                <RichText field="text" label="Text" />
                <RepeaterItemActions>
                  <RepeaterRemoveItemButton />
                </RepeaterItemActions>
              </DefaultRepeater>
            </HasOne>
          </If>
        </Block>
        <Block name="products" label="Produkty">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Produkty s textem</>,
              two: <>Pouze Produkty</>,
            }}
            orientation="horizontal"
          />
		  <RadioEnumField
            field="colorVariantion"
            label="Barvy"
            defaultValue="classic"
            options={{
              classic: <>Klasické barvy</>,
              reverse: <>Obráceně</>,
              grey: <>Lehce šedivé pozadí</>,
            }}
            orientation="vertical"
          />
          <If condition="[blockVariation = one]">
            <InputField field="title" label="Nadpis" />
            <RichText field="text" label="Text v sekci" />
            <HasOne field="supportedProducts">
              <MultiSelectField field="product" label="Produkty">
                <SideDimensions
                  dimension="locale"
                  as="currentLocale"
                  field="locales(locale.code=$currentLocale)"
                >
                  <Field field="title" />
                </SideDimensions>
              </MultiSelectField>
            </HasOne>
          </If>
		  <If condition="[blockVariation = two]">
            <HasOne field="supportedProducts">
              <MultiSelectField field="product" label="Produkty">
                <SideDimensions
                  dimension="locale"
                  as="currentLocale"
                  field="locales(locale.code=$currentLocale)"
                >
                  <Field field="title" />
                </SideDimensions>
              </MultiSelectField>
            </HasOne>
          </If>
        </Block>
      </BlockRepeater>
    </SideDimensions>
  </FormLayout>
));
