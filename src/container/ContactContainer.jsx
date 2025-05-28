import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import ContactBanner from "@/components/contactComponents/ContactBanner";
import ContactSection from "@/components/contactComponents/ContactSection";
import BirMap from "@/components/contactComponents/Map";

export default function ContactContainer (){
  return (
    <>
    <Navbar/>
      <ContactBanner/>
      <ContactSection/>
      <BirMap/>
       <Footer/>
    </>
    
  )
}