import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'

type TeamBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: TeamBlockType;
};


const TeamSection = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section>
        Team
        {data.subtitle && (
            <h3>{data.subtitle}</h3>
        )}
        {data.title && (
            <h2>{data.title}</h2>
        )}
        {data.cardList?.items.map((item) => (
        <div
          key={item.id}
          className="relative rounded-xl shadow-lg overflow-hidden min-h-[200px] flex items-end">
          <div className="bg-black/50 w-full p-4">
            <span className="text-white text-lg font-semibold">{item.title}</span>
            <span className="text-white text-lg font-semibold">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TeamSection