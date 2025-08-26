import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { linkType } from './enums'
import { Url } from './Url'
import { NavigationItem } from './Navigation'
import { Block, BlockHeroContent, BlockHeroContentItem } from './Block';
import { ContentReference } from './Content'

@c.Allow(publicRole, {
	read: true,
})
export class Link {
	createdAt = c.dateTimeColumn().notNull().default('now')
	type = c.enumColumn(linkType).notNull()
	link = c.oneHasOne(Url, 'target')
	title = c.stringColumn()
	blockLink = c.oneHasMany(Block, 'link')
	internalTarget = c.manyHasOne(Url, 'links').setNullOnDelete()
	externalTarget = c.stringColumn()
	navigationItemLink = c.oneHasMany(NavigationItem, 'link')
	contentReferenceLink = c.oneHasMany(ContentReference, 'link')
}