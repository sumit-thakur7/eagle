import BlogBanner from "@/components/blogComponents/BlogBanner";
import BlogCategories from "@/components/blogComponents/BlogCategories";
import FeaturedArticles from "@/components/blogComponents/FeaturedArticles";
import NewsletterSubscription from "@/components/blogComponents/NewsletterSubscription";
import RecentArticles from "@/components/blogComponents/RecentArticles";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

export default function BlogContainer (){
  return (
    <>
    <Navbar/>
    <BlogBanner/>
    <FeaturedArticles/>
    <RecentArticles/>
    <BlogCategories/>
    <NewsletterSubscription/>
    <Footer/>
    </>
    
  )
}