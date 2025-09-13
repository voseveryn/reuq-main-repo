import { c } from '@contember/schema-definition'
import { Card } from './Card'
import { Block } from './Block'
import { ContentReference } from './Content'
import { Image } from './Image'
import { textListType } from './enums'
import { ProductBlock } from './Product'


export class TextList {
    createdAt = c.dateTimeColumn().notNull().default('now')
    orderBy = c.intColumn()
    card = c.oneHasMany(Card, 'textList')
    type = c.enumColumn(textListType)
    block = c.oneHasOneInverse(Block, 'textList')
    productBlock = c.oneHasOneInverse(ProductBlock, 'textList')
    contentReferenceTextList = c.oneHasMany(ContentReference, 'textList')
    items = c.oneHasMany(TextListItem, 'list')
}
export class TextListItem {
    createdAt = c.dateTimeColumn().notNull().default('now')
    list = c.manyHasOne(TextList, 'items')
    image = c.manyHasOne(Image, 'textList')
    order = c.intColumn()
    text = c.stringColumn()
    orderBy = c.intColumn()
}