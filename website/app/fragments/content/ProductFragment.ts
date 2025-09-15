import { type FragmentType, queryBuilder } from "../../../../client/src"
import { ImageFragment } from "../atoms/ImageFragment"
import { UrlFragment } from "../atoms/UrlFragment"
import { byLocale } from "../utils/filters"

// ───────────────────────────────────────────────────────────
// 1) Product bloky definujeme zde (místo importu z BlockFragment)
//    => rozbijeme kruhovou závislost BlockFragment ↔ ProductFragment
// ───────────────────────────────────────────────────────────
export const ProductBlockFragment = queryBuilder.fragment("ProductBlock", (it) =>
	it
		.$$()
		.$("type")
		.$("title")
		.$("subtitle")
		.$("text")
		.$("blockVariation")
		.$("align")
		.$("colorVariantion")
		.$("directionVariantion")
		.$("image", ImageFragment)
		.$(
			"imageList",
			(it) =>
				it
					.$$()
					.$(
						"items",
						{ orderBy: [{ order: "asc" }] },
						(it) => it.$$().$("image", ImageFragment),
					),
		)
		// pokud používáš v ProductBlocku i cardList/textList, nechám zde bezpečné "light" pole
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
				(it) => it.$$().$('points', { orderBy: [{ order: 'asc' }] }, (it) => it.$$()).$('image', ImageFragment),
			),
		) 
		.$(
			"textList",
			(it) =>
				it
					.$$()
					.$("items", { orderBy: [{ order: "asc" }] }, (it) =>
						it.$$().$("text"),
					),
		),
)

export type ProductBlockFragmentType = FragmentType<typeof ProductBlockFragment>

export const ProductBlockListFragment = queryBuilder.fragment(
	"ProductBlockList",
	(it) =>
		it
			.$$()
			.$(
				"items",
				{ orderBy: [{ order: "asc" }] },
				ProductBlockFragment,
			),
)

export type ProductBlockListFragmentType = FragmentType<
	typeof ProductBlockListFragment
>

// ───────────────────────────────────────────────────────────
// 2) Product fragment s lokalizací a blocks přes ProductBlockListFragment
//    (stejná logika jako u Page -> BlockListFragment)
// ───────────────────────────────────────────────────────────
export const ProductFragment = (locale: string) =>
	queryBuilder.fragment("Product", (it) =>
		it
			.$$()
			.$("image", ImageFragment)
			.$(
				"imageList",
				(it) =>
					it
						.$$()
						.$(
							"items",
							{ orderBy: [{ order: "asc" }] },
							(it) => it.$$().$("image", ImageFragment),
						),
			)
			.$("localesByLocale", byLocale(locale), (it) =>
				it
					.$$()
					.$("title")
					.$("shortLabel")
					.$("infoLabel")
					.$("description")
					.$("url", UrlFragment)
					// ← tady to kouzlo: stejně jako u Page blocků
					.$("blocks", ProductBlockListFragment),
			),
	)

export type ProductFragmentType = FragmentType<ReturnType<typeof ProductFragment>>
