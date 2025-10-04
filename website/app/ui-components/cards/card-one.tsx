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
    <section className={`${colorClass({ color: data.colorVariantion || "classic", type: "section" })} w-full px-4 py-10`}>
      <div className={`${alignmentClass(data.align || "center")} max-w-3xl mx-auto flex flex-col items-center text-center gap-2`}>
        {data.subtitle && (
          <h3 className={`${colorClass({ color: data.colorVariantion || "classic", type: "subtitle" })}`}>
            {data.subtitle}
          </h3>
        )}
        {data.title && (
          <h2 className={`${colorClass({ color: data.colorVariantion || "classic", type: "title" })}`}>
            {data.title}
          </h2>
        )}
        {data.text && (
          <div className={`${colorClass({ color: data.colorVariantion || "classic", type: "text" })}`}>
            {data.text}
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {data.cardList?.items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl shadow-lg overflow-hidden bg-white max-w-[300px] h-[360px] flex flex-col items-center justify-start text-center"
          >
            <div className="relative w-full h-48">
              {item.image?.url && (
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
              <span className={`${colorClass({ color: data.colorVariantion || "classic", type: "text" })} text-lg font-semibold`}>
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardOne;