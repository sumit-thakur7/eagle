import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

import CoursesBanner from "@/components/coursesComponents/CoursesBanner";
import ParaglidingCourses from "@/components/coursesComponents/ParaglidingCourses";

export default function CoursesContainer() {
  return (
    <>
      <Navbar />

      <CoursesBanner />
      <ParaglidingCourses />
      <Footer />
    </>

  )
}