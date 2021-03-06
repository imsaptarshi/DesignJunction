import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "../providers/search.provider";
import { AdminProvider } from "../providers/admin.provider";
import React, { useEffect } from "react";
import Head from "next/head";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: String) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
          <meta property="og:url" content="https://designjunction.xyz/" />
          <meta property="og:title" content="Design Junction" />
          <meta
            property="og:image:alt"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta
            property="og:description"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta property="og:image" content="/embed.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://designjunction.xyz/" />
          <meta property="twitter:title" content="Design Junction" />
          <meta
            property="twitter:description"
            content="Design Junction is a one-stop resource library for Designers and Creatives with curated list of best resources handpicked from around the web"
          />
          <meta property="twitter:image" content="/embed.png" />
        </Head>
        <Component {...pageProps} />
      </SearchProvider>
    </AdminProvider>
  );
}
export default MyApp;
