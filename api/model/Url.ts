import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Link } from './Link'
import { PageLocale } from './Page'
import { ProductLocale } from './Product'
import { AppLocale } from './app'


@c.Unique('url')

@c.Allow(publicRole, {
	read: ['url', 'target', 'links'],
})
export class Url {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn()
	target = c.oneHasOneInverse(Link, 'link')
	links = c.oneHasMany(Link, 'internalTarget')
	pageUrl = c.oneHasOneInverse(PageLocale, 'url')
	product = c.oneHasOneInverse(ProductLocale, 'url')
	appUrl = c.oneHasOneInverse(AppLocale, 'url')
}