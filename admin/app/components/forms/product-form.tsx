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
  Variable,
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
import {
  AppleIcon,
  BookImageIcon,
  FileType2Icon,
  HistoryIcon,
  NewspaperIcon,
} from "lucide-react";



export const ProductForm = Component(() => (
  <FormLayout>
    <ImageField baseField="image" urlField="url" label="Obrázek" />
    <SideDimensions
      dimension="locale"
      as="currentLocale"
      field="locales(locale.code=$currentLocale)"
    >
      <InputField field="title" label="Název" />
      <LocalizedSlugField
        field={"url.url"}
        derivedFrom={["title"]}
        prefix={`/products/`}
      />
      <InputField field="shortLabel" label="Krátký popis" />
      <InputField field="infoLabel" label="Informační popis" />
      <TextareaField field="description" label="Popis" />
      <BlockRepeater field="blocks">
        <Block
          name="text"
          label={
            <>
              <FileType2Icon /> Textová sekce
            </>
          }
        >
          <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-slate-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>

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
        <Block
          name="imageList"
          label={
            <>
              <BookImageIcon /> Gallery
            </>
          }
        >
          <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-slate-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
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
        <Block
          name="history"
          label={
            <>
              <HistoryIcon /> Timeline
            </>
          }
        >
          <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-slate-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>

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
        <Block
          name="products"
          label={
            <>
              <AppleIcon /> Produkty
            </>
          }
        >
          <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-slate-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>

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
        <Block
          name="newsletter"
          label={
            <>
              <NewspaperIcon /> Newsletter
            </>
          }
        >
          <div className="bg-blue-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
            Tento block nelze editovat, je to informace pro website že má přidat
            newsletter na stránku.
          </div>
        </Block>
        <Block
          name="listWithIcons"
          label={
            <>
              <NewspaperIcon /> List s Ikony
            </>
          }
        >
          <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
            <RadioEnumField
              field="blockVariation"
              label="Typ Blocku"
              defaultValue="one"
              options={{
                one: <>List s textem</>,
                two: <>List s Nadpisem a Obrázkem</>,
                three: <>List s Nadpisem</>,
                four: <>Pouze list</>,
              }}
              orientation="horizontal"
            />
          </div>
          <div className="bg-slate-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
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
          </div>
          <If condition={"[blockVariation = one]"}>
            <InputField field="title" label="Nadpis" />
            <InputField field="subtitle" label="PodNadpis" />
            <RichText field="text" label="Textové pole" />
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
          </If>
          <If condition={"[blockVariation = two]"}>
            <InputField field="title" label="Nadpis" />
            <ImageField
              baseField="image"
              urlField="url"
              label="Obrázek na pozádí"
            />
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
          </If>
          <If condition={"[blockVariation = three]"}>
            <InputField field="title" label="Nadpis" />
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
          </If>
          <If condition={"[blockVariation = four]"}>
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
          </If>
        </Block>
      </BlockRepeater>
    </SideDimensions>
  </FormLayout>
));
