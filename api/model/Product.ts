import { c } from '@contember/schema-definition'
import { Image, ImageList } from './Image'
import { Seo } from './Seo'
import { Url } from './Url'
import { Locale } from './Locale'
import { BlockList, BlockProductList } from './Block'
import { alignContent, blockType, blockVariantion, colorVariantion, directionVariantion } from './enums'
import { TextList } from './TextList'
import { CardList } from './Card'

export class Product {
	createdAt = c.dateTimeColumn().notNull().default('now')
    blockProducts = c.manyHasOne(BlockProductList, 'product')

	image = c.oneHasOne(Image)
	imageList = c.oneHasOne(ImageList)
	icon = c.oneHasOne(Image)
	mediaList = c.oneHasOne(ImageList)

	
	locales = c.oneHasMany(ProductLocale, 'root')
	seo = c.oneHasOneInverse(Seo, 'product')
}

@c.Unique('root', 'locale')
export class ProductLocale {
	createdAt = c.dateTimeColumn().notNull().default('now')
	externalLink = c.stringColumn()

	title = c.stringColumn().notNull()
	description = c.stringColumn()
	url = c.oneHasOne(Url, 'product').notNull()

	shortLabel = c.stringColumn()
	infoLabel = c.stringColumn()

	root = c.manyHasOne(Product, 'locales').notNull().cascadeOnDelete()
	locale = c.manyHasOne(Locale, 'product').notNull().cascadeOnDelete()
	blocks = c.oneHasOne(ProductBlockList, 'productBlocks')
}
export class ProductBlockList {
	createdAt = c.dateTimeColumn().notNull().default('now')
	items = c.oneHasMany(ProductBlock, 'list').orderBy(['order'])
	productBlocks = c.oneHasOneInverse(ProductLocale, 'blocks')
}

export class ProductBlock {
		createdAt = c.dateTimeColumn().notNull().default('now')
		order = c.intColumn().notNull()
		type = c.enumColumn(blockType)
		align = c.enumColumn(alignContent)
		blockVariation = c.enumColumn(blockVariantion)
		colorVariantion = c.enumColumn(colorVariantion)
		directionVariantion = c.enumColumn(directionVariantion)
		list = c.manyHasOne(ProductBlockList, 'items').notNull().cascadeOnDelete()
		title = c.stringColumn()
		subtitle = c.stringColumn()
		text = c.stringColumn()
		image = c.oneHasOne(Image)
		imageList = c.manyHasOne(ImageList, 'productBlocks')
		supportedProducts = c.oneHasOne(BlockProductList, 'productBlock')
		textList = c.oneHasOne(TextList, "productBlock");
		cardList = c.oneHasOne(CardList, "productBlock")
}