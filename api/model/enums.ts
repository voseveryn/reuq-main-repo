import { c } from '@contember/schema-definition'

export const pageType = c.createEnum('homePage', 'solutionPage', 'genericPage')
export const cardType = c.createEnum('timeline', 'quote', 'desc')
export const one = c.createEnum('One')
export const textListType = c.createEnum('timeline', 'point')
export const contentReferenceTypeEnum = c.createEnum('image', 'imageList', 'quote', 'text', 'link')
export const linkType = c.createEnum('internal', 'external')
export const blockType = c.createEnum('text', 'hero', 'card', 'information', 'partners', 'team', 'solution', 'newsletter', 'contact', 'history', 'products', 'imageList', 'listWithIcons')
export const alignContent = c.createEnum('left', 'center', 'right')
export const blockVariantion = c.createEnum('one', 'two', 'three', 'four', 'five')
export const colorVariantion = c.createEnum('classic', 'reverse', 'grey')
export const directionVariantion = c.createEnum('horizontal', 'vertical')
export const unique = c.createEnum('unique')