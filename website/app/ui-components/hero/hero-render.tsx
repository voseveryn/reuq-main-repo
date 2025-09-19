import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import HeroTwo from "./hero-two";
import HeroOne from "./hero-one";
import HeroThree from "./hero-three";

type HeroRenderProps = {
    data: BlockListFragmentType["items"];
};

export const HeroRender: React.FC<HeroRenderProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return (
        <>
            {data.map((item) => {
                if (!item || !item.blockVariation || !item.id) return null;

                switch (item.blockVariation) {
                    case "one":
                        return <HeroOne key={item.id} data={item} />
                    case "two":
                        return <HeroTwo key={item.id} data={item} />
                    case "three":
                        return <HeroThree key={item.id} data={item} />
                    default:
                        return null;
                }
            })}
        </>
    );
};