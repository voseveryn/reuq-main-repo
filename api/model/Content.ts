import { c } from '@contember/schema-definition'
import { publicRole } from './acl'
import { contentReferenceTypeEnum } from './enums'
import { Block } from './Block';
import { Image, ImageList } from './Image';
import { Link } from './Link';
import { FooterItem, FooterLocale } from './Footer';
import { TextList } from './TextList';
import { ContactLocale } from './Contact';



@c.Allow(publicRole, {
	read: ['data', 'references'],
})
export class Content {
	data = c.jsonColumn()
	references = c.oneHasMany(ContentReference, 'content')
	blockContent = c.oneHasOneInverse(Block, 'content')
	footerContent = c.oneHasOneInverse(FooterItem, 'content')
	footerLinks = c.oneHasOneInverse(FooterLocale, 'links')
	
}

@c.Allow(publicRole, {
	read: true,
})
export class ContentReference {
	createdAt = c.dateTimeColumn().notNull().default('now')
	type = c.enumColumn(contentReferenceTypeEnum)
	content = c.manyHasOne(Content, 'references')
	imageList = c.oneHasOne(ImageList, 'contentReference')
	text = c.stringColumn()
	image = c.manyHasOne(Image, 'contentReferenceImage')
	link = c.manyHasOne(Link, 'contentReferenceLink')
	textList = c.manyHasOne(TextList, 'contentReferenceTextList')
} 