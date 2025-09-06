import { SideDimensions } from '../../../lib/dimensions'
import { FormLayout, ImageField, InputField, TextareaField } from '../../../lib/form'
import { Component, HasOne, StaticRender } from '@contember/interface'
import { RichText } from '../atoms/rich-text'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '../../../lib/repeater'
import { BlockRepeater } from '~/lib/plugins'
import { Block } from "@contember/react-block-repeater";
import { LocalizedSlugField } from '../atoms/SlugField'

export const ProductForm = Component(() => (
	<FormLayout>
		<ImageField baseField="image" urlField="url" label="Obrázek" />
		<SideDimensions dimension="locale" as="currentLocale" field="locales(locale.code=$currentLocale)">
			<InputField field="title" label="Název" />
			<LocalizedSlugField field={"url.url"} derivedFrom={["title"]} />
			<InputField field="shortLabel" label="Krátký popis" />
			<InputField field="infoLabel" label="Informační popis" />
			<TextareaField field="description" label="Popis" />
			<BlockRepeater field='blocks'>
                <Block name="text" label="Textová sekce">
                    <InputField field="title" label="Nadpis" />
                    <InputField field="subtitle" label="PodNadpis" />
                    <RichText field='text' label='Text'/>
                </Block>
            </BlockRepeater>
		</SideDimensions>
	</FormLayout>
))