import { queryBuilder } from "../../../../client/src";

export const UrlFragment = queryBuilder.fragment('Url', (url)=> url.$('url'))