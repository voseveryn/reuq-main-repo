import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";
import { alignmentClass } from "../atoms/alignClass";

type HeroBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HeroBlockType;
};

const HeroTwo = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {data.image?.url && (
        <Image
          src={data.image.url}
          alt="logo"
          fill
          className="object-cover z-0"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-20 text-white px-6 md:px-12 max-w-3xl mx-auto ${alignmentClass(
          data.align || "center"
        )}`}
      >
        <h3 className="text-lg font-bold mb-2">{data.subtitle}</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
        <div className="hidden md:block text-base">
          {renderRichText(data.text || "")}
        </div>
        <button className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 border-gray-600 text-white bg-gray-800  hover:border-emerald-400 hover:bg-emerald-400">
          Click
        </button>
      </div>

      {/* Mobile Button */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20 md:hidden">
        <button className="bg-white px-4 py-2 text-black rounded-md cursor-pointer">
          Click
        </button>
      </div>
    </section>
  );
};

export default HeroTwo;
