import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";

type HistoryBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HistoryBlockType;
};

const HistorySection = ({ data }: Props) => {
  if (!data) return null;

  return <section>
    {data.title && (<h2>{data.title}</h2>)}
    {data.textList?.items.map((list)=> (
        <div key={list.id}>{renderRichText(list.text || "")}</div>
    ))}
  </section>;
};

export default HistorySection;
