import React from 'react'
// ...existing code...
import Image from "next/image";
import Link from "next/link";
import { ProductFragmentType } from '@/app/fragments/content/ProductFragment';

type ProductType = ProductFragmentType

type Props = {
  data: ProductType // zde si můžete typ upravit podle svého fragmentu
}

const ProductDetail = ({ data }: Props) => {
  if (!data) return null;
  debugger

  const locale = data.localesByLocale;

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{locale?.title}</h1>

      {data.image?.url && (
        <div className="mb-6">
          <Image
            src={data.image.url}
            alt={locale?.title || ''}
            width={1200}
            height={900}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}

      {locale?.infoLabel && (
        <div className="mb-2 text-sm text-gray-600">{locale.infoLabel}</div>
      )}

      {locale?.shortLabel && (
        <div className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
          {locale.shortLabel}
        </div>
      )}

      {locale?.description && (
        <div className="prose max-w-none text-gray-700 my-6">
          {/* pokud je rich text, nahraďte renderováním rich textu */}
          <p>{locale.description}</p>
        </div>
      )}

      {/* případné další pole */}
      <div className="mt-6">
        <Link href={locale?.url?.url || '/'}>
          Zpět
        </Link>
      </div>
    </section>
  )
}

export default ProductDetail