import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "../atoms/ImageFragment";
import { UrlFragment } from "../atoms/UrlFragment";
import { byLocale } from "../utils/filters";

export const NavigationFragment = (locale: string) =>
    queryBuilder.fragment('Navigation', (it) =>
        it
            .$$()
            .$('logo', ImageFragment)
            .$('localesByLocale', byLocale(locale), (it) =>
                it.$('navigationList', (it) =>
                    it.$(
                        'items',
                        {
                            orderBy: [
                                {
                                    order: 'asc'
                                }
                            ]
                        },
                        (it) => it.$$().$('link', (it) => it.$$().$('internalTarget', UrlFragment).$('title'))
                    )
                   
                )
            )
)

export type NavigationFragmentType = FragmentType<ReturnType<typeof NavigationFragment>>