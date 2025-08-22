import { c } from "@contember/schema-definition"
import { ProductLocale } from "./Product"
import { FooterLocale } from "./Footer"
import { NavigationLocale } from "./Navigation"
import { PageLocale } from "./Page"
import { ImageLocale } from "./Image"

@c.Unique('code')
export class Locale {
    createdAt = c.dateTimeColumn().notNull().default('now')
    code = c.stringColumn().notNull()
    label = c.stringColumn().notNull()
    isPublished = c.boolColumn().notNull().default(true)
    
    product = c.oneHasMany(ProductLocale, 'locale')
    footers = c.oneHasMany(FooterLocale, 'locale')
    navigation = c.oneHasMany(NavigationLocale, 'locale')
    pages = c.oneHasMany(PageLocale, 'locale')
    image =c.oneHasMany(ImageLocale, 'locale')
}