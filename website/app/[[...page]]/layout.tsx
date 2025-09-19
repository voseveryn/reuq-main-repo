import { notFound } from "next/navigation"
import { ContemberClient } from "../contember"
import { queryBuilder } from "../../../client/src"
import { byLocale, byLocaleUrl, byProductUrl } from "../fragments/utils/filters"
import { PageFragment, PageFragmentType } from "../fragments/pages/PageFragment"
import { NavigationFragment } from "../fragments/layout/NavigationFragment"
import { byUniqueOne } from "../fragments/utils/filters"
import { FooterFragment } from "../fragments/layout/FooterFragment"
import { Navbar } from "../ui-components/layout/navigation"
import { BlockListFragmentType } from "../fragments/content/BlockFragment";
import '../globals.css'
import HeroSection from "../ui-components/hero/hero-one"
import CardSection from "../ui-components/cards/card-one"
import InformationSection from "../ui-components/information/information-one"
import PartnersSection from "../ui-components/partners/partners-section"
import TeamSection from "../ui-components/team/TeamSection"
import HistorySection from "../ui-components/history/history-section"
import Footer from "../ui-components/layout/footer"
import { ProductFragment } from "../fragments/content/ProductFragment"
import Image from "next/image"
import { renderRichText } from "../ui-components/atoms/RichTextRender"
import ProductList from "../ui-components/products/product-one"
import ProductDetail from "../ui-components/products/product-detail"
import { HeroRender } from "../ui-components/hero/hero-render"
import { CardRender } from "../ui-components/cards/card-render"
import { InformationRender } from "../ui-components/information/information-render"
import { ProductRender } from "../ui-components/products/product-render"
import { TextRender } from "../ui-components/text/text-render"


type PageProps = {
    params: { page?: Array<string> }
}

type BlockRenderProps = {
    blocks: BlockListFragmentType["items"];
};

const BlockRender: React.FC<BlockRenderProps> = ({ blocks }) => {
    if (!blocks || blocks.length === 0) return null;

    return (
        <>
            {blocks.map((block) => {
                switch (block.type) {
                    case "hero":
                        return (
                            <HeroRender key={block.id} data={[block]} />
                        );
                    case "text":
                        return (
                            <TextRender key={block.id} data={[block]} />
                        );
                    case "card":
                        return (
                            <CardRender key={block.id} data={[block]} />
                        )
                    case "information":
                        return (
                            <InformationRender key={block.id} data={[block]} />
                        )
                    case "partners": 
                        return (
                            <PartnersSection key={block.id} data={block} />
                        )
                    case "team": 
                        return (
                            <TeamSection key={block.id} data={block} />
                        )
                    case "history":
                        return (
                            <HistorySection key={block.id} data={block} />
                        )
                    case "products":
                        return (
                            <ProductRender key={block.id} data={[block]} />
                        )
                    // Add more cases for other block types
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default async function RootLayout(props: PageProps) {
    const params = await props.params
    const client = ContemberClient()

    const locale = params.page && params.page.length >= 1 ? params.page[0] : 'cs'
    if (!locale || locale.length !== 2) {
        return notFound()
    }

    const urlToMatch = params.page && params.page.length > 1
        ? `/${params.page.join('/')}`
        : `/${locale}`

    // Fetch page and specific navigation from CMS
    const { page, navigation, footer, product } = await client.query({
    page: queryBuilder.get('Page', byLocaleUrl(urlToMatch), PageFragment(locale)),
    navigation: queryBuilder.get('Navigation', byUniqueOne, NavigationFragment(locale)),
    footer: queryBuilder.get('Footer', byUniqueOne, FooterFragment(locale)),
    product: queryBuilder.get('Product', byLocaleUrl(urlToMatch), ProductFragment(locale))
})

    

   
    if (!page && !product) {
  return notFound();
}



const blocks = page?.localesByLocale?.blocks?.items ?? [];

return (
  <html>
    <body>
        <Navbar data={navigation ?? undefined} locale={locale} />
        <main className="relative top-32">
        {product != null ? <ProductDetail data={product} />: <BlockRender blocks={blocks} />}
        </main>
        <Footer data={footer ?? undefined} />
        </body>
  </html>
)
}