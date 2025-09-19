import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'
import { renderRichText } from '../atoms/RichTextRender';
import { alignmentClass } from '../atoms/alignClass';
import { colorClass } from '../atoms/colorClass';

type InformationBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: InformationBlockType;
};

const InformationTwo = ({ data }: Props) => {
    if (!data) return null;

  return (
    <section className={`${alignmentClass(data.align || "center")}${colorClass(data.colorVariantion || "classic")}w-full h-auto bg-black text-white flex flex-col md:flex-row items-center justify-center p-6 text-center md:text-left rounded-lg mx-4 md:mx-12 my-6 shadow-lg`}>
        {data.title && (
          <h2 className="text-2xl font-bold mb-4 md:mb-0 md:mr-6">
            {data.title}
          </h2>
        )}
        {data.text && (
          <p className="text-base md:text-lg">
            {renderRichText(data.text)}
          </p>
        )}
    </section>
  )
}

export default InformationTwo
