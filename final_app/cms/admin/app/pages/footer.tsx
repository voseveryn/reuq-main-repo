import { FooterForm } from '../components/forms/footer-form'
import { Binding, PersistButton } from '../../lib/binding'
import { BackButton } from '../../lib/buttons'
import { Slots } from '../../lib/layout'
import { EntitySubTree } from '@contember/interface'

export default () => {
	return (
		<Binding>
			<EntitySubTree entity="Footer(unique = 'One')" setOnCreate="(unique = 'One')">
				<div className="flex flex-col gap-12">
					<Slots.Title>Footer</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<Slots.Actions>
						<PersistButton />
					</Slots.Actions>
					<FooterForm />
				</div>
			</EntitySubTree>
		</Binding>
	)
}