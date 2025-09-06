import { Binding, PersistButton } from '../../lib/binding'
import { BackButton } from '../../lib/buttons'
import { Slots } from '../../lib/layout'
import { EntitySubTree } from '@contember/interface'
import { ContactForm } from '../components/forms/contact-form'

export default () => {
    return (
        <Binding>
            <EntitySubTree entity="Contact(unique = 'One')" setOnCreate="(unique = 'One')">
                <div className="flex flex-col gap-12">
                    <Slots.Title>Kontakt</Slots.Title>
                    <Slots.Back>
                        <BackButton />
                    </Slots.Back>
                    <Slots.Actions>
                        <PersistButton />
                    </Slots.Actions>
                    <ContactForm />
                </div>
            </EntitySubTree>
        </Binding>
    )
}