import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from '../atoms/ImageFragment'

export const ContentFragment = queryBuilder.fragment('Content', (it) =>
	it.$$().$('references', (ref) =>
		ref
			.$$()
			.$('image', ImageFragment)
			.$('imageList', (it) => it.$('items', (it) => it.$$().$('image', ImageFragment))),
	),
)

export const ContentTextFragment = queryBuilder.fragment('Content', (content) => content.$('id').$('data'))

export type ContentFragmentType = FragmentType<typeof ContentFragment>