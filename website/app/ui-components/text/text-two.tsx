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
    <section className={`${colorClass({ color: data.colorVariantion || "classic", type: "section" })} flex flex-col items-center justify-center gap-6 px-4 py-12`}>
            <div className={`${alignmentClass(data.align || "center")} flex flex-col gap-4 max-w-3xl`}>
                {data.subtitle && <h3 className={`${colorClass({ color: data.colorVariantion || "classic", type: "subtitle" })}`}>{data.subtitle}</h3>}
                {data.title && <h2 className={`${colorClass({ color: data.colorVariantion || "classic", type: "title" })}`}>{data.title}</h2>}
                {data.text && <div className={`${colorClass({ color: data.colorVariantion || "classic", type: "text" })}`}>{renderRichText(data.text)}</div>}
            </div>
            
        </section>
  )
}

export default TextTwo