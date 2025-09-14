import { FooterFragmentType } from '@/app/fragments/layout/FooterFragment'
import React from 'react'
import { renderRichText } from '../atoms/RichTextRender'
import Image from 'next/image'

type Props = {
    data?: FooterFragmentType
}

const Footer = ({ data }: Props) => {
  if (!data) return null;

  const locale = data.localesByLocale

  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            {data.logo && (
              <div className="relative w-32 h-16 mb-4">
                <Image src={data.logo.url || ""} alt='s' fill className="object-contain" />
              </div>
            )}
            {locale?.title && (
              <h3 className="text-lg font-semibold">{locale?.title}</h3>
            )}
            {locale?.copyRight && (
              <p className="text-sm text-gray-400 mt-2">{locale?.copyRight}</p>
            )}
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
            {locale?.itemList?.items.map((x) => (
              <li id={x.id} key={x.id} className="text-sm hover:text-white transition">
                {renderRichText(x.text || "")}
              </li>
            ))}
          </ul>
        </div>
    </footer>
  )
}

export default Footer
