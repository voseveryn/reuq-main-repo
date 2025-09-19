
import { Binding, PersistButton } from '../../lib/binding'
import { BackButton } from '../../lib/buttons'
import { SideDimensions } from '../../lib/dimensions'
import { Slots } from '../../lib/layout'
import { LocalizedSlugField } from '../components/atoms/SlugField'
import { RichText } from '../components/atoms/rich-text'
import {
  DefaultRepeater,
  RepeaterItemActions,
  RepeaterRemoveItemButton,
} from "../../lib/repeater";
import { BlockRepeater } from "~/lib/plugins";
import { Block } from "@contember/react-block-repeater";
import {
  BookImageIcon,
  FileType2Icon,
  HistoryIcon,
  ListTodoIcon,
  NewspaperIcon,
} from "lucide-react";
import {
  ImageField,
  InputField,
  RadioEnumField,
} from "../../lib/form";
import {
  EntitySubTree,
  HasOne,
  If,
} from "@contember/interface";

export default () => {
    return (
        <>
            <Binding>
                <EntitySubTree entity="App(unique = 'One')" setOnCreate="(unique = 'One')">
                    <div className="flex flex-col gap-12">
                        <Slots.Title>App</Slots.Title>
                        <Slots.Back>
                            <BackButton />
                        </Slots.Back>
                        <Slots.Actions>
                            <PersistButton />
                        </Slots.Actions>
                        <ImageField baseField="image" urlField="url" label="Logo" />
                        <SideDimensions dimension="locale" as="currentLocale" field="locales(locale.code=$currentLocale)">
                            <InputField field="name" label="Název" />
                            <InputField field="title" label="Nadpis" />
                            <InputField field="subtitle" label="Podnadpis" />
                            <LocalizedSlugField
                            field={"url.url"}
                            derivedFrom={["name"]}
                            prefix='/app/'
                            />
                            <RichText field="description" label="Text" />
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
              <ListTodoIcon /> List s Ikony
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
                    </div>
                </EntitySubTree>
            </Binding>
        </>
    )
}