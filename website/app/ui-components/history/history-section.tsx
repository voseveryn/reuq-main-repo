import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";

type HistoryBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HistoryBlockType;
};

const HistorySection = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {data.title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-10 sm:mb-14">
          {data.title}
        </h2>
      )}

      {/* Vertical timeline line */}
      <div className="absolute left-4 top-0 h-full w-px bg-gray-200 md:hidden" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block" />

      <div className="space-y-10 sm:space-y-12">
        {data.textList?.items.map((list, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={list.id} className="relative">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2">
                <span className="block h-3 w-3 rounded-full bg-gray-900 ring-4 ring-white shadow" />
              </div>

              {/* Row */}
              <div className="md:grid md:grid-cols-2 md:gap-10">
                {/* Left side (desktop) */}
                <div
                  className={[
                    "hidden md:block",
                    isLeft ? "md:col-start-1 pr-6" : "md:col-start-1",
                  ].join(" ")}
                >
                  {isLeft && (
                    <div className="flex justify-end">
                      <div className="max-w-md rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow">
                        {renderRichText(list.text || "")}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile single column content */}
                <div className="md:hidden pl-10">
                  <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow">
                    {renderRichText(list.text || "")}
                  </div>
                </div>

                {/* Right side (desktop) */}
                <div
                  className={[
                    "hidden md:block",
                    isLeft ? "md:col-start-2 pl-6" : "md:col-start-2 pl-6",
                  ].join(" ")}
                >
                  {!isLeft && (
                    <div className="flex justify-start">
                      <div className="max-w-md rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-5 shadow">
                        {renderRichText(list.text || "")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HistorySection;
