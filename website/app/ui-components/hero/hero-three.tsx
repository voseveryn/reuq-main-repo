import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";
import { alignmentClass } from "../atoms/alignClass";

type HeroBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HeroBlockType;
};

const HeroThree = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="relative w-full px-6 md:px-12 my-8">
      <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
        {/* Background Image */}
        {data.image?.url && (
          <Image
            src={data.image.url}
            alt="logo"
            fill
            className="object-cover z-0 rounded-2xl"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl pointer-events-none" />

        {/* Content */}
        <div
          className={`relative z-20 text-white px-6 md:px-12 max-w-3xl mx-auto ${alignmentClass(
            data.align || "center"
          )}`}
        >
          <h3 className="text-lg font-medium mb-2">{data.subtitle}</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
          <div className="hidden md:block text-base">
            {renderRichText(data.text || "")}
          </div>
          <button className="hidden md:inline-block bg-white px-4 py-2 text-black mt-6 rounded-md cursor-pointer">
            Click
          </button>
        </div>

        {/* Mobile Button */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20 md:hidden">
          <button className="bg-white px-4 py-2 text-black rounded-md cursor-pointer">
            Click
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroThree;
