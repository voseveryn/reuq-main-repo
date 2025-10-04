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
    <section className={`${colorClass({ color: data.colorVariantion, type: "section" })} w-full px-4 py-8`}>
      <div className={`${alignmentClass(data.align || "center")} max-w-3xl mx-auto flex flex-col items-center text-center gap-2`}>
        {data.subtitle && <h3 className={`${colorClass({ color: data.colorVariantion || "classic", type: "subtitle" })}`}>{data.subtitle}</h3>}
        {data.title && <h2 className={`${colorClass({ color: data.colorVariantion || "classic", type: "title" })}`}>{data.title}</h2>}
        {data.text && <div className={`${colorClass({ color: data.colorVariantion || "classic", type: "text" })}`}>{data.text}</div>}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.cardList?.items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg shadow-md overflow-hidden bg-white h-[120px] flex items-center justify-start text-left p-3 gap-3"
          >
            <div className="relative w-14 h-14 flex-shrink-0">
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
              <span className="text-black text-base font-medium">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardTwo;
