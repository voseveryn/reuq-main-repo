import { c } from '@contember/schema-definition'
import { Image, ImageList } from './Image'
import { Seo } from './Seo'
import { Url } from './Url'
import { Locale } from './Locale'
import { BlockList, BlockProduct } from './Block'

export class Product {
	createdAt = c.dateTimeColumn().notNull().default('now')
    blockProducts = c.oneHasMany(BlockProduct, 'product')

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
	blocks = c.oneHasOne(BlockList, 'productBlocks')
}