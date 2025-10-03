import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";
import { colorClass } from "../atoms/colorClass";

type PartnersBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: PartnersBlockType;
};

const PartnersSection = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className={`${colorClass(data.colorVariantion || "classic")} flex flex-col items-center justify-center text-center px-4 py-8`}>
      {data.title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{data.title}</h2>
      )}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {data.imageList?.items.map((partner) => (
          <div
            key={partner.id}
            className="relative w-32 h-20 md:w-40 md:h-24 flex-shrink-0"
          >
            <Image
              src={partner.image?.url || ""}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
