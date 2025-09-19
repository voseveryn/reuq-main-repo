// app/components/Contact.tsx
import { ContactFragmentType } from '@/app/fragments/content/ContactFragment'
import React from 'react'
import Image from 'next/image'
import { renderRichText } from '../atoms/RichTextRender'
import ContactForm from './contact-form'

type Props = {
  data?: ContactFragmentType
}

const Contact = ({ data }: Props) => {
  if (!data) return null

  const locale = data.localesByLocale

  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: obsah z Contemberu */}
        <div>
          {locale?.title && (
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              {locale.title}
            </h2>
          )}

          {locale?.subtitle && (
            <p className="text-lg text-gray-600 mb-6">{locale.subtitle}</p>
          )}

          {locale?.itemList?.items?.length ? (
            <ul className="space-y-3 mb-8">
              {locale.itemList.items.map((item, i) => (
                <li
                  key={i}
                  className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white"
                >
                  {item.text && renderRichText(item.text)}
                </li>
              ))}
            </ul>
          ) : null}

          {data.mapImage?.url && (
            <div className="w-full h-72 relative rounded-xl overflow-hidden">
              <Image
                src={data.mapImage.url}
                alt="Map"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* RIGHT: formulář s mutací */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Napište nám</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
