import { c } from '@contember/schema-definition'
import { Link } from './Link'
import { Locale } from './Locale'
import { Image } from './Image'
import { one } from './enums'

export class Navigation { 
	createdAt = c.dateTimeColumn().notNull().default('now')
	unique = c.enumColumn(one).notNull().unique()
	locales = c.oneHasMany(NavigationLocale, 'root')
	logo = c.manyHasOne(Image, 'navigationLogo')
}


export class NavigationItem {
	createdAt = c.dateTimeColumn().notNull().default('now')
	list = c.manyHasOne(NavigationList, 'items')
	order = c.intColumn()
	link = c.manyHasOne(Link, 'navigationItemLink')

} 

export class NavigationList {
	createdAt = c.dateTimeColumn().notNull().default('now')
	items = c.oneHasMany(NavigationItem, 'list')
	navigation = c.oneHasOneInverse(NavigationLocale, 'navigationList')
}

@c.Unique('root', 'locale')
export class NavigationLocale {
	createdAt = c.dateTimeColumn().notNull().default('now')
	root = c.manyHasOne(Navigation, 'locales').notNull().cascadeOnDelete()
	locale = c.manyHasOne(Locale, 'navigation').notNull().cascadeOnDelete()
	navigationList = c.oneHasOne(NavigationList, 'navigation')
}