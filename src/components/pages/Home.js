import { React } from "react";
import IconRack from "../home/icon-rack/IconRack";
import Banner from "../banner/Banner";
import ProductComp from "../products/ProductComp";
import FormBanner from "../banner/FormBanner";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-black">Click & Collect made Easy</h1>
      <IconRack />
      <Banner content="Featured products"></Banner>
      <ProductComp />
      <FormBanner />
      <Footer />
    </>
  );
};

export default Home;
