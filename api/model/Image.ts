import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Seo } from './Seo'
import { ContentReference } from './Content';
import { Block } from './Block'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

import { Locale } from './Locale';
import { Card } from './Card';
import { TextListItem } from './TextList';
import { ProductBlock } from './Product';


@c.Allow(publicRole, {
	read: true,
})
export class Image {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn().notNull()
	width = c.intColumn()
	height = c.intColumn()
	fileName = c.stringColumn()
	lastModified = c.dateTimeColumn()
	fileSize = c.intColumn()
	fileType = c.stringColumn()
	ogImages = c.oneHasMany(Seo, 'image')
	contentReferenceImage = c.oneHasMany(ContentReference, 'image')
	blockImage = c.oneHasMany(Block, 'image')
	imageItem = c.oneHasMany(ImageItem, 'image')
	navigationLogo = c.oneHasMany(Navigation, 'logo')
	footerLogo = c.oneHasMany(Footer, 'logo')
	map = c.oneHasMany(Footer, 'mapImage')
	card = c.oneHasMany(Card, 'image')
	textList = c.oneHasMany(TextListItem, 'image')
	locales = c.oneHasMany(ImageLocale, 'root')
}

@c.Unique('root', 'locale')
export class ImageLocale {
	createdAt =  c.dateTimeColumn().notNull().default('now')
	description = c.stringColumn()
	alt = c.stringColumn()
	root = c.manyHasOne(Image, 'locales').notNull().cascadeOnDelete()
	locale = c.manyHasOne(Locale, 'image').notNull().cascadeOnDelete()
}


export class ImageList {
	createdAt = c.dateTimeColumn().notNull().default('now')
	contentReference = c.oneHasOneInverse(ContentReference, 'imageList')
	block = c.oneHasMany(Block, 'imageList')
	productBlocks = c.oneHasMany(ProductBlock, 'imageList' )
	items = c.oneHasMany(ImageItem, 'imageItem')
}

export class ImageItem {
	createdAt = c.dateTimeColumn().notNull().default('now')
	image = c.manyHasOne(Image, 'imageItem')
	imageItem = c.manyHasOne(ImageList, 'items')
	order = c.intColumn().notNull().default(0)
}