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
				const slug = parts.join('-')
				return props.prefix ? `${props.prefix}-${slug}` : slug
			}}
			persistedHardPrefix={(env) => {
				const code = env.getVariableOrElse('currentLocaleCode', undefined)
				if (!code) return ''
				if (props.prefix) {
					return `/${code}/${props.prefix}/`
				}
				return `/${code}/`
			}}
		/>
	)
})
