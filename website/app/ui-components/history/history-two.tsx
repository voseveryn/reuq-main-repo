import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";

type HistoryBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HistoryBlockType;
};

const HistoryTwo = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {data.title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-10 sm:mb-14">
          {data.title}
        </h2>
      )}

      {/* Horizontal timeline line */}
      <div className="absolute top-16 left-0 w-full h-px bg-gray-200" />

      <div className="flex flex-col md:flex-row md:space-x-12 items-start md:items-stretch">
        {data.textList?.items.map((list, index) => {
          return (
            <div key={list.id} className="relative flex-1 flex flex-col items-center">
              {/* Dot */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2">
                <span className="block h-3 w-3 rounded-full bg-gray-900 ring-4 ring-white shadow" />
              </div>

              {/* Content */}
              <div className="mt-24 md:mt-24 w-full flex justify-center">
                <div className="max-w-sm rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow">
                  {renderRichText(list.text || "")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HistoryTwo;
