import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import React from "react";
import { renderRichText } from "../atoms/RichTextRender";
import Image from "next/image";
import Link from "next/link";
import { colorClass } from "../atoms/colorClass";

type ProductBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: ProductBlockType;
};

const ProductOne = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className={`${colorClass({ color: data.colorVariantion, type: "section" })} w-full px-4 py-12 md:py-16`}>
      <div className="mx-auto max-w-7xl">
        {data.title && (
          <h2 className={`${colorClass({ color: data.colorVariantion, type: "title" })}`}>
            {data.title}
          </h2>
        )}

        {data.text && (
          <div className={`${colorClass({ color: data.colorVariantion, type: "text" })}`}>
            {renderRichText(data.text)}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.productList?.product?.map((item) => (
            <article key={item.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <Link href={item.localesByLocale?.url?.url || ""}>{item.localesByLocale?.url?.url}</Link>
              {item.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image?.url || ""}
                    alt=""
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  {item.localesByLocale?.infoLabel && (
                    <span className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {item.localesByLocale?.infoLabel}
                    </span>
                  )}
                  {item.localesByLocale?.shortLabel && (
                    <span className="inline-flex items-center rounded-full bg-gray-900/5 px-2.5 py-1 text-xs font-medium text-gray-800">
                      {item.localesByLocale?.shortLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2 group-hover:underline underline-offset-4 decoration-gray-300">
                  {item.localesByLocale?.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 line-clamp-3">
                  {item.localesByLocale?.description}
                </p>

                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    Zobrazit detail
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOne
