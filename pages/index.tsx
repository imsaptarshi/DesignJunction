import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Kofi from "../components/Badges/kofi.component";
import Footer from "../components/Footer/footer.component";
import Navbar from "../components/Navbar/navbar.component";
import sortResources from "../helpers/sorter";
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
    <main className="relative overflow-x-hidden md:overflow-x-visible pb-8 bg-blue-200">
      <Head>
        <title>Design Junction</title>
      </Head>
      <div className="lg:pt-8 bg-blue-gradient">
        <Navbar />
        <Landing />
      </div>
      <Features />
      <Resources />
      <Kofi />
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/get/resources`
  );
  const json = await res.json();
  const _data = sortResources(json);
  return { data: _data };
};

export default Home;
