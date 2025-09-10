import { notFound } from "next/navigation"
import { ContemberClient } from "../contember"
import { queryBuilder } from "../../../client/src"
import { byLocale, byLocaleUrl } from "../fragments/utils/filters"
import { PageFragment, PageFragmentType } from "../fragments/pages/PageFragment"
import { NavigationFragment } from "../fragments/layout/NavigationFragment"
import { byUniqueOne } from "../fragments/utils/filters"
import { FooterFragment } from "../fragments/layout/FooterFragment"
import { Navbar } from "../ui-components/layout/navigation"
import { BlockListFragmentType } from "../fragments/content/BlockFragment";
import '../globals.css'
import HeroSection from "../ui-components/hero/hero-section"
import CardSection from "../ui-components/cards/card-section"
import InformationSection from "../ui-components/information/information-section"
import PartnersSection from "../ui-components/partners/partners-section"
import TeamSection from "../ui-components/team/TeamSection"
import HistorySection from "../ui-components/history/history-section"
import Footer from "../ui-components/layout/footer"
import { ProductFragment } from "../fragments/content/ProductFragment"
import Image from "next/image"
import { renderRichText } from "../ui-components/atoms/RichTextRender"

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
            {blocks.map((block, idx) => {
                switch (block.type) {
                    case "hero":
                        return (
                            <HeroSection key={idx} data={block} />
                        );
                    case "text":
                        return (
                            <div key={idx}>
                                <p>{block.text}</p>
                            </div>
                        );
                    case "card":
                        return (
                            <CardSection key={idx} data={block} />
                        )
                    case "information":
                        return (
                            <InformationSection key={idx} data={block} />
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
    const { page, navigation, footer, products } = await client.query({
    page: queryBuilder.get('Page', byLocaleUrl(urlToMatch), PageFragment(locale)),
    navigation: queryBuilder.get('Navigation', byUniqueOne, NavigationFragment(locale)),
    footer: queryBuilder.get('Footer', byUniqueOne, FooterFragment(locale)),
    products: queryBuilder.list('Product', {}, ProductFragment(locale)),
})

    // ...existing code...

   
    if (!page) {
        return notFound();
    }

    // Safely extract blocks, defaulting to empty array if missing
    const blocks =
        page.localesByLocale?.blocks?.items ??
        [];

// ...existing code...

    return (
        <html>
            <body>
                <Navbar data={navigation ?? undefined} />
                <BlockRender blocks={blocks} />
                <br />
                <br />
                <Footer data={footer ?? undefined}/>
             
            </body>
        </html>
    )
}