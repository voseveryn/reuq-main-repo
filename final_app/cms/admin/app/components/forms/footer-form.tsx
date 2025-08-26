import { SideDimensions } from '../../../lib/dimensions'
import { FormLayout, ImageField, InputField } from '../../../lib/form'
import { Component, HasOne, StaticRender } from '@contember/interface'
import { RichText } from '../atoms/rich-text'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '../../../lib/repeater'

export const FooterForm = Component(() => (
	<FormLayout>
		<SideDimensions dimension="locale" as="currentLocale" field="locales(locale.code=$currentLocale)">
            <InputField field="title" label="Nadpis" />
            <InputField field="copyRight" label="CopyRight" />
			<h2 className="mb-4 font-bold">Položky ve footeru</h2>
			<HasOne field="itemList">
				<DefaultRepeater field="items" sortableBy="order">
					<RichText field="text" label="Text" />
					<RepeaterItemActions>
						<RepeaterRemoveItemButton />
					</RepeaterItemActions>
				</DefaultRepeater>
			</HasOne>
		</SideDimensions>
		<ImageField baseField="logo" urlField="url" label="Logo" />
	</FormLayout>
))