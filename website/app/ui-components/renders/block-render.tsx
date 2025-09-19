import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import { HeroRender } from "../hero/hero-render";
import { TextRender } from "../text/text-render";
import { CardRender } from "../cards/card-render";
import { InformationRender } from "../information/information-render";
import PartnersSection from "../partners/partners-section";
import { TeamRender } from "../team/team-render";
import { HistoryRender } from "../history/history-render";
import { ProductRender } from "./product-render";
import Newsletter from "../newsletter/newsletter";

type BlockRenderProps = {
  blocks: BlockListFragmentType["items"];
};

export const BlockRender: React.FC<BlockRenderProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "hero":
            return <HeroRender key={block.id} data={[block]} />;
          case "text":
            return <TextRender key={block.id} data={[block]} />;
          case "card":
            return <CardRender key={block.id} data={[block]} />;
          case "information":
            return <InformationRender key={block.id} data={[block]} />;
          case "partners":
            return <PartnersSection key={block.id} data={block} />;
          case "team":
            return <TeamRender key={block.id} data={[block]} />
          case "history":
            return <HistoryRender key={block.id} data={[block]} />
          case "products":
            return <ProductRender key={block.id} data={[block]} />;
          case "newsletter":
            return <Newsletter key={block.id} />;
          // Add more cases for other block types
          default:
            return null;
        }
      })}
    </>
  );
};