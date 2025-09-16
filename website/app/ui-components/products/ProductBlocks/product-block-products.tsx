import { ProductBlockListFragmentType } from "@/app/fragments/content/ProductFragment"

type ProductsProductBlockType = ProductBlockListFragmentType["items"][number]

type Props = {
    data: ProductsProductBlockType
}

import React from 'react'

const ProductBlockProducts = ({data}: Props) => {
  return (
    <section>
        {data.blockVariation === "one" &&
        <div>
            {data.title && <h2>{data.title}</h2>}
            {data.text && <p>{data.text}</p>}
        </div>
        }
        
    </section>
  )
}

export default ProductBlockProducts