import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import AboutSection from "../components/Section/AboutSection";
import ContactSection from "../components/Section/ContactSection";
import HomeSection from "../components/Section/HomeSection";
import ServicesSection from "../components/Section/ServicesSection";
import WhyUsSection from "../components/Section/WhyUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
