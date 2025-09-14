import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "../atoms/ImageFragment";
import { UrlFragment } from "../atoms/UrlFragment";
import { byLocale } from "../utils/filters";

export const FooterFragment = (locale: string) =>
	queryBuilder.fragment('Footer', (it) =>
		it
			.$$()
			.$('logo', (it) => it.$$())
			.$('localesByLocale', byLocale(locale), (it) =>
				it
					.$$()
					.$('itemList', (it) => it.$$().$('items', { orderBy: [{ order: 'asc' }] }, (it) => it.$$()))
			),
	)

export type FooterFragmentType = FragmentType<ReturnType<typeof FooterFragment>>