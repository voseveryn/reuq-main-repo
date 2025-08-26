
import { Binding, PersistButton } from '../../lib/binding'
import { BackButton } from '../../lib/buttons'
import { SideDimensions } from '../../lib/dimensions'
import { ImageField, InputField } from '../../lib/form'
import { Slots } from '../../lib/layout'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '../../lib/repeater'
import { EntitySubTree, HasOne, StaticRender } from '@contember/interface'
import { NavigationItemForm } from '../components/forms/navigation-item-form'

export default () => {
	return (
		<>
			<Binding>
				<EntitySubTree entity="Navigation(unique = 'One')" setOnCreate="(unique = 'One')">
					<div className="flex flex-col gap-12">
						<Slots.Title>Header</Slots.Title>
						<Slots.Back>
							<BackButton />
						</Slots.Back>
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						<ImageField baseField="logo" urlField="url" label="Logo" />

						<SideDimensions dimension="locale" as="currentLocale" field="locales(locale.code=$currentLocale)">
							<HasOne field="navigationList">
								<DefaultRepeater field="items" sortableBy="order" title="Položky v menu">
									<NavigationItemForm />
									<RepeaterItemActions>
										<RepeaterRemoveItemButton />
									</RepeaterItemActions>
								</DefaultRepeater>
							</HasOne>
						</SideDimensions>
					</div>
				</EntitySubTree>
			</Binding>
		</>
	)
}