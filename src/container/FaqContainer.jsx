import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import FaqBanner from "@/components/faqComponents/FaqBanner";
import FaqQuestions from "@/components/faqComponents/FaqQuestions";
import QuestionsByCategory from "@/components/faqComponents/QuestionsByCategory";
import StillHaveQuestions from "@/components/faqComponents/StillHaveQuestions";

export default function FaqContainer (){
  return (
     <>
        <Navbar/>
        <FaqBanner/>
        <FaqQuestions/>
        <QuestionsByCategory/>
        <StillHaveQuestions/>
        <Footer/>
        </>
  )
}