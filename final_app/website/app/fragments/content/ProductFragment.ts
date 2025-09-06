import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from '../atoms/ImageFragment'
import { byLocale } from "../utils/filters";
import { BlockFragment, BlockListFragment } from "./BlockFragment";


export const ProductFragment = (locale: string) => queryBuilder.fragment('Product', (it) =>
    it
        .$$()
        .$('image', ImageFragment)
        .$('localesByLocale', byLocale(locale), (it) =>
            it
            .$('title')
            .$('shortLabel')
            .$('infoLabel')
            .$('description')
            .$('blocks', BlockListFragment)
        )
)
