import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import LineBreak from "../../components/base/LineBreak";
import Footer from "../../components/layout/Footer";
import Section from "../../components/layout/Section";
import BreadCrumb, { ILink } from "../../components/navigation/BreadCrumb";
import { productPage } from "../../components/navigation/linkBuilder";
import ProductDetails from "../../components/product/ProductDetails";
import Product from "../../interfaces/Product";
import strings from "../../strings";

const dummy_product: Product = {
  title: "מונופול לדוגמה",
  description: strings.ABOUT_ME,
  coverImageUrl: "https://picsum.photos/seed/picsum/300/300",
  id: "1",
  boardImageUrl: "https://picsum.photos/seed/picsum/512/512",
  basePrice: 120,
  additionsPrice: 15,
};

export interface ProductPageProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  _context
) => {
  return {
    props: { product: dummy_product },
  };
};

const breadcrumbLinksBuilder = (
  productTitle: string,
  productId: string
): ILink[] => {
  return [
    { label: strings.HOMEPAGE, href: "/" },
    { label: productTitle, href: productPage(productId) },
  ];
};

export default function ProductPage({ product }: ProductPageProps) {
  const links = useMemo(
    () => breadcrumbLinksBuilder(product.title, product.id),
    [product]
  );
  return (
    <div className="flex flex-col items-stretch">
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <BreadCrumb className="px-8 py-4" paths={links} />
      </nav>
      <header className="my-8 container">
        <ProductDetails {...product} />
      </header>
      <LineBreak className="max-w-[calc(100%-32rem)] mx-auto" />
      <main className="space-y-8 pb-6">
        <Section title={strings.GAME_BOARD}>
          <div className="relative w-[512px] h-[512px] mx-auto">
            <Image
              src={product.boardImageUrl}
              alt={strings.GAME_BOARD}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Section>
        <Section title={strings.CARD_EXAMPLES}>מיי ניים איז שובי דובי</Section>
      </main>
      <Footer />
    </div>
  );
}
