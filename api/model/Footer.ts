import { c } from '@contember/schema-definition'
import { Image } from './Image'
import { Locale } from './Locale'
import { Content } from './Content'
import { one } from './enums'


export class Footer {
    createdAt = c.dateTimeColumn().notNull().default('now')
    logo = c.manyHasOne(Image, 'footerLogo')
    mapImage = c.manyHasOne(Image, 'map')
    locales = c.oneHasMany(FooterLocale, 'root')
    unique = c.enumColumn(one).notNull().unique()
}

@c.Unique('root', 'locale')
export class FooterLocale {
    createdAt = c.dateTimeColumn().notNull().default('now')
    root = c.manyHasOne(Footer, 'locales').notNull().cascadeOnDelete()
    locale = c.manyHasOne(Locale, 'footers').notNull().cascadeOnDelete()
    links = c.oneHasOne(Content, 'footerLinks') 
    title = c.stringColumn()
    createdBy = c.stringColumn()
    copyRight = c.stringColumn()
    itemList = c.oneHasOne(FooterItemList, 'footer')

}

export class FooterItemList {
    footer = c.oneHasOneInverse(FooterLocale, 'itemList')
    items = c.oneHasMany(FooterItem, 'list')
}

export class FooterItem {
    createdAt = c.dateTimeColumn().notNull().default('now')
    list = c.manyHasOne(FooterItemList, 'items')
    order = c.intColumn()
    content = c.oneHasOne(Content, 'footerContent')
    text = c.stringColumn()
}