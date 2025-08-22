import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { blockType } from './enums'
import { PageLocale } from './Page'
import { Content } from './Content'
import { Link } from './Link'
import { Image, ImageList } from './Image';
import { CardList } from './Card'
import { TextList } from './TextList'
import { Product, ProductLocale } from './Product'
import { Video } from './Video'




@c.Allow(publicRole, {
	read: true,
})
export class Block {
	createdAt = c.dateTimeColumn().notNull().default('now')
	order = c.intColumn().notNull()
	type = c.enumColumn(blockType)
	list = c.manyHasOne(BlockList, 'items').notNull().cascadeOnDelete()
	title = c.stringColumn()
	subtitle = c.stringColumn()
	content = c.oneHasOne(Content, 'blockContent')
	text = c.stringColumn()
	link = c.manyHasOne(Link, 'blockLink')
	image = c.manyHasOne(Image, 'blockImage')
	video = c.manyHasOne(Video, 'block')
	cardList = c.oneHasOne(CardList, 'block')
	heroContent = c.oneHasOne(BlockHeroContent, 'block')
	textList = c.oneHasOne(TextList, 'block')
	imageList = c.manyHasOne(ImageList, 'block')
	productList = c.oneHasOne(BlockProductList, 'block')
} 

export class BlockHeroContent {
	createdAt = c.dateTimeColumn().notNull().default('now')
	block = c.oneHasOneInverse(Block, 'heroContent')
	items = c.oneHasMany(BlockHeroContentItem, 'list')
}

export class BlockHeroContentItem {
	createdAt = c.dateTimeColumn().notNull().default('now')
	link = c.oneHasOne(Link)
	label = c.stringColumn()
	list = c.manyHasOne(BlockHeroContent, 'items')
	order = c.intColumn().notNull().default(0)
}
export class BlockProductList {
	createdAt = c.dateTimeColumn().notNull().default('now')
	products = c.oneHasMany(BlockProduct, 'list')
	block = c.oneHasOneInverse(Block, 'productList')
}

export class BlockProduct {
	createdAt = c.dateTimeColumn().notNull().default('now')
	order = c.intColumn().notNull().default(0)

	list = c.manyHasOne(BlockProductList, 'products')
	subtitle = c.stringColumn()
	product = c.manyHasOne(Product, 'blockProducts').setNullOnDelete()
}

@c.Allow(publicRole, {
	read: ['items'],
})
export class BlockList {
	createdAt = c.dateTimeColumn().notNull().default('now')
	items = c.oneHasMany(Block, 'list').orderBy(['order'])
	pageBlocks = c.oneHasOneInverse(PageLocale, 'blocks')
	productBlocks = c.oneHasOneInverse(ProductLocale, 'blocks')
}