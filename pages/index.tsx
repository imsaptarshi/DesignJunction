/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/navbar.component";
import ScrollToTopButton from "../components/ScrollToTop/scrollToTop.component";
import { useSearch } from "../providers/search.provider";
import Features from "../sections/Features";
import Landing from "../sections/Landing";
import Resources from "../sections/Resources";

const Home: NextPage = ({ data }: any) => {
  const { setResources } = useSearch();

  useEffect(() => {
    setResources({
      data,
      searched_data: [],
      isLoading: false,
      error: false,
    });
  }, [data, setResources]);

  return (
    <main className="pb-8 bg-blue-200">
      <Head>
        <title>Design Junction</title>
      </Head>
      <div className="lg:pt-8 bg-blue-gradient">
        <Navbar />
        <Landing />
      </div>
      <Features />
      <Resources />
      <ScrollToTopButton />
      <Toaster position="top-right" />
    </main>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/get/resources`
  );
  const json = await res.json();
  return { data: json };
};

export default Home;
