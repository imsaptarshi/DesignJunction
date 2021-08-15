import type { NextPage } from "next";
import Navbar from "../components/Navbar/navbar.component";
import Features from "../sections/Features";
import Landing from "../sections/Landing";
import Resources from "../sections/Resources";

const Home: NextPage = () => {
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

export default Home;
