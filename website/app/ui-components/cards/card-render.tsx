import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import CardTwo from "./card-two";
import CardOne from "./card-one";

type CardRenderProps = {
    data: BlockListFragmentType["items"];
};

export const CardRender: React.FC<CardRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <CardOne key={item.id} data={item} />
                    case "two":
                        return <CardTwo key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};