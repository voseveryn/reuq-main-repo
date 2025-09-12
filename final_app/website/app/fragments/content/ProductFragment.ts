import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from '../atoms/ImageFragment'
import { UrlFragment } from "../atoms/UrlFragment";
import { byLocale } from "../utils/filters";
import {  BlockListFragment } from "./BlockFragment";


export const ProductFragment = (locale: string) => queryBuilder.fragment('Product', (it) =>
    it
        .$$()
        .$('image', ImageFragment)
        .$('imageList', (it) => it.$$().$('items', {orderBy: [{order: 'asc'}]}, (it) => it.$$().$("image", ImageFragment)))
        .$('localesByLocale', byLocale(locale), (it) =>
            it
            .$('title')
            .$('shortLabel')
            .$('infoLabel')
            .$('description')
            .$('url', UrlFragment)
        )
)

export type ProductFragmentType = FragmentType<ReturnType<typeof ProductFragment>>;