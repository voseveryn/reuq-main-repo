export type BlockType = 
	 | "text"
	 | "hero"
	 | "card"
	 | "information"
	 | "partners"
	 | "team"
	 | "solution"
	 | "newsletter"
	 | "contact"
	 | "history"
export type CardType = 
	 | "timeline"
	 | "quote"
	 | "desc"
export type ContentReferenceTypeEnum = 
	 | "image"
	 | "imageList"
	 | "quote"
	 | "text"
	 | "link"
export type LinkType = 
	 | "internal"
	 | "external"
export type One = 
	 | "One"
export type PageType = 
	 | "homePage"
	 | "solutionPage"
	 | "genericPage"
export type TextListType = 
	 | "timeline"
	 | "point"
export type Unique = 
	 | "unique"
export type ContemberClientEnums = {
	blockType: BlockType
	cardType: CardType
	contentReferenceTypeEnum: ContentReferenceTypeEnum
	linkType: LinkType
	one: One
	pageType: PageType
	textListType: TextListType
	unique: Unique
}

