import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";

// Change Props to accept a single block
type HeroBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: HeroBlockType;
};

const HeroSection = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] rounded-2xl overflow-hidden mx-6 my-4"
    >
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
      {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl pointer-events-none" />
      {/* Centered Content */}
      <div className="relative z-20 w-full flex justify-center">
        <div className="text-center text-white max-w-2xl w-full">
          <h3 className="text-lg font-medium mb-2">{data.subtitle}</h3>
          <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
          <div className="text-base">{renderRichText(data.text || "")}</div>
          <button className="bg-white px-4 py-2 text-black mt-2 rounded-md cursor-pointer">Click</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;