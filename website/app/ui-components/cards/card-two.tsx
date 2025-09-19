import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import Image from 'next/image';
import React from 'react';
import { alignmentClass } from '../atoms/alignClass';
import { colorClass } from '../atoms/colorClass';

type CardBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: CardBlockType;
};

const CardTwo = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className={`${colorClass(data.colorVariantion || "classic")} w-full px-4 py-10`}>
      <div className={`${alignmentClass(data.align || "center")} max-w-3xl mx-auto flex flex-col items-center text-center gap-2`}>
        {data.title && <h2 className="text-3xl font-bold tracking-tight">{data.title}</h2>}
        {data.subtitle && <p className="text-lg text-gray-600">{data.subtitle}</p>}
        {data.text && <p className="text-base text-gray-700">{data.text}</p>}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.cardList?.items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl shadow-lg overflow-hidden bg-white h-[160px] flex items-center justify-start text-left p-4 gap-4"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              {item.image?.url && (
                <Image
                  src={item.image.url || ""}
                  alt={"Card icon"}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <span className="text-lg font-semibold">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardTwo;
