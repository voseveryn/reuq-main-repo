import { type FragmentType, queryBuilder } from "../../../../client/src"
import { ImageFragment } from "../atoms/ImageFragment"
import { UrlFragment } from "../atoms/UrlFragment"
import { byLocale } from "../utils/filters"
import { BlockListFragment } from "./BlockFragment"

export const AppFragment = (locale: string) => 
    queryBuilder.fragment('App', it =>
        it
            .$$()
            .$('image', ImageFragment)
            .$('localesByLocale', byLocale(locale), it =>
                it
                    .$('name')
                    .$('title')
                    .$('subtitle')
                    .$('description')
                    .$('url', UrlFragment)
                    .$('blocks', BlockListFragment)
            )
    )

export type AppFragmentType = FragmentType<ReturnType<typeof AppFragment>>