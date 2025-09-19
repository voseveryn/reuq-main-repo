import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import TextOne from "./text-one";
import TextTwo from "./text-two";
import TextThree from "./text-three";



type TextRenderProps = {
    data: BlockListFragmentType["items"];
};

export const TextRender: React.FC<TextRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <TextOne key={item.id} data={item} />
                    case "two":
                        return <TextTwo key={item.id} data={item} />
                    case "three":
                        return <TextThree key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};