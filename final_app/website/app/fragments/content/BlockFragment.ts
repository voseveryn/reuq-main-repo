import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "../atoms/ImageFragment";

export const BlockFragment = queryBuilder.fragment('Block', (block) =>
    block
        .$$()
        .$('type')
        .$('title')
        .$('subtitle')
        .$('text')
        .$('cardList', (it)=>
            it.$$().$(
				'items',
				{
					orderBy: [
						{
							orderBy: 'asc',
						},
					],
				},
				(it) => it.$$().$('points', { orderBy: [{ order: 'asc' }] }, (it) => it.$$()),
			),
		)
        .$('image', ImageFragment)
        .$('textList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$('text')))
)

export const BlockListFragment = queryBuilder.fragment('BlockList', (it) =>
	it.$$().$(
		'items',
		{
			orderBy: [
				{
					order: 'asc',
				},
			],
		},
		BlockFragment,
	),
)

export type BlockListFragmentType = FragmentType<typeof BlockListFragment>