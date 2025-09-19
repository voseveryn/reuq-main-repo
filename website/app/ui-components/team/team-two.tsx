import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'
import Image from 'next/image'

type TeamBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: TeamBlockType;
};

const TeamTwo = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {data.subtitle && (
          <h3 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">
            {data.subtitle}
          </h3>
        )}
        {data.title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            {data.title}
          </h2>
        )}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {data.cardList?.items.map((item, index) => (
          <div
            key={item.id}
            className={`w-full flex flex-col md:flex-row items-center gap-8 p-6 ${
              index % 2 === 1 ? 'bg-gray-100 md:flex-row-reverse' : ''
            }`}
          >
            {item.image?.url && (
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image
                  src={item.image.url}
                  alt={''}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <span className="block text-gray-900 text-xl font-semibold mb-2">
                {item.title}
              </span>
              <span className="block text-gray-600 text-base">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamTwo
