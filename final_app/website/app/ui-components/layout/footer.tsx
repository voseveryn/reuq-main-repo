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
    <footer>
        {data.logo && <Image src={data.logo.url || ""} alt='s' fill />}
        {locale?.title && (<h3>{locale?.title}</h3>)}
        {locale?.copyRight && (<h3>{locale?.copyRight}</h3>)}
        <ul>
          {locale?.itemList?.items.map((x) => (
          <li id={x.id}>{renderRichText(x.text || "")}</li>
        ))}
        </ul>
    </footer>
  )
}

export default Footer