import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import InformationOne from "./information-one";
import InformationTwo from "./information-two";


type InformationRenderProps = {
    data: BlockListFragmentType["items"];
};

export const InformationRender: React.FC<InformationRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <InformationOne key={item.id} data={item} />
                    case "two":
                        return <InformationTwo key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};