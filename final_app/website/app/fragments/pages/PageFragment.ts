import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "../atoms/ImageFragment";
import { SeoFragment } from "../atoms/SeoFragment";
import { UrlFragment } from "../atoms/UrlFragment";
import { BlockListFragment } from "../content/BlockFragment";
import { byLocale } from "../utils/filters";


export const PageFragment = (locale: string) =>
	queryBuilder.fragment('Page', (it) =>
		it
			.$$()
			.$('pageType')
			.$('seo', SeoFragment)
			.$('localesByLocale', byLocale(locale), (it) => 
				it
					.$$()
					.$('url', UrlFragment)
					.$('blocks', BlockListFragment)
					.$('title')
			),
	)

export type PageFragmentType = FragmentType<ReturnType<typeof PageFragment>>