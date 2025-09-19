import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import HistoryOne from "./history-one";
import HistoryTwo from "./history-two";



type HistoryRenderProps = {
    data: BlockListFragmentType["items"];
};

export const HistoryRender: React.FC<HistoryRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <HistoryOne key={item.id} data={item} />
                    case "two":
                        return <HistoryTwo key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};