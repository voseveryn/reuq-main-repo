import { SlugField } from './extra-lib/field'
import slugify from 'slugify'
import { Component } from '@contember/interface'

type LocalizedSlugFieldProps = {
	field: string
	derivedFrom: string[]
	prefix?: string
}

export const LocalizedSlugField = Component<LocalizedSlugFieldProps>((props) => {
	
	return (
		<SlugField
			field={props.field}
			derivedFrom={props.derivedFrom}
			slugify={(value) => slugify(value, { lower: true })}
			format={(accessors) => {
				const parts = accessors.map(a => a.value).filter(Boolean)
				return parts.join('-')
			}}
			persistedHardPrefix={(env) => {
				const code = env.getVariableOrElse('currentLocaleCode', undefined)
				return code ? `/${code}/${props.prefix == null ? '' : props.prefix + '/'}` : ''
			}}
		/>
	)
})
