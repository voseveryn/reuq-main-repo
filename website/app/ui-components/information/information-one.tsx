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
    <section className={`${alignmentClass(data.align || "center")}${colorClass({color: data.colorVariantion, type: "section" })} w-full h-auto bg-black text-white flex flex-col md:flex-row items-center justify-center p-6 text-center md:text-left`}>
        {data.title && (
          <h2 className="mb-4 md:mb-0 md:mr-6">
            {data.title}
          </h2>
        )}

       
        {data.text && (
          <div>
            {renderRichText(data.text)}
          </div>
        )}
    </section>
  )
}

export default InformationOne