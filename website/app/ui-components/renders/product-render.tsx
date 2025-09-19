import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import ProductTwo from "../products/product-two";
import ProductOne from "../products/product-one";


type ProductRenderProps = {
    data: BlockListFragmentType["items"];
};

export const ProductRender: React.FC<ProductRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <ProductOne key={item.id} data={item} />
                    case "two":
                        return <ProductTwo key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};