"use client"
import React, { useState } from 'react'
import { ProductBlockListFragmentType } from "@/app/fragments/content/ProductFragment"
import Image from 'next/image'
import { colorClass } from '../../atoms/colorClass'

type GalleryProductBlockType = ProductBlockListFragmentType["items"][number]

type Props = {
    data: GalleryProductBlockType
}

const ProductBlockGallery = ({data}: Props) => {
    if (!data) return null;

    const [activeImage, setActiveImage] = useState<string | null>(null)

    return (
    <section className={`${colorClass(data.colorVariantion || "classic")} 
          w-full py-12 px-4 md:px-8`}>
        {data.blockVariation === "one" && 
        <div className="max-w-6xl mx-auto text-center mb-8 space-y-2">
            {data.title && <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>}
            {data.subtitle && <h3 className="text-xl md:text-2xl font-medium">{data.subtitle}</h3>}
        </div>}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {data.imageList?.items.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img.image?.url || "")}
                  className="relative aspect-square overflow-hidden rounded-lg shadow hover:opacity-90 transition"
                >
                  <Image 
                    src={img.image?.url || ""} 
                    alt='' 
                    fill
                    className="object-cover"
                  />
                </button>
            ))}
        </div>

        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)} 
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              ✕
            </button>
            <div className="relative max-w-4xl w-full px-4">
              <Image 
                src={activeImage} 
                alt="gallery-image" 
                width={1200} 
                height={800} 
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        )}
    </section>
  )
}

export default ProductBlockGallery
