import Head from "next/head";
import Header from "../components/Header/Header";
import AboutSection from "../components/Section/AboutSection";
import ContactSection from "../components/Section/ContactSection";
import HomeSection from "../components/Section/HomeSection";
import ServicesSection from "../components/Section/ServicesSection";
import WhyUsSection from "../components/Section/WhyUsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Organic Cloud Kitchen</title>
        <meta
          name="keywords"
          content="organic cloud kitchen delivery healthy food vegetarian"
        />
      </Head>
      <Header />
      <div id="section1">
        <HomeSection />
      </div>
      <div id="section2">
        <AboutSection />
      </div>
      <div id="section3">
        <WhyUsSection />
      </div>
      <div id="section4">
        <ServicesSection />
      </div>
      <div id="section5">
        <ContactSection />
      </div>
    </>
  );
}
