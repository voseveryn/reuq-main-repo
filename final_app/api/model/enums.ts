import { c } from '@contember/schema-definition'

export const pageType = c.createEnum('homePage', 'solutionPage', 'genericPage')
export const cardType = c.createEnum('timeline', 'quote', 'desc')
export const one = c.createEnum('One')
export const textListType = c.createEnum('timeline', 'point')
export const contentReferenceTypeEnum = c.createEnum('image', 'imageList', 'quote', 'text', 'link')
export const linkType = c.createEnum('internal', 'external')
export const blockType = c.createEnum('text', 'hero', 'card', 'information', 'partners', 'team', 'solution', 'newsletter', 'contact', 'history', 'products')
export const unique = c.createEnum('unique')