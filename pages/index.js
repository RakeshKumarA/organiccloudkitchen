import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import ScrollRV from "../components/Scroll/ScrollRV";
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
        <ScrollRV>
          <HomeSection />
        </ScrollRV>
      </div>
      <div id="section2">
        <ScrollRV>
          <AboutSection />
        </ScrollRV>
      </div>
      <div id="section3">
        <ScrollRV>
          <WhyUsSection />
        </ScrollRV>
      </div>
      <div id="section4">
        <ScrollRV>
          <ServicesSection />
        </ScrollRV>
      </div>
      <div id="section5">
        <ScrollRV>
          <ContactSection />
        </ScrollRV>
      </div>
    </>
  );
}
