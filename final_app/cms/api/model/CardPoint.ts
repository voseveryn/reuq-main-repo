import { c } from '@contember/schema-definition'
import { Card } from './Card'

export class CardPoint {
	createdAt = c.dateTimeColumn().notNull().default('now')
	card = c.manyHasOne(Card, 'points')
	label = c.stringColumn()
	order = c.intColumn().default(0)
}