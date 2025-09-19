import { ProductBlockListFragmentType } from "@/app/fragments/content/ProductFragment";
import ProductBlockText from "./product-block-text";
import ProductBlockGallery from "./product-block-gallery";
import ProductBlockHistory from "./product-block-history";
import ProductBlockListWithIcons from "./product-block-list-with-icons";
import Newsletter from "../../newsletter/newsletter";
import ProductBlockProducts from "./product-block-products";

type ProductBlocksRenderProps = {
  products: ProductBlockListFragmentType["items"];
};

export const ProductBlockRender: React.FC<ProductBlocksRenderProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <>
      {products.map((block) => {
        switch (block.type) {
          case "text":
            return <ProductBlockText key={block.id} data={block} />;
          case "imageList":
            return <ProductBlockGallery key={block.id} data={block} />
          case "history":
            return <ProductBlockHistory key={block.id} data={block} />
          case "products":
            return <ProductBlockProducts key={block.id} data={block} />
          case "newsletter":
            return <Newsletter key={block.id} />
          case "listWithIcons": 
            return <ProductBlockListWithIcons key={block.id} data={block} />
          default:
            return null;
        }
      })}
    </>
  );
};