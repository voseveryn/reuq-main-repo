import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'
import { renderRichText } from '../atoms/RichTextRender';
import { alignmentClass } from '../atoms/alignClass';
import { colorClass } from '../atoms/colorClass';

type InformationBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: InformationBlockType;
};

const InformationOne = ({ data }: Props) => {
    if (!data) return null;

  return (
    <section className={`${alignmentClass(data.align || "center")}${colorClass(data.colorVariantion || "classic")} w-full h-auto bg-black text-white flex flex-col md:flex-row items-center justify-center p-6 text-center md:text-left`}>
        {data.title && (
          <h2 className="text-2xl font-bold mb-4 md:mb-0 md:mr-6">
            {data.title}
          </h2>
        )}
        {/* Přidání svislé čáry mezi h2 a p */}
        {data.title && data.text && (
          <div className="border-l-2 border-white h-16 md:h-auto mx-6"></div>
        )}
        {data.text && (
          <p className="text-base md:text-lg">
            {renderRichText(data.text)}
          </p>
        )}
    </section>
  )
}

export default InformationOne