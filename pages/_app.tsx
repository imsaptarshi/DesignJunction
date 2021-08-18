import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "../providers/search.provider";
import { AdminProvider } from "../providers/admin.provider";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdminProvider>
      <SearchProvider>
        <Head>
          <title>Design Junction</title>
          <meta name="title" content="Design Junction" />
          <meta
            name="description"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://design-junction.vercel.app/"
          />
          <meta property="og:title" content="Design Junction" />
          <meta
            property="og:image:alt"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta
            property="og:description"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta property="og:image" content="/screenshot.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://design-junction.vercel.app/"
          />
          <meta property="twitter:title" content="Design Junction" />
          <meta
            property="twitter:description"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta property="twitter:image" content="/screenshot.png" />
        </Head>
        <Component {...pageProps} />
      </SearchProvider>
    </AdminProvider>
  );
}
export default MyApp;
