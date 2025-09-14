import { FormLayout } from '../../../lib/form'
import { SelectLinkField } from '../../../lib/plugins/select-link-field'
import { Component } from '@contember/interface'

export const NavigationItemForm = Component(() => (
	<FormLayout>
		<SelectLinkField label="Link" field="link" />
	</FormLayout>
))