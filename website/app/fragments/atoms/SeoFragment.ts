import { type FragmentType, queryBuilder } from "../../../../client/src";
import { ImageFragment } from "./ImageFragment";

export const SeoFragment = queryBuilder.fragment('Seo', (it) => 
    it
        .$$()
        .$('title')
        .$('keywords')
        .$('image', ImageFragment)
)

export type SeoFragmentType = FragmentType<typeof SeoFragment>