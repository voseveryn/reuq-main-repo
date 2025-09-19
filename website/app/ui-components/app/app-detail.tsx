import { AppFragmentType } from '@/app/fragments/content/AppFragment'
import React from 'react'
import { BlockRender } from '../renders/block-render';
import { renderRichText } from '../atoms/RichTextRender';
import Image from 'next/image';

type Props = {
    data: AppFragmentType;
}

const AppDetail = ({data}: Props) => {
    if(!data) return null;

    const localized = data.localesByLocale;

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-black/10 dark:via-white/5 dark:to-white/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            {localized?.name && (
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur-sm bg-white/60 border-black/10 text-black/70 shadow-sm dark:bg-white/10 dark:text-white/80 dark:border-white/10">
                  {localized?.name}
                </span>
              </div>
            )}

            {localized?.title && (
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {localized?.title}
              </h1>
            )}

            {localized?.subtitle && (
              <h2 className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-black/70 dark:text-white/70">
                {localized?.subtitle}
              </h2>
            )}

            {localized?.description && (
              <div className="mt-6 text-base sm:text-lg leading-relaxed text-black/80 dark:text-white/80">
                <div className="[&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>h1]:text-2xl [&>h2]:text-xl [&>h3]:text-lg [&>a]:underline [&>a]:underline-offset-4">
                  {renderRichText(localized?.description)}
                </div>
              </div>
            )}
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/5 via-transparent to-black/10 dark:from-white/5 dark:to-white/10" />
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]">
                {data.image?.url && (
                  <Image
                    src={data.image.url}
                    alt={localized?.title ?? 'App image'}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Blocks */}
        <div className="mt-10 sm:mt-12 lg:mt-16 space-y-8">
          {localized?.blocks?.items.map((x) => (
            <div key={x.id} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 sm:p-6">
              <BlockRender blocks={[x]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppDetail
