import { type FragmentType, queryBuilder } from "../../../../client/src"
import { ImageFragment } from "../atoms/ImageFragment"
import { byLocale } from "../utils/filters"

export const ContactFragment = (locale: string) =>
	queryBuilder.fragment('Contact', it =>
		it
			.$$()
			.$('mapImage', ImageFragment)
			.$('localesByLocale', byLocale(locale), it =>
				it
					.$('title')
					.$('subtitle')
					.$('itemList', it =>
						it.$(
							'items',
							{ orderBy: [{ order: 'asc' }] },
							it => it.$$().$('order').$('text'),
						),
					),
			),
	)

export type ContactFragmentType = FragmentType<ReturnType<typeof ContactFragment>>
