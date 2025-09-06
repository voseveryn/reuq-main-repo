import { c } from '@contember/schema-definition'
import { Image } from './Image'
import { Locale } from './Locale'
import { one } from './enums'
export class Contact {
    createdAt = c.dateTimeColumn().notNull().default('now')
    mapImage = c.oneHasOne(Image)
    locales = c.oneHasMany(ContactLocale, 'root')
    unique = c.enumColumn(one).notNull().unique()
}

@c.Unique('root', 'locale')
export class ContactLocale {
    createdAt = c.dateTimeColumn().notNull().default('now')
    root = c.manyHasOne(Contact, 'locales').notNull().cascadeOnDelete()
    locale = c.manyHasOne(Locale, 'contacts').notNull().cascadeOnDelete()
    itemList = c.oneHasOne(ContactItemList, 'contact')
    title = c.stringColumn()
    subtitle = c.stringColumn()
}
export class ContactItemList {
    contact = c.oneHasOneInverse(ContactLocale, 'itemList')
    items = c.oneHasMany(ContactItem, 'list')
}

export class ContactItem {
    createdAt = c.dateTimeColumn().notNull().default('now')
    list = c.manyHasOne(ContactItemList, 'items')
    order = c.intColumn()
    text = c.stringColumn()
}