import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import TeamOne from "./team-one";
import TeamTwo from "./team-two";



type TeamRenderProps = {
    data: BlockListFragmentType["items"];
};

export const TeamRender: React.FC<TeamRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <TeamOne key={item.id} data={item} />
                    case "two":
                        return <TeamTwo key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};