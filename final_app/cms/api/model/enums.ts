import { c } from '@contember/schema-definition'

export const pageType = c.createEnum('homePage', 'genericPage', 'blogPage')
export const cardType = c.createEnum('timeline', 'quote', 'desc')
export const one = c.createEnum('One')
export const textListType = c.createEnum('timeline', 'point')
export const contentReferenceTypeEnum = c.createEnum('image', 'imageList', 'quote', 'text', 'link')
export const linkType = c.createEnum('internal', 'external')
export const blockType = c.createEnum('text', 'card', 'cardWithIconUp', 'cardWithIconDown', 'imageList', 'image', 'service', 'heroContent', 'list', 'textWithIllustration', 'quote', 'person', 'contact', 'timeline' )
export const unique = c.createEnum('unique')