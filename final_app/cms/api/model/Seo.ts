import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Image } from './Image'
import { Page } from './Page'
import { Product } from './Product'


@c.Allow(publicRole, {
	read: ['title', 'description', 'keywords', 'image'],
})
export class Seo {
	createdAt = c.dateTimeColumn().notNull().default('now')
	title = c.stringColumn()
	description = c.stringColumn()
	keywords = c.stringColumn()
	image = c.manyHasOne(Image, 'ogImages')
	pageSeo = c.oneHasOneInverse(Page, 'seo')
	product = c.oneHasOne(Product, 'seo')
}