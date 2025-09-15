import type { AlignContent } from './enums'
import type { BlockType } from './enums'
import type { BlockVariantion } from './enums'
import type { CardType } from './enums'
import type { ColorVariantion } from './enums'
import type { ContentReferenceTypeEnum } from './enums'
import type { DirectionVariantion } from './enums'
import type { LinkType } from './enums'
import type { One } from './enums'
import type { PageType } from './enums'
import type { TextListType } from './enums'
import type { Unique } from './enums'

export type JSONPrimitive = string | number | boolean | null
export type JSONValue = JSONPrimitive | JSONObject | JSONArray
export type JSONObject = { readonly [K in string]?: JSONValue }
export type JSONArray = readonly JSONValue[]

export type Block <OverRelation extends string | never = never> = {
	name: 'Block'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ content: Content['unique']}, OverRelation>
		| Omit<{ cardList: CardList['unique']}, OverRelation>
		| Omit<{ heroContent: BlockHeroContent['unique']}, OverRelation>
		| Omit<{ textList: TextList['unique']}, OverRelation>
		| Omit<{ productList: BlockProductList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number
		type: BlockType | null
		align: AlignContent | null
		blockVariation: BlockVariantion | null
		colorVariantion: ColorVariantion | null
		directionVariantion: DirectionVariantion | null
		title: string | null
		subtitle: string | null
		text: string | null
	}
	hasOne: {
		list: BlockList
		content: Content
		link: Link
		image: Image
		video: Video
		cardList: CardList
		heroContent: BlockHeroContent
		textList: TextList
		imageList: ImageList
		productList: BlockProductList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type BlockHeroContent <OverRelation extends string | never = never> = {
	name: 'BlockHeroContent'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
		| Omit<{ items: BlockHeroContentItem['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		block: Block
	}
	hasMany: {
		items: BlockHeroContentItem<'list'>
	}
	hasManyBy: {
		itemsByLink: { entity: BlockHeroContentItem; by: {link: Link['unique']}  }
	}
}
export type BlockHeroContentItem <OverRelation extends string | never = never> = {
	name: 'BlockHeroContentItem'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ link: Link['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		label: string | null
		order: number
	}
	hasOne: {
		link: Link
		list: BlockHeroContent
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type BlockList <OverRelation extends string | never = never> = {
	name: 'BlockList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ items: Block['unique']}, OverRelation>
		| Omit<{ pageBlocks: PageLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		pageBlocks: PageLocale
	}
	hasMany: {
		items: Block<'list'>
	}
	hasManyBy: {
		itemsByContent: { entity: Block; by: {content: Content['unique']}  }
		itemsByCardList: { entity: Block; by: {cardList: CardList['unique']}  }
		itemsByHeroContent: { entity: Block; by: {heroContent: BlockHeroContent['unique']}  }
		itemsByTextList: { entity: Block; by: {textList: TextList['unique']}  }
		itemsByProductList: { entity: Block; by: {productList: BlockProductList['unique']}  }
	}
}
export type BlockProductList <OverRelation extends string | never = never> = {
	name: 'BlockProductList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
		| Omit<{ productBlock: ProductBlock['unique']}, OverRelation>
		| Omit<{ product: Product['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		subtitle: string | null
		order: number
	}
	hasOne: {
		block: Block
		productBlock: ProductBlock
	}
	hasMany: {
		product: Product<'blockProducts'>
	}
	hasManyBy: {
		productByImage: { entity: Product; by: {image: Image['unique']}  }
		productByImageList: { entity: Product; by: {imageList: ImageList['unique']}  }
		productByIcon: { entity: Product; by: {icon: Image['unique']}  }
		productByMediaList: { entity: Product; by: {mediaList: ImageList['unique']}  }
		productByLocales: { entity: Product; by: {locales: ProductLocale['unique']}  }
		productBySeo: { entity: Product; by: {seo: Seo['unique']}  }
	}
}
export type Card <OverRelation extends string | never = never> = {
	name: 'Card'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ points: CardPoint['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		type: CardType | null
		orderBy: number | null
		title: string | null
		subtitle: string | null
		text: string | null
	}
	hasOne: {
		list: CardList
		image: Image
		textList: TextList
	}
	hasMany: {
		points: CardPoint<'card'>
	}
	hasManyBy: {
	}
}
export type CardList <OverRelation extends string | never = never> = {
	name: 'CardList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ items: Card['unique']}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
		| Omit<{ productBlock: ProductBlock['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		block: Block
		productBlock: ProductBlock
	}
	hasMany: {
		items: Card<'list'>
	}
	hasManyBy: {
		itemsByPoints: { entity: Card; by: {points: CardPoint['unique']}  }
	}
}
export type CardPoint <OverRelation extends string | never = never> = {
	name: 'CardPoint'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		label: string | null
		order: number | null
	}
	hasOne: {
		card: Card
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Contact <OverRelation extends string | never = never> = {
	name: 'Contact'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ unique: One}, OverRelation>
		| Omit<{ mapImage: Image['unique']}, OverRelation>
		| Omit<{ locales: ContactLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		unique: One
	}
	hasOne: {
		mapImage: Image
	}
	hasMany: {
		locales: ContactLocale<'root'>
	}
	hasManyBy: {
		localesByLocale: { entity: ContactLocale; by: {locale: Locale['unique']}  }
		localesByItemList: { entity: ContactLocale; by: {itemList: ContactItemList['unique']}  }
	}
}
export type ContactItem <OverRelation extends string | never = never> = {
	name: 'ContactItem'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number | null
		text: string | null
	}
	hasOne: {
		list: ContactItemList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type ContactItemList <OverRelation extends string | never = never> = {
	name: 'ContactItemList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ contact: ContactLocale['unique']}, OverRelation>
		| Omit<{ items: ContactItem['unique']}, OverRelation>
	columns: {
		id: string
	}
	hasOne: {
		contact: ContactLocale
	}
	hasMany: {
		items: ContactItem<'list'>
	}
	hasManyBy: {
	}
}
export type ContactLocale <OverRelation extends string | never = never> = {
	name: 'ContactLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Contact['unique'], locale: Locale['unique']}, OverRelation>
		| Omit<{ itemList: ContactItemList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		title: string | null
		subtitle: string | null
	}
	hasOne: {
		root: Contact
		locale: Locale
		itemList: ContactItemList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Content <OverRelation extends string | never = never> = {
	name: 'Content'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ references: ContentReference['unique']}, OverRelation>
		| Omit<{ blockContent: Block['unique']}, OverRelation>
		| Omit<{ footerContent: FooterItem['unique']}, OverRelation>
		| Omit<{ footerLinks: FooterLocale['unique']}, OverRelation>
	columns: {
		id: string
		data: JSONValue | null
	}
	hasOne: {
		blockContent: Block
		footerContent: FooterItem
		footerLinks: FooterLocale
	}
	hasMany: {
		references: ContentReference<'content'>
	}
	hasManyBy: {
		referencesByImageList: { entity: ContentReference; by: {imageList: ImageList['unique']}  }
	}
}
export type ContentReference <OverRelation extends string | never = never> = {
	name: 'ContentReference'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ imageList: ImageList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		type: ContentReferenceTypeEnum | null
		text: string | null
	}
	hasOne: {
		content: Content
		imageList: ImageList
		image: Image
		link: Link
		textList: TextList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Customer <OverRelation extends string | never = never> = {
	name: 'Customer'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		name: string | null
		lastName: string | null
		phoneNumber: string | null
		email: string | null
		date: string | null
		text: string | null
	}
	hasOne: {
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Footer <OverRelation extends string | never = never> = {
	name: 'Footer'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ unique: One}, OverRelation>
		| Omit<{ locales: FooterLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		unique: One
	}
	hasOne: {
		logo: Image
		mapImage: Image
	}
	hasMany: {
		locales: FooterLocale<'root'>
	}
	hasManyBy: {
		localesByLocale: { entity: FooterLocale; by: {locale: Locale['unique']}  }
		localesByLinks: { entity: FooterLocale; by: {links: Content['unique']}  }
		localesByItemList: { entity: FooterLocale; by: {itemList: FooterItemList['unique']}  }
	}
}
export type FooterItem <OverRelation extends string | never = never> = {
	name: 'FooterItem'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ content: Content['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number | null
		text: string | null
	}
	hasOne: {
		list: FooterItemList
		content: Content
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type FooterItemList <OverRelation extends string | never = never> = {
	name: 'FooterItemList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ footer: FooterLocale['unique']}, OverRelation>
		| Omit<{ items: FooterItem['unique']}, OverRelation>
	columns: {
		id: string
	}
	hasOne: {
		footer: FooterLocale
	}
	hasMany: {
		items: FooterItem<'list'>
	}
	hasManyBy: {
		itemsByContent: { entity: FooterItem; by: {content: Content['unique']}  }
	}
}
export type FooterLocale <OverRelation extends string | never = never> = {
	name: 'FooterLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Footer['unique'], locale: Locale['unique']}, OverRelation>
		| Omit<{ links: Content['unique']}, OverRelation>
		| Omit<{ itemList: FooterItemList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		title: string | null
		createdBy: string | null
		copyRight: string | null
	}
	hasOne: {
		root: Footer
		locale: Locale
		links: Content
		itemList: FooterItemList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Image <OverRelation extends string | never = never> = {
	name: 'Image'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ ogImages: Seo['unique']}, OverRelation>
		| Omit<{ contentReferenceImage: ContentReference['unique']}, OverRelation>
		| Omit<{ blockImage: Block['unique']}, OverRelation>
		| Omit<{ imageItem: ImageItem['unique']}, OverRelation>
		| Omit<{ navigationLogo: Navigation['unique']}, OverRelation>
		| Omit<{ footerLogo: Footer['unique']}, OverRelation>
		| Omit<{ map: Footer['unique']}, OverRelation>
		| Omit<{ card: Card['unique']}, OverRelation>
		| Omit<{ textList: TextListItem['unique']}, OverRelation>
		| Omit<{ locales: ImageLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		url: string
		width: number | null
		height: number | null
		fileName: string | null
		lastModified: string | null
		fileSize: number | null
		fileType: string | null
	}
	hasOne: {
	}
	hasMany: {
		ogImages: Seo<'image'>
		contentReferenceImage: ContentReference<'image'>
		blockImage: Block<'image'>
		imageItem: ImageItem<'image'>
		navigationLogo: Navigation<'logo'>
		footerLogo: Footer<'logo'>
		map: Footer<'mapImage'>
		card: Card<'image'>
		textList: TextListItem<'image'>
		locales: ImageLocale<'root'>
	}
	hasManyBy: {
		ogImagesByPageSeo: { entity: Seo; by: {pageSeo: Page['unique']}  }
		ogImagesByProduct: { entity: Seo; by: {product: Product['unique']}  }
		contentReferenceImageByImageList: { entity: ContentReference; by: {imageList: ImageList['unique']}  }
		blockImageByContent: { entity: Block; by: {content: Content['unique']}  }
		blockImageByCardList: { entity: Block; by: {cardList: CardList['unique']}  }
		blockImageByHeroContent: { entity: Block; by: {heroContent: BlockHeroContent['unique']}  }
		blockImageByTextList: { entity: Block; by: {textList: TextList['unique']}  }
		blockImageByProductList: { entity: Block; by: {productList: BlockProductList['unique']}  }
		navigationLogoByUnique: { entity: Navigation; by: {unique: One}  }
		navigationLogoByLocales: { entity: Navigation; by: {locales: NavigationLocale['unique']}  }
		footerLogoByUnique: { entity: Footer; by: {unique: One}  }
		footerLogoByLocales: { entity: Footer; by: {locales: FooterLocale['unique']}  }
		mapByUnique: { entity: Footer; by: {unique: One}  }
		mapByLocales: { entity: Footer; by: {locales: FooterLocale['unique']}  }
		cardByPoints: { entity: Card; by: {points: CardPoint['unique']}  }
		localesByLocale: { entity: ImageLocale; by: {locale: Locale['unique']}  }
	}
}
export type ImageItem <OverRelation extends string | never = never> = {
	name: 'ImageItem'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number
	}
	hasOne: {
		image: Image
		imageItem: ImageList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type ImageList <OverRelation extends string | never = never> = {
	name: 'ImageList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ contentReference: ContentReference['unique']}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
		| Omit<{ productBlocks: ProductBlock['unique']}, OverRelation>
		| Omit<{ items: ImageItem['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		contentReference: ContentReference
	}
	hasMany: {
		block: Block<'imageList'>
		productBlocks: ProductBlock<'imageList'>
		items: ImageItem<'imageItem'>
	}
	hasManyBy: {
		blockByContent: { entity: Block; by: {content: Content['unique']}  }
		blockByCardList: { entity: Block; by: {cardList: CardList['unique']}  }
		blockByHeroContent: { entity: Block; by: {heroContent: BlockHeroContent['unique']}  }
		blockByTextList: { entity: Block; by: {textList: TextList['unique']}  }
		blockByProductList: { entity: Block; by: {productList: BlockProductList['unique']}  }
		productBlocksByImage: { entity: ProductBlock; by: {image: Image['unique']}  }
		productBlocksBySupportedProducts: { entity: ProductBlock; by: {supportedProducts: BlockProductList['unique']}  }
		productBlocksByTextList: { entity: ProductBlock; by: {textList: TextList['unique']}  }
		productBlocksByCardList: { entity: ProductBlock; by: {cardList: CardList['unique']}  }
	}
}
export type ImageLocale <OverRelation extends string | never = never> = {
	name: 'ImageLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Image['unique'], locale: Locale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		description: string | null
		alt: string | null
	}
	hasOne: {
		root: Image
		locale: Locale
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Link <OverRelation extends string | never = never> = {
	name: 'Link'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ link: Url['unique']}, OverRelation>
		| Omit<{ blockLink: Block['unique']}, OverRelation>
		| Omit<{ navigationItemLink: NavigationItem['unique']}, OverRelation>
		| Omit<{ contentReferenceLink: ContentReference['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		type: LinkType
		title: string | null
		externalTarget: string | null
	}
	hasOne: {
		link: Url
		internalTarget: Url
	}
	hasMany: {
		blockLink: Block<'link'>
		navigationItemLink: NavigationItem<'link'>
		contentReferenceLink: ContentReference<'link'>
	}
	hasManyBy: {
		blockLinkByContent: { entity: Block; by: {content: Content['unique']}  }
		blockLinkByCardList: { entity: Block; by: {cardList: CardList['unique']}  }
		blockLinkByHeroContent: { entity: Block; by: {heroContent: BlockHeroContent['unique']}  }
		blockLinkByTextList: { entity: Block; by: {textList: TextList['unique']}  }
		blockLinkByProductList: { entity: Block; by: {productList: BlockProductList['unique']}  }
		contentReferenceLinkByImageList: { entity: ContentReference; by: {imageList: ImageList['unique']}  }
	}
}
export type Locale <OverRelation extends string | never = never> = {
	name: 'Locale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ code: string}, OverRelation>
		| Omit<{ product: ProductLocale['unique']}, OverRelation>
		| Omit<{ footers: FooterLocale['unique']}, OverRelation>
		| Omit<{ navigation: NavigationLocale['unique']}, OverRelation>
		| Omit<{ pages: PageLocale['unique']}, OverRelation>
		| Omit<{ image: ImageLocale['unique']}, OverRelation>
		| Omit<{ contacts: ContactLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		code: string
		label: string
		isPublished: boolean
	}
	hasOne: {
	}
	hasMany: {
		product: ProductLocale<'locale'>
		footers: FooterLocale<'locale'>
		navigation: NavigationLocale<'locale'>
		pages: PageLocale<'locale'>
		image: ImageLocale<'locale'>
		contacts: ContactLocale<'locale'>
	}
	hasManyBy: {
		productByRoot: { entity: ProductLocale; by: {root: Product['unique']}  }
		productByUrl: { entity: ProductLocale; by: {url: Url['unique']}  }
		productByBlocks: { entity: ProductLocale; by: {blocks: ProductBlockList['unique']}  }
		footersByRoot: { entity: FooterLocale; by: {root: Footer['unique']}  }
		footersByLinks: { entity: FooterLocale; by: {links: Content['unique']}  }
		footersByItemList: { entity: FooterLocale; by: {itemList: FooterItemList['unique']}  }
		navigationByRoot: { entity: NavigationLocale; by: {root: Navigation['unique']}  }
		navigationByNavigationList: { entity: NavigationLocale; by: {navigationList: NavigationList['unique']}  }
		pagesByRoot: { entity: PageLocale; by: {root: Page['unique']}  }
		pagesByUrl: { entity: PageLocale; by: {url: Url['unique']}  }
		pagesByBlocks: { entity: PageLocale; by: {blocks: BlockList['unique']}  }
		imageByRoot: { entity: ImageLocale; by: {root: Image['unique']}  }
		contactsByRoot: { entity: ContactLocale; by: {root: Contact['unique']}  }
		contactsByItemList: { entity: ContactLocale; by: {itemList: ContactItemList['unique']}  }
	}
}
export type Navigation <OverRelation extends string | never = never> = {
	name: 'Navigation'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ unique: One}, OverRelation>
		| Omit<{ locales: NavigationLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		unique: One
	}
	hasOne: {
		logo: Image
	}
	hasMany: {
		locales: NavigationLocale<'root'>
	}
	hasManyBy: {
		localesByLocale: { entity: NavigationLocale; by: {locale: Locale['unique']}  }
		localesByNavigationList: { entity: NavigationLocale; by: {navigationList: NavigationList['unique']}  }
	}
}
export type NavigationItem <OverRelation extends string | never = never> = {
	name: 'NavigationItem'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number | null
	}
	hasOne: {
		list: NavigationList
		link: Link
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type NavigationList <OverRelation extends string | never = never> = {
	name: 'NavigationList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ items: NavigationItem['unique']}, OverRelation>
		| Omit<{ navigation: NavigationLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		navigation: NavigationLocale
	}
	hasMany: {
		items: NavigationItem<'list'>
	}
	hasManyBy: {
	}
}
export type NavigationLocale <OverRelation extends string | never = never> = {
	name: 'NavigationLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Navigation['unique'], locale: Locale['unique']}, OverRelation>
		| Omit<{ navigationList: NavigationList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		root: Navigation
		locale: Locale
		navigationList: NavigationList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Page <OverRelation extends string | never = never> = {
	name: 'Page'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ locales: PageLocale['unique']}, OverRelation>
		| Omit<{ seo: Seo['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		publishedAt: string | null
		archivedAt: string | null
		pageType: PageType | null
	}
	hasOne: {
		seo: Seo
	}
	hasMany: {
		locales: PageLocale<'root'>
	}
	hasManyBy: {
		localesByLocale: { entity: PageLocale; by: {locale: Locale['unique']}  }
		localesByUrl: { entity: PageLocale; by: {url: Url['unique']}  }
		localesByBlocks: { entity: PageLocale; by: {blocks: BlockList['unique']}  }
	}
}
export type PageLocale <OverRelation extends string | never = never> = {
	name: 'PageLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Page['unique'], locale: Locale['unique']}, OverRelation>
		| Omit<{ url: Url['unique']}, OverRelation>
		| Omit<{ blocks: BlockList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		title: string
		subtitle: string | null
	}
	hasOne: {
		root: Page
		locale: Locale
		url: Url
		blocks: BlockList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Product <OverRelation extends string | never = never> = {
	name: 'Product'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ image: Image['unique']}, OverRelation>
		| Omit<{ imageList: ImageList['unique']}, OverRelation>
		| Omit<{ icon: Image['unique']}, OverRelation>
		| Omit<{ mediaList: ImageList['unique']}, OverRelation>
		| Omit<{ locales: ProductLocale['unique']}, OverRelation>
		| Omit<{ seo: Seo['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		blockProducts: BlockProductList
		image: Image
		imageList: ImageList
		icon: Image
		mediaList: ImageList
		seo: Seo
	}
	hasMany: {
		locales: ProductLocale<'root'>
	}
	hasManyBy: {
		localesByLocale: { entity: ProductLocale; by: {locale: Locale['unique']}  }
		localesByUrl: { entity: ProductLocale; by: {url: Url['unique']}  }
		localesByBlocks: { entity: ProductLocale; by: {blocks: ProductBlockList['unique']}  }
	}
}
export type ProductBlock <OverRelation extends string | never = never> = {
	name: 'ProductBlock'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ image: Image['unique']}, OverRelation>
		| Omit<{ supportedProducts: BlockProductList['unique']}, OverRelation>
		| Omit<{ textList: TextList['unique']}, OverRelation>
		| Omit<{ cardList: CardList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number
		type: BlockType | null
		align: AlignContent | null
		blockVariation: BlockVariantion | null
		colorVariantion: ColorVariantion | null
		directionVariantion: DirectionVariantion | null
		title: string | null
		subtitle: string | null
		text: string | null
	}
	hasOne: {
		list: ProductBlockList
		image: Image
		imageList: ImageList
		supportedProducts: BlockProductList
		textList: TextList
		cardList: CardList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type ProductBlockList <OverRelation extends string | never = never> = {
	name: 'ProductBlockList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ items: ProductBlock['unique']}, OverRelation>
		| Omit<{ productBlocks: ProductLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		productBlocks: ProductLocale
	}
	hasMany: {
		items: ProductBlock<'list'>
	}
	hasManyBy: {
		itemsByImage: { entity: ProductBlock; by: {image: Image['unique']}  }
		itemsBySupportedProducts: { entity: ProductBlock; by: {supportedProducts: BlockProductList['unique']}  }
		itemsByTextList: { entity: ProductBlock; by: {textList: TextList['unique']}  }
		itemsByCardList: { entity: ProductBlock; by: {cardList: CardList['unique']}  }
	}
}
export type ProductLocale <OverRelation extends string | never = never> = {
	name: 'ProductLocale'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ root: Product['unique'], locale: Locale['unique']}, OverRelation>
		| Omit<{ url: Url['unique']}, OverRelation>
		| Omit<{ blocks: ProductBlockList['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		externalLink: string | null
		title: string
		description: string | null
		shortLabel: string | null
		infoLabel: string | null
	}
	hasOne: {
		url: Url
		root: Product
		locale: Locale
		blocks: ProductBlockList
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Seo <OverRelation extends string | never = never> = {
	name: 'Seo'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ pageSeo: Page['unique']}, OverRelation>
		| Omit<{ product: Product['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		title: string | null
		description: string | null
		keywords: string | null
	}
	hasOne: {
		image: Image
		pageSeo: Page
		product: Product
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type TextList <OverRelation extends string | never = never> = {
	name: 'TextList'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ card: Card['unique']}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
		| Omit<{ productBlock: ProductBlock['unique']}, OverRelation>
		| Omit<{ contentReferenceTextList: ContentReference['unique']}, OverRelation>
		| Omit<{ items: TextListItem['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		orderBy: number | null
		type: TextListType | null
	}
	hasOne: {
		block: Block
		productBlock: ProductBlock
	}
	hasMany: {
		card: Card<'textList'>
		contentReferenceTextList: ContentReference<'textList'>
		items: TextListItem<'list'>
	}
	hasManyBy: {
		cardByPoints: { entity: Card; by: {points: CardPoint['unique']}  }
		contentReferenceTextListByImageList: { entity: ContentReference; by: {imageList: ImageList['unique']}  }
	}
}
export type TextListItem <OverRelation extends string | never = never> = {
	name: 'TextListItem'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		order: number | null
		text: string | null
		orderBy: number | null
	}
	hasOne: {
		list: TextList
		image: Image
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Url <OverRelation extends string | never = never> = {
	name: 'Url'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ url: string}, OverRelation>
		| Omit<{ target: Link['unique']}, OverRelation>
		| Omit<{ links: Link['unique']}, OverRelation>
		| Omit<{ pageUrl: PageLocale['unique']}, OverRelation>
		| Omit<{ product: ProductLocale['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		url: string | null
	}
	hasOne: {
		target: Link
		pageUrl: PageLocale
		product: ProductLocale
	}
	hasMany: {
		links: Link<'internalTarget'>
	}
	hasManyBy: {
		linksByLink: { entity: Link; by: {link: Url['unique']}  }
		linksByBlockLink: { entity: Link; by: {blockLink: Block['unique']}  }
		linksByNavigationItemLink: { entity: Link; by: {navigationItemLink: NavigationItem['unique']}  }
		linksByContentReferenceLink: { entity: Link; by: {contentReferenceLink: ContentReference['unique']}  }
	}
}
export type Video <OverRelation extends string | never = never> = {
	name: 'Video'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ block: Block['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		url: string | null
		width: number | null
		height: number | null
		fileName: string | null
		lastModified: string | null
		fileSize: number | null
		fileType: string | null
	}
	hasOne: {
	}
	hasMany: {
		block: Block<'video'>
	}
	hasManyBy: {
		blockByContent: { entity: Block; by: {content: Content['unique']}  }
		blockByCardList: { entity: Block; by: {cardList: CardList['unique']}  }
		blockByHeroContent: { entity: Block; by: {heroContent: BlockHeroContent['unique']}  }
		blockByTextList: { entity: Block; by: {textList: TextList['unique']}  }
		blockByProductList: { entity: Block; by: {productList: BlockProductList['unique']}  }
	}
}

export type ContemberClientEntities = {
	Block: Block
	BlockHeroContent: BlockHeroContent
	BlockHeroContentItem: BlockHeroContentItem
	BlockList: BlockList
	BlockProductList: BlockProductList
	Card: Card
	CardList: CardList
	CardPoint: CardPoint
	Contact: Contact
	ContactItem: ContactItem
	ContactItemList: ContactItemList
	ContactLocale: ContactLocale
	Content: Content
	ContentReference: ContentReference
	Customer: Customer
	Footer: Footer
	FooterItem: FooterItem
	FooterItemList: FooterItemList
	FooterLocale: FooterLocale
	Image: Image
	ImageItem: ImageItem
	ImageList: ImageList
	ImageLocale: ImageLocale
	Link: Link
	Locale: Locale
	Navigation: Navigation
	NavigationItem: NavigationItem
	NavigationList: NavigationList
	NavigationLocale: NavigationLocale
	Page: Page
	PageLocale: PageLocale
	Product: Product
	ProductBlock: ProductBlock
	ProductBlockList: ProductBlockList
	ProductLocale: ProductLocale
	Seo: Seo
	TextList: TextList
	TextListItem: TextListItem
	Url: Url
	Video: Video
}

export type ContemberClientSchema = {
	entities: ContemberClientEntities
}
