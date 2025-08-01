import QuienesSomos from "@/components/Home/QuienesSomos";
import Hero from "../components/Home/hero";
import Promotion from "../components/Home/Promotion";
import Discounts from "../components/Home/Discounts";
import HomeCourses from "@/components/Home/Courses/HomeCourses";
import RentsDJProductionSection from "@/components/Home/RentsDJProduction/RentsDJProductionSection";
import TeachersSection from "@/components/Home/Teachers/TeachersSection";
import FinalBanner from "@/components/Home/FinalBanner";
import Layout from "@/components/Layout";
import HomeServices from "@/components/Home/Services/HomeServices";

const HomePage = () => {

  return (
    <Layout>
      <Hero />
      <RentsDJProductionSection />
      <QuienesSomos />
      <Promotion />
      <Discounts />
      <HomeCourses />
      <TeachersSection />
      <HomeServices />
      {/* <RegisterSection /> */}
      <FinalBanner />
    </Layout>
   
  );
};

export default HomePage