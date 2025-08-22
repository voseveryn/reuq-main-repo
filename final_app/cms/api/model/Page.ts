import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { pageType } from './enums'
import { Locale } from './Locale'
import { Seo } from './Seo'
import { Image } from './Image'
import { Url } from './Url'
import { BlockList } from './Block'



@c.Allow(publicRole, {
	read: ['createdAt', 'publishedAt', 'archivedAt'],
})
export class Page {
	createdAt = c.dateTimeColumn().notNull().default('now')
	publishedAt = c.dateTimeColumn()
	archivedAt = c.dateTimeColumn()
	locales = c.oneHasMany(PageLocale, 'root')
	pageType = c.enumColumn(pageType)
	seo = c.oneHasOne(Seo, 'pageSeo')
	bgImage = c.oneHasOne(Image)
}
@c.Unique('root', 'locale')
export class PageLocale {
	createdAt = c.dateTimeColumn().notNull().default('now')
	root = c.manyHasOne(Page, 'locales').notNull().cascadeOnDelete()
	locale = c.manyHasOne(Locale, 'pages')
	title = c.stringColumn().notNull()
	subtitle = c.stringColumn()
	url = c.oneHasOne(Url, 'pageUrl')
	blocks = c.oneHasOne(BlockList, 'pageBlocks')
}

