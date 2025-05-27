import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import CustomerSatisfaction from "@/components/testimonialsComponents/CustomerSatisfaction";
import MoreReviews from "@/components/testimonialsComponents/MoreReviews";
import TestimonialsBanner from "@/components/testimonialsComponents/TestimonialsBanner";
import VideoTestimonials from "@/components/testimonialsComponents/VideoTestimonials";
import WhatOurFlyersSay from "@/components/testimonialsComponents/WhatOurFlyersSay";

export default function TestimonialsContainer() {
  return (
    <>
      <Navbar />
      <TestimonialsBanner />
      <WhatOurFlyersSay />
      <MoreReviews />
      <CustomerSatisfaction />
      <VideoTestimonials />
      <Footer />
    </>
  )
}