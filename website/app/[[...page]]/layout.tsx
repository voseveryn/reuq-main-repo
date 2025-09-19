import { notFound } from "next/navigation";
import { ContemberClient } from "../contember";
import { queryBuilder } from "../../../client/src";
import { byLocaleUrl, byUniqueOne } from "../fragments/utils/filters";
import { PageFragment } from "../fragments/pages/PageFragment";
import { NavigationFragment } from "../fragments/layout/NavigationFragment";
import { FooterFragment } from "../fragments/layout/FooterFragment";
import { Navbar } from "../ui-components/layout/navigation";
import "../globals.css";
import Footer from "../ui-components/layout/footer";
import { ProductFragment } from "../fragments/content/ProductFragment";
import ProductDetail from "../ui-components/products/product-detail";
import { ContactFragment } from "../fragments/content/ContactFragment";
import Contact from "../ui-components/contact/contact";
import { AppFragment } from "../fragments/content/AppFragment";
import AppDetail from "../ui-components/app/app-detail"; // <— ujisti se o správné cestě
import { BlockRender } from "../ui-components/renders/block-render";

type PageProps = {
  params: { page?: Array<string> };
};

export default async function RootLayout(props: PageProps) {
  const params = await props.params;
  const client = ContemberClient();

  const locale = params.page && params.page.length >= 1 ? params.page[0] : "cs";
  if (!locale || locale.length !== 2) {
    return notFound();
  }

  const urlToMatch =
    params.page && params.page.length > 1
      ? `/${params.page.join("/")}`
      : `/${locale}`;

  // Fetch page a nav/footer + specializované entity
  const { page, navigation, footer, product, contact, app } = await client.query({
    page: queryBuilder.get("Page", byLocaleUrl(urlToMatch), PageFragment(locale)),
    navigation: queryBuilder.get("Navigation", byUniqueOne, NavigationFragment(locale)),
    footer: queryBuilder.get("Footer", byUniqueOne, FooterFragment(locale)),
    product: queryBuilder.get("Product", byLocaleUrl(urlToMatch), ProductFragment(locale)),
    contact: queryBuilder.get("Contact", byUniqueOne, ContactFragment(locale)),
    app: queryBuilder.get("App", byLocaleUrl(urlToMatch), AppFragment(locale)), // zváž: stejné párování jako u Product
  });

  // Když fakt nic: 404
  if (!page && !product && !app) {
    return notFound();
  }

  const blocks = page?.localesByLocale?.blocks?.items ?? [];

  // --- CHOOSER (switch) ---
  type View = "product" | "app" | "page";
  const view: View = product ? "product" : app ? "app" : "page";

  const renderContent = () => {
    switch (view) {
      case "product":
        return <ProductDetail data={product!} />;
      case "app":
        return <AppDetail data={app!} />;
      case "page":
      default:
        if (!blocks.length) return notFound();
        return <BlockRender blocks={blocks} />;
    }
  };
  // --- /CHOOSER ---

  return (
    <html>
      <body>
        <Navbar data={navigation ?? undefined} locale={locale} />
        <main className="relative top-32">
          {renderContent()}
          <Contact data={contact ?? undefined} />
        </main>
        <Footer data={footer ?? undefined} />
      </body>
    </html>
  );
}
