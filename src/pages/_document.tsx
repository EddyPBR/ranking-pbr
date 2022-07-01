import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" crossOrigin="https://fonts.gstatic.com" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#F7FAFC" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#4F46E5" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="MobileOptimized" content="320" />
          <meta
            property="og:site_name"
            content="Ranking PBR - Scoring games or pranks with friends"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ranking PBR - Scoring games or pranks with friends"
          />
          <meta property="og:url" content={`${process.env.VERCEL_URL}`} />
          <meta
            property="og:image"
            content={`${process.env.VERCEL_URL}/public/thumbnails/thumbnail-us.jpg`}
          />
          <meta
            property="og:image:alt"
            content="Ranking PBR - Scoring games or pranks with friends"
          />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/eddypbr/"
          />
          <meta
            property="article:tag"
            content="Ranking PBR"
            key="Ranking PBR"
          />
          <meta
            property="og:image:secure_url"
            content={`${process.env.VERCEL_URL}/public/thumbnails/thumbnail-us.jpg`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Ranking PBR - Scoring games or pranks with friends"
          />
          <meta name="twitter:url" content={`${process.env.VERCEL_URL}`} />
          <meta
            name="twitter:image"
            content={`${process.env.VERCEL_URL}/public/thumbnails/thumbnail-us.jpg`}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
