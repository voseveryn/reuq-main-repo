import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";

type HeroRenderProps = {
    blocks: BlockListFragmentType["items"];
};

export const HeroRender: React.FC<HeroRenderProps> = ({ blocks }) =>{
    if (!blocks || blocks.length === 0) return null;

    return (
        <>
            {blocks.map((block) =>{
                
            })}
        </>
    )
}