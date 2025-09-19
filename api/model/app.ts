import { c } from '@contember/schema-definition'
import { Image } from './Image'
import { Locale } from './Locale'
import { one } from './enums'
import { BlockList } from './Block'
import { Url } from './Url'

export class App {
    createdAt = c.dateTimeColumn().notNull().default('now')
    image = c.oneHasOne(Image)
    locales = c.oneHasMany(AppLocale, 'root')
    unique = c.enumColumn(one).notNull().unique()
}

@c.Unique('root', 'locale')
export class AppLocale {
    createdAt = c.dateTimeColumn().notNull().default('now')
    root = c.manyHasOne(App, 'locales').notNull().cascadeOnDelete()
    locale = c.manyHasOne(Locale, 'apps').notNull().cascadeOnDelete()
    name = c.stringColumn().notNull()
    title = c.stringColumn()
    subtitle = c.stringColumn()
    description = c.stringColumn()
    url = c.oneHasOne(Url, 'appUrl')
    blocks = c.oneHasOne(BlockList, 'appBlocks')
}
