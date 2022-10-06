import { GetServerSideProps } from "next";
import Head from "next/head";
import { useMemo } from "react";
import BreadCrumb, { ILink } from "../../components/navigation/BreadCrumb";
import { productPage } from "../../components/navigation/linkBuilder";
import Product from "../../interfaces/Product";
import strings from "../../strings";

const dummy_product: Product = {
  title: "מונופול לדוגמה",
  description: strings.ABOUT_ME,
  coverImageUrl: "/me.png",
  id: "1",
  boardImageUrl: "/me.png",
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
      <BreadCrumb paths={links} />
    </div>
  );
}
