import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from 'react'
import { colorClass } from "../atoms/colorClass";
import { alignmentClass } from "../atoms/alignClass";
import Image from "next/image";
import { renderRichText } from "../atoms/RichTextRender";


type TextBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: TextBlockType;
};


const TextThree = ({data}: Props) => {
  return (
    <section className={`${colorClass(data.colorVariantion || "classic")} flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12`}>
        <div className={`${alignmentClass(data.align || "center")} flex flex-col gap-4 max-w-xl`}>
            {data.title && <h2 className="text-2xl md:text-3xl font-bold">{data.title}</h2>}
            {data.subtitle && <h3 className="text-lg md:text-xl font-medium">{data.subtitle}</h3>}
            {data.text && <div className="prose md:prose-lg">{renderRichText(data.text)}</div>}
        </div>
        <div className="relative w-full max-w-xl h-64 md:h-96">
           {data.image?.url && (
             <Image
               src={data.image.url}
               alt="logo"
               fill
               className="object-contain"
               priority
             />
           )}
        </div>
    </section>
  )
}

export default TextThree