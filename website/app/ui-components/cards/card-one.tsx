import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import Image from 'next/image';
import React from 'react';
import { alignmentClass } from '../atoms/alignClass';
import { colorClass } from '../atoms/colorClass';

type CardBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: CardBlockType;
};

const CardOne = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className={`${colorClass(data.colorVariantion || "classic")} w-full px-4 py-10`}>
      <div className={`${alignmentClass(data.align || "center")} max-w-3xl mx-auto flex flex-col items-center text-center gap-2`}>
        {data.subtitle && <h3 className="text-lg font-bold text-emerald-700">{data.subtitle}</h3>}
        {data.title && <h2 className="text-3xl font-[600] tracking-tight">{data.title}</h2>}
        {data.text && <p className={`text-base ${data.colorVariantion === "classic" ?  "text-gray-500" :  "text-gray-700" }`}>{data.text}</p>}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {data.cardList?.items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl shadow-lg overflow-hidden bg-white max-w-[300px] h-[360px] flex flex-col items-center justify-start text-center"
          >
            <div className="relative w-full h-48">
              {item.image?.url && ( // Změna: Obrázek se nyní načítá z item.image
                <Image
                  src={item.image.url || ""}
                  alt={"Card image"}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            <div className="flex-1 w-full flex flex-col items-center justify-center p-4">
              <span className="text-lg text-black font-semibold">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardOne;