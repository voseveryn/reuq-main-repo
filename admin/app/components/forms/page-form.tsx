import { Component, Field, HasOne, If } from "@contember/interface";
import { Block } from "@contember/react-block-repeater";
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
import {
  ALargeSmallIcon,
  AppleIcon,
  HandshakeIcon,
  HistoryIcon,
  HouseIcon,
  IdCardIcon,
  InfoIcon,
  NewspaperIcon,
  UsersIcon,
} from "lucide-react";
import { SlugField } from "../atoms/extra-lib/url";

const HomePage = Component(() => (
  <>
    <BlockRepeater field="blocks">
      <Block
        name="hero"
        label={
          <>
            <HouseIcon /> Hero
          </>
        }
      >
        <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Obrázek na straně</>,
              two: <>Full-width pozadí</>,
              three: <>Banner-width pozadí</>
            }}
            orientation="horizontal"
          />
        </div>
        <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="align"
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </Block>
      <Block
        name="card"
        label={
          <>
            <IdCardIcon /> Karty
          </>
        }
      >
        <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Karta s obrázkem</>,
              two: <>Karta s ikonou</>,
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
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
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
      <Block
        name="information"
        label={
          <>
            <InfoIcon /> Informace
          </>
        }
      >
        <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Full-width pozadí</>,
              two: <>Box-width pozadí</>,
            }}
            orientation="horizontal"
          />
        </div>
        <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="align"
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
        <InputField field="title" label="Nadpis" />
        <RichText field="text" label="Text v sekci" />
      </Block>
      <Block
        name="partners"
        label={
          <>
            <HandshakeIcon /> Partneři
          </>
        }
      >
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
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
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
      <Block
        name="team"
        label={
          <>
            <UsersIcon /> Tým
          </>
        }
      >
        <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Obsah pod sebou</>,
              two: <>Obsah vedle sebe</>,
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
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
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
      <Block
        name="history"
        label={
          <>
            <HistoryIcon /> Historie
          </>
        }
      >
        <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
          <RadioEnumField
            field="blockVariation"
            label="Typ Blocku"
            defaultValue="one"
            options={{
              one: <>Obsah pod sebou</>,
              two: <>Obsah vedle sebe</>,
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
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
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
              one: <>Obsah pod sebou</>,
              two: <>Obsah vedle sebe</>,
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
            label="Zarovnání textu"
            defaultValue="left"
            options={{
              left: <>Vlevo</>,
              center: <>Střed</>,
              right: <>Vpravo</>,
            }}
            orientation="horizontal"
          />
        </div>
        <InputField field="title" label="Nadpis" />
        <RichText field="text" label="Text v sekci" />
        <HasOne field="productList">
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
      </Block>
      <Block
      name="text"
      label={
        <>
          <ALargeSmallIcon /> Text
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Obsah pod sebou s obrázkem</>,
            two: <>Obsah pod sebou bez obrázku</>,
            three: <>Obsah vedle sebe s obrázkem</>,
            four: <>Obsah vedle sebe bez obrázku</>,
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
          label="Zarovnání textu"
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
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = two]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
      </If>
      <If condition="[blockVariation = three]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = four]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
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
    </BlockRepeater>
  </>
));

const SolutionPage = Component(() => (
  <BlockRepeater field="blocks">
    <Block
      name="hero"
      label={
        <>
          <HouseIcon /> Hero
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Obrázek na straně</>,
              two: <>Full-width pozadí</>,
              three: <>Banner-width pozadí</>
          }}
          orientation="horizontal"
        />
      </div>
      <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="align"
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <InputField field="subtitle" label="Malý nadpis" />
      <RichText field="text" label="Text v sekci" />
      <ImageField baseField="image" urlField="url" label="Obrázek na pozádí" />
    </Block>
    <Block
      name="card"
      label={
        <>
          <IdCardIcon /> Karty
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Karta s obrázkem</>,
            two: <>Karta s ikonou</>,
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
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
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
    <Block
      name="information"
      label={
        <>
          <InfoIcon /> Informace
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Full-width pozadí</>,
            two: <>Box-width pozadí</>,
          }}
          orientation="horizontal"
        />
      </div>
      <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="align"
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <RichText field="text" label="Text v sekci" />
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
            one: <>Obsah pod sebou</>,
            two: <>Obsah vedle sebe</>,
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
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <RichText field="text" label="Text v sekci" />
      <HasOne field="productList">
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
    </Block>
    <Block
      name="text"
      label={
        <>
          <ALargeSmallIcon /> Text
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Obsah pod sebou s obrázkem</>,
            two: <>Obsah pod sebou bez obrázku</>,
            three: <>Obsah vedle sebe s obrázkem</>,
            four: <>Obsah vedle sebe bez obrázku</>,
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
          label="Zarovnání textu"
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
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = two]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
      </If>
      <If condition="[blockVariation = three]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = four]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
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
  </BlockRepeater>
));

const GenericPage = Component(() => (
  <BlockRepeater field="blocks">
    <Block
      name="hero"
      label={
        <>
          <HouseIcon /> Hero
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Obrázek na straně</>,
            two: <>Full-width pozadí</>,
            three: <>Banner-width pozadí</>
          }}
          orientation="horizontal"
        />
      </div>
      <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="align"
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <InputField field="subtitle" label="Malý nadpis" />
      <RichText field="text" label="Text v sekci" />
      <ImageField baseField="image" urlField="url" label="Obrázek na pozádí" />
    </Block>
    <Block
      name="card"
      label={
        <>
          <IdCardIcon /> Karty
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Karta s obrázkem</>,
            two: <>Karta s ikonou</>,
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
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
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
    <Block
      name="information"
      label={
        <>
          <InfoIcon /> Informace
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Full-width pozadí</>,
            two: <>Box-width pozadí</>,
          }}
          orientation="horizontal"
        />
      </div>
      <div className="bg-neutral-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="align"
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <RichText field="text" label="Text v sekci" />
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
            one: <>Obsah pod sebou</>,
            two: <>Obsah vedle sebe</>,
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
          label="Zarovnání textu"
          defaultValue="left"
          options={{
            left: <>Vlevo</>,
            center: <>Střed</>,
            right: <>Vpravo</>,
          }}
          orientation="horizontal"
        />
      </div>
      <InputField field="title" label="Nadpis" />
      <RichText field="text" label="Text v sekci" />
      <HasOne field="productList">
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
    </Block>
    <Block
      name="text"
      label={
        <>
          <ALargeSmallIcon /> Text
        </>
      }
    >
      <div className="bg-rose-100 shadow-sm py-1.5 px-4 border border-rose-200 mb-4 rounded-sm">
        <RadioEnumField
          field="blockVariation"
          label="Typ Blocku"
          defaultValue="one"
          options={{
            one: <>Obsah pod sebou s obrázkem</>,
            two: <>Obsah pod sebou bez obrázku</>,
            three: <>Obsah vedle sebe s obrázkem</>,
            four: <>Obsah vedle sebe bez obrázku</>,
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
          label="Zarovnání textu"
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
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = two]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
      </If>
      <If condition="[blockVariation = three]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
        <ImageField
          baseField="image"
          urlField="url"
          label="Obrázek na pozádí"
        />
      </If>
      <If condition="[blockVariation = four]">
        <InputField field="title" label="Nadpis" />
        <InputField field="subtitle" label="Malý nadpis" />
        <RichText field="text" label="Text v sekci" />
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
        <LocalizedSlugField
        field={"url.url"}
        derivedFrom={["title"]}
        prefix={`/`}
      />
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
        <LocalizedSlugField
        field={"url.url"}
        derivedFrom={["title"]}
        prefix={`/solution/`}
      />
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
        <LocalizedSlugField
        field={"url.url"}
        derivedFrom={["title"]}
        prefix={`/generic/`}
      />
        <GenericPage />
      </SideDimensions>
    </If>
    <SeoForm field="seo" />
  </FormLayout>
));
