import { ProductBlockListFragmentType } from '@/app/fragments/content/ProductFragment'
import React from 'react'
import { renderRichText } from '../../atoms/RichTextRender'
import Image from 'next/image'
import { colorClass } from '../../atoms/colorClass'
import { alignmentClass } from '../../atoms/alignClass'

type TextProductBlockType = ProductBlockListFragmentType["items"][number]

type Props = {
    data: TextProductBlockType
}

const ProductBlockText = ({data}: Props) => {
    if (!data) return null;

  return (
    <section 
      className={`${colorClass({color: data.colorVariantion, type: "section"})} 
      w-full py-12 px-4 md:px-8`}
    > 
        <div 
          className={`${alignmentClass(data.align || "left")} 
          ${data.blockVariation !== "one" ? "flex flex-col items-center text-center" : "flex flex-col md:flex-row md:items-center md:justify-between gap-8"} 
          max-w-6xl mx-auto`}
        >
            <div className="flex-1 space-y-4">
              {data.subtitle && <h3 className={`${colorClass({color: data.colorVariantion, type: "subtitle"})}`}>{data.subtitle}</h3>}
              {data.title && <h2 className={`${colorClass({color: data.colorVariantion, type: "title"})}`}>{data.title}</h2>}
              {data.text && <div className={`${colorClass({color: data.colorVariantion, type: "text"})}`}>{renderRichText(data.text)}</div>}
            </div>
            
            {data.blockVariation === "one" && 
              <div className="flex-shrink-0">
                  <Image 
                    src={data.image?.url || ""} 
                    alt='něco' 
                    width={320} 
                    height={320} 
                    className="w-40 h-40 md:w-80 md:h-80 object-contain"
                  />
              </div>
            }
        </div>
    </section>
  )
}

export default ProductBlockText
