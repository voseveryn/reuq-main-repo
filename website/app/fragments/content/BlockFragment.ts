import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "../atoms/ImageFragment";
import { ProductFragment } from "./ProductFragment";

export const BlockFragment = queryBuilder.fragment('Block', (block) =>
    block
        .$$()
        .$('type')
        .$('title')
        .$('subtitle')
        .$('text')
		.$('blockVariation')
		.$('align')
		.$('colorVariantion')
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
				(it) => it.$$()
				.$('points', { orderBy: [{ order: 'asc' }] }, (it) => it.$$())
				.$('image', ImageFragment)
				.$("title")
				,
			)
			,
		) 
        .$('image', ImageFragment)
		.$('imageList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$("image", ImageFragment)))
        .$('textList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$('text')))
		.$('productList', (it) =>it.$$().$('subtitle').$('order').$('product', ProductFragment('cs'))
)
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