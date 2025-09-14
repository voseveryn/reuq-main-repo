import { type FragmentType, queryBuilder } from '../../../../client/src'

export const ImageFragment = queryBuilder.fragment('Image', (image) => image.$$())

export type ImageFragmentType = FragmentType<typeof ImageFragment>