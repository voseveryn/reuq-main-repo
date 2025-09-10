import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'
import Image from 'next/image'

type TeamBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: TeamBlockType;
};

const TeamSection = ({ data }: Props) => {
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

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.cardList?.items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl shadow-lg overflow-hidden min-h-[320px] flex items-end group hover:scale-[1.02] transition-transform duration-300"
          >
            {item.image?.url && (
              <Image
                src={item.image.url}
                alt={''}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
            <div className="relative z-10 w-full p-6">
              <span className="block text-white text-lg font-semibold">
                {item.title}
              </span>
              <span className="block text-white text-sm opacity-90">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
