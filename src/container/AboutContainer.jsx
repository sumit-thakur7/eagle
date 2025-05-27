import AboutBanner from "@/components/aboutComponents/AboutBanner";
import Achievements from "@/components/aboutComponents/Achievements";
import JoinCommunity from "@/components/aboutComponents/JoinCommunity";
import MeetOurTeam from "@/components/aboutComponents/MeetOurTeam";
import MissionVision from "@/components/aboutComponents/MissionVision";
import OurStory from "@/components/aboutComponents/OurStory";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

export default function AboutContainer ()  {
  return (
    <>
    <Navbar/>
    <AboutBanner/>
    <OurStory/>
    <Achievements/>
    <MissionVision/>
    <MeetOurTeam/>
    <JoinCommunity/>
    <Footer/>
    </>
  )
}
