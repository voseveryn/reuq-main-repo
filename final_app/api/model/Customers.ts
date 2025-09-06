import { c } from '@contember/schema-definition'
import { publicRole } from './acl'


@c.Allow(publicRole, {
    read: true,
})
export class Customer {
    createdAt = c.dateTimeColumn().notNull().default('now')
    name = c.stringColumn()
    lastName = c.stringColumn()
    phoneNumber = c.stringColumn()
    email = c.stringColumn()
    date = c.dateTimeColumn()
    text = c.stringColumn()
}