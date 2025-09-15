import { c } from '@contember/schema-definition'
import { Block } from './Block'
import { TextList } from './TextList'
import { Image } from './Image';
import { cardType } from './enums'
import { CardPoint } from './CardPoint';
import { ProductBlock } from './Product';

export class Card {
    createdAt = c.dateTimeColumn().notNull().default('now')
    list = c.manyHasOne(CardList, 'items')
    image = c.manyHasOne(Image, 'card')
    type = c.enumColumn(cardType)
    orderBy = c.intColumn()
    title = c.stringColumn()
    subtitle = c.stringColumn()
    text = c.stringColumn()
    textList = c.manyHasOne(TextList, 'card')
    points = c.oneHasMany(CardPoint, 'card')
}

export class CardList {
    createdAt = c.dateTimeColumn().notNull().default('now')
    items = c.oneHasMany(Card, 'list')
    block = c.oneHasOneInverse(Block, 'cardList')
    productBlock = c.oneHasOneInverse(ProductBlock, 'cardList')
}