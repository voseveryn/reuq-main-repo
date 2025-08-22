import { c } from '@contember/schema-definition'

export const publicRole = c.createRole('public', { stages: '*' })