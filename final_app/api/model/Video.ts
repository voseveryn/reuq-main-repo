import { c } from '@contember/schema-definition'
import { Block } from './Block'


export class Video {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn()
	block = c.oneHasMany(Block, 'video')
    width = c.intColumn()
	height = c.intColumn()
	fileName = c.stringColumn()
	lastModified = c.dateTimeColumn()
	fileSize = c.intColumn()
	fileType = c.stringColumn()
}