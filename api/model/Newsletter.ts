import { c } from '@contember/schema-definition'

export class Newsletter {
    createdAt = c.dateTimeColumn().notNull().default('now')
    mail = c.stringColumn()
}