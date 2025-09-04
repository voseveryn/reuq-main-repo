import { BlockListFragmentType } from '@/app/fragments/content/BlockFragment';
import React from 'react'
import { renderRichText } from '../atoms/RichTextRender';

type InformationBlockType = BlockListFragmentType["items"][number];

type Props = {
  data: InformationBlockType;
};

const InformationSection = ({ data }: Props) => {
    if (!data) return null;


  return (
    <section>
        {data.title && (<h2>{data.title}</h2>)}
        {data.text && (<p>{renderRichText(data.text)}</p>)}
    </section>
  )
}

export default InformationSection