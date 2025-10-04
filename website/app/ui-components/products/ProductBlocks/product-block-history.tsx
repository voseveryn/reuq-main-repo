import React from "react";
import { ProductBlockListFragmentType } from "@/app/fragments/content/ProductFragment";
import { renderRichText } from "../../atoms/RichTextRender";
import { colorClass } from "../../atoms/colorClass";
import { alignmentClass } from "../../atoms/alignClass";

type HistoryProductBlockType = ProductBlockListFragmentType["items"][number];

type Props = {
  data: HistoryProductBlockType;
};

const ProductBlockHistory = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section
      className={`${colorClass({color: data.colorVariantion, type: "section"})} w-full py-12 px-4 md:px-8`}
    >
      {data.blockVariation === "one" &&
     
        <h2
          className={`${colorClass({color: data.colorVariantion, type: "title"})} max-w-6xl mx-auto mb-8`}
        >
          {data.title}
        </h2>
      }
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black/10 dark:bg-white/10 pointer-events-none"></div>

        <ul className="relative flex flex-row gap-6 md:gap-10 overflow-x-auto py-6">
          {data.textList?.items?.map((item, i) => (
            <li
              key={i}
              className="relative min-w-[220px] md:min-w-[260px] flex-1 flex flex-col items-center"
            >
              <span className="z-10 w-3 h-3 rounded-full bg-black/70 dark:bg-white/70 ring-4 ring-white/60 dark:ring-black/40"></span>

              <div className={`${i % 2 ? "mt-6" : "mb-6"} w-full`}>
                <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur p-4 md:p-6 shadow-sm">
                  {renderRichText(item.text || "")}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductBlockHistory;
