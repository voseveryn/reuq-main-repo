import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import Image from 'next/image';
import React from 'react'

type CardBlockType = BlockListFragmentType["items"][number];

type Props = {
data: CardBlockType;
};

const CardSection = ({data}: Props) => {
if (!data) return null;

return (
<section className="w-full px-4 py-10">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-2">
{data.title && <h2 className="text-3xl font-bold tracking-tight">{data.title}</h2>}
{data.subtitle && <p className="text-lg text-gray-600">{data.subtitle}</p>}
{data.text && <p className="text-base text-gray-700">{data.text}</p>}
</div>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.cardList?.items.map((item) => (
      <div
        key={item.id}
        className="relative rounded-xl shadow-lg overflow-hidden bg-white h-[360px] flex flex-col items-center justify-start text-center"
      >
        <div className="relative w-full h-48">
          {data.image?.url && (
            <Image
              src={data.image.url}
              alt="logo"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="flex-1 w-full flex flex-col items-center justify-center p-4">
          <span className="text-lg font-semibold">{item.text}</span>
        </div>
      </div>
    ))}
  </div>
</section>
)
}

export default CardSection