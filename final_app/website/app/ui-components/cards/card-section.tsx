import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'

type CardBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: CardBlockType;
};


const CardSection = ({data}: Props) => {
  if (!data) return null;
  
  
  return (
    <section>
       {data.cardList?.items.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl shadow-lg overflow-hidden min-h-[200px] flex items-end">
          <div className="bg-black/50 w-full p-4">
            <span className="text-white text-lg font-semibold">{item.text}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CardSection