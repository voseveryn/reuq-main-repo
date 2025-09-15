import { SlugField } from './extra-lib/url'
import slugify from 'slugify'
import { Component } from '@contember/interface'


type LocalizedSlugFieldProps = {
	field: string
	derivedFrom: string[]
	prefix?: string
}

export const LocalizedSlugField = Component<{ field: string; derivedFrom: string[]; prefix?: string }>((p) => (
  <SlugField field={p.field} derivedFrom={p.derivedFrom} prefix={(p.prefix)} withLocalePrefix />
))

