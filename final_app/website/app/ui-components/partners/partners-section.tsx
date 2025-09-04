import { BlockListFragmentType } from "@/app/fragments/content/BlockFragment";
import Image from "next/image";
import React from "react";

type PartnersBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: PartnersBlockType;
};

const PartnersSection = ({ data }: Props) => {
  if (!data) return null;

  return <section>
    {data.title && <h2>{data.title}</h2>}
    {data.imageList?.items.map((partner)=> <div key={partner.id}>
        <Image src={partner.image?.url || ""} fill alt="" />
    </div>)}
  </section>;
};

export default PartnersSection;
