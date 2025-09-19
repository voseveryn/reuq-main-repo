import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from 'react'
import { colorClass } from "../atoms/colorClass";
import { alignmentClass } from "../atoms/alignClass";
import { renderRichText } from "../atoms/RichTextRender";


type TextBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: TextBlockType;
};


const TextTwo = ({data}: Props) => {
  return (
    <section className={`${colorClass(data.colorVariantion || "classic")} flex flex-col items-center justify-center gap-6 px-4 py-12`}>
            <div className={`${alignmentClass(data.align || "center")} flex flex-col gap-4 max-w-3xl`}>
                {data.title && <h2 className="text-2xl md:text-3xl font-bold">{data.title}</h2>}
                {data.subtitle && <h3 className="text-lg md:text-xl font-medium">{data.subtitle}</h3>}
                {data.text && <div className="prose md:prose-lg">{renderRichText(data.text)}</div>}
            </div>
            
        </section>
  )
}

export default TextTwo