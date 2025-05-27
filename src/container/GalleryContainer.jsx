import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import GalleryBanner from "@/components/galleryComponents/GalleryBanner";
import ParaglidingVideos from "@/components/galleryComponents/ParaglidingVideos";
import PhotoGallery from "@/components/galleryComponents/PhotoGallery";

export default function GalleryContainer (){
  return (
     <>
        <Navbar/>
        <GalleryBanner/>
        <PhotoGallery/>
        <ParaglidingVideos/>
        <Footer/>
      </>
  )
}