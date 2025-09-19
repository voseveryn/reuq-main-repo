// app/fragments/content/NewsletterMutations.ts (nebo přepiš současný NewsletterFragment.ts)
import { queryBuilder } from "../../../../client/src";

// create
export const createNewsletterMutation = (mail: string) =>
  queryBuilder.create('Newsletter', {
    data: { mail },
  })

