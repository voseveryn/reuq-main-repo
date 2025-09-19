import { type FragmentType, queryBuilder } from "../../../../client/src"
import { ImageFragment } from "../atoms/ImageFragment"
import { UrlFragment } from "../atoms/UrlFragment"
import { byLocale } from "../utils/filters"

/** ───────────────────────────────────────────────────────────
 *  Pomocný subset produktu pro supportedProducts
 *  ─────────────────────────────────────────────────────────── */
const SupportedProductSubset = (locale: string) =>
	queryBuilder.fragment("Product", p =>
		p
			.$$()
			.$("id")
			.$("image", ImageFragment)
			.$("localesByLocale", byLocale(locale), loc =>
				loc.$$().$("title").$("shortLabel").$("url", UrlFragment),
			),
	)

/** ───────────────────────────────────────────────────────────
 *  BlockProductList – používá se u ProductBlock.supportedProducts
 *  ─────────────────────────────────────────────────────────── */
const BlockProductListFragment = (locale: string) =>
	queryBuilder.fragment("BlockProductList", it =>
		it
			.$$()
			.$("subtitle")
			.$("order")
			// POZOR: podle schématu je to 'product' (hasMany na Product)
			.$("product",  SupportedProductSubset(locale)),
	)

/** ───────────────────────────────────────────────────────────
 *  ProductBlock – vlastní bloky produktu
 *  ─────────────────────────────────────────────────────────── */
export const ProductBlockFragment = (locale: string) =>
	queryBuilder.fragment("ProductBlock", it =>
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
			// ImageList NENÍ 'images', ale 'items'
			.$('imageList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$("image", ImageFragment)))
			.$("textList", list => list.$$().$("items", item => item.$$().$("text")))
			.$("cardList", list =>
				list
					.$$()
					.$("items", card =>
						card.$$().$("title").$("text").$("image", ImageFragment),
					),
			)
			// TADY je oprava: oneHasOne(BlockProductList) → uvnitř hasMany 'product'
			.$("supportedProducts", BlockProductListFragment(locale)),
	)

/** ───────────────────────────────────────────────────────────
 *  Seznam bloků produktu
 *  ─────────────────────────────────────────────────────────── */
export const ProductBlockListFragment = (locale: string) =>
	queryBuilder.fragment("ProductBlockList", it =>
		it.$$().$("items", ProductBlockFragment(locale)),
	)
export type ProductBlockListFragmentType = FragmentType<ReturnType<typeof ProductBlockListFragment>>


/** ───────────────────────────────────────────────────────────
 *  Hlavní Product fragment
 *  ─────────────────────────────────────────────────────────── */
export const ProductFragment = (locale: string) =>
	queryBuilder.fragment("Product", it =>
		it
			.$$()
			.$("id")
			.$("createdAt")
			.$("image", ImageFragment)
			.$('imageList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$("image", ImageFragment)))
			.$("localesByLocale", byLocale(locale), loc =>
				loc
					.$$()
					.$("title")
					.$("shortLabel")
					.$("infoLabel")
					.$("description")
					.$("url", UrlFragment)
					.$("blocks", ProductBlockListFragment(locale)),
			),
	)

export type ProductFragmentType = FragmentType<ReturnType<typeof ProductFragment>>
