import {
  ProductBlockListFragmentType,
} from "@/app/fragments/content/ProductFragment";
import React from "react";
import { renderRichText } from "../../atoms/RichTextRender";
import Image from "next/image";
import { colorClass } from "../../atoms/colorClass";
import { alignmentClass } from "../../atoms/alignClass";

type TextProductBlockType = ProductBlockListFragmentType["items"][number];

type Props = {
  data: TextProductBlockType;
};

const ProductBlockListWithIcons = ({ data }: Props) => {
  if (!data) return null;

  if (data.blockVariation === "one") {
    return (
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          {data.subtitle && <h3 className="text-lg font-medium text-gray-500">{data.subtitle}</h3>}
          {data.title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>}
          {data.text && <p className="mt-4 text-gray-600">{renderRichText(data.text)}</p>}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.cardList?.items.map((x, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="relative w-16 h-16 mb-4">
                {x.image?.url && (
                  <Image
                    src={x.image?.url || ""}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div>
                {data.title && <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (data.blockVariation === "two") {
    return (
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          {data.subtitle && <h3 className="text-lg font-medium text-gray-500">{data.subtitle}</h3>}
          {data.title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>}
          {data.text && <p className="mt-4 text-gray-600">{renderRichText(data.text)}</p>}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 relative w-full h-64 lg:h-96">
            {data.image?.url && (
              <Image
                src={data.image?.url || ""}
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex-1 grid gap-6 sm:grid-cols-2">
            {data.cardList?.items.map((x, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="relative w-16 h-16 mb-4">
                  {x.image?.url && (
                    <Image
                      src={x.image?.url || ""}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div>
                  {data.title && <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (data.blockVariation === "three") {
    return (
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          {data.title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.cardList?.items.map((x, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="relative w-16 h-16 mb-4">
                {x.image?.url && (
                  <Image
                    src={x.image?.url || ""}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div>
                {data.title && <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (data.blockVariation === "four") {
    return (
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.cardList?.items.map((x, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="relative w-16 h-16 mb-4">
                {x.image?.url && (
                  <Image
                    src={x.image?.url || ""}
                    alt=""
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div>
                {data.title && <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
};

export default ProductBlockListWithIcons;
