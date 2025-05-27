import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import BrandsSection from "@/components/equipmentComponents/BrandsSection";
// import Equipment from "@/components/equipmentComponents/Equipment";
// import EquipmentAboutUs from "@/components/equipmentComponents/EquipmentAboutUs";
import EquipmentBanner from "@/components/equipmentComponents/EquipmentBanner";
import EquipmentMaintenanceSection from "@/components/equipmentComponents/EquipmentMaintenanceSection";
import EquipmentRentalSection from "@/components/equipmentComponents/EquipmentRentalSection";
import NeedHelpSection from "@/components/equipmentComponents/NeedHelpSection";
import OurEquipmentSection from "@/components/equipmentComponents/OurEquipmentSection";
// import EquipmentOurTeam from "@/components/equipmentComponents/EquipmentOurTeam";
// import FAQs from "@/components/equipmentComponents/FAQs";
// import OurAchievements from "@/components/equipmentComponents/OurAchievements";
// import ParaglidingSafety from "@/components/equipmentComponents/ParaglidingSafety";


export default function EquimentContainer (){
  return (
    <>
       <Navbar/>
       <EquipmentBanner />
       {/* <EquipmentAboutUs/>
       <EquipmentOurTeam/>
       <OurAchievements/>
       <ParaglidingSafety/> */
       }
       {/* <Equipment/> */}
       {/* <NeedHelpSection /> */}
      <EquipmentMaintenanceSection />
      <BrandsSection />
      <OurEquipmentSection />
      <EquipmentRentalSection />

       {/* <FAQs/> */}

       
       <Footer/>
       </>
    
  )
}