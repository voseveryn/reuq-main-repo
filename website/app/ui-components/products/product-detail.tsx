import { ProductFragmentType } from "@/app/fragments/content/ProductFragment";
import { ProductBlockRender } from "./ProductBlocks/product-block-render";

type Props = {
  data: ProductFragmentType;
};

const ProductDetail = ({ data }: Props) => {
  if (!data) return null;

  const products = data.localesByLocale?.blocks?.items || []; // Zajištění výchozí hodnoty

  return (
    <>
      <ProductBlockRender products={products} />
    </>
  );
};

export default ProductDetail;