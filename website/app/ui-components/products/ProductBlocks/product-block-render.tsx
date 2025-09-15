import { ProductBlockFragmentType, ProductBlockListFragmentType } from "@/app/fragments/content/ProductFragment";
import ProductBlockText from "./product-block-text";
import ProductBlockGallery from "./product-block-gallery";

type ProductBlocksRenderProps = {
  products: ProductBlockListFragmentType["items"];
};

export const ProductBlockRender: React.FC<ProductBlocksRenderProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <>
      {products.map((block, index) => {
        switch (block.type) {
          case "text":
            return <ProductBlockText key={index} data={block} />;
          case "imageList":
            return <ProductBlockGallery key={index} data={block} />
          case "history":
            return <></>
          case "products":
            return <></>
          case "newsletter":
            return <></>
          case "listWithIcons":
            return <></>
          default:
            return null;
        }
      })}
    </>
  );
};