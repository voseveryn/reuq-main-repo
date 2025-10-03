import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";

// Change Props to accept a single block
type HeroBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HeroBlockType;
};

const HeroOne = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-[500px] rounded-2xl overflow-hidden mx-6 my-4 gap-6"
    >
      {/* Left side (Text) */}
      <div className={`relative z-20 w-full flex flex-col justify-center items-center md:items-start ${data.align || "center"}  px-6 order-1`}>
        <h3 className="text-lg text-emerald-700 font-bold mb-2">{data.subtitle}</h3>
        <h2 className="text-4xl text-second font-bold mb-4">{data.title}</h2>
        <div className="hidden md:block text-base">{renderRichText(data.text || "")}</div>
        <button className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 border-gray-600 text-white bg-gray-800  hover:border-emerald-400 hover:bg-emerald-400">
          Více
        </button>
      </div>

      {/* Right side (Image) */}
      <div className="relative w-full h-[300px] md:h-full order-2 md:order-2">
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
      </div>

      {/* Mobile Button under image */}
      <div className="w-full flex justify-center order-3 md:hidden">
        <button className="bg-white px-4 py-2 text-black rounded-md cursor-pointer">
          Click
        </button>
      </div>
    </section>
  );
};

export default HeroOne;
