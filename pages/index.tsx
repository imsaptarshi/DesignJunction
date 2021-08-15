/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { useEffect } from "react";
import Navbar from "../components/Navbar/navbar.component";
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
      <div className="lg:pt-8 bg-blue-gradient">
        <Navbar />
        <Landing />
      </div>
      <Features />
      <Resources />
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
