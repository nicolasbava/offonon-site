import QuienesSomos from "@/components/Home/QuienesSomos";
import Hero from "../components/Home/hero";
import Promotion from "../components/Home/Promotion";
import Discounts from "../components/Home/Discounts";
import HomeCourses from "@/components/Home/Courses/HomeCourses";
import RentsDJProductionSection from "@/components/Home/RentsDJProductionSection";
import TeachersSection from "@/components/Home/Teachers/TeachersSection";
import FinalBanner from "@/components/Home/FinalBanner";
import RegisterSection from "@/components/Home/Register";

const HomePage = () => {

  return (
    <>
      <Hero />
      <RentsDJProductionSection />
      <QuienesSomos />
      <Promotion />
      <Discounts />
      <HomeCourses />
      <TeachersSection />
      <RegisterSection />
      <FinalBanner />
    </>
   
  );
};

export default HomePage