import { FC } from "react";

import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export { SEO };
