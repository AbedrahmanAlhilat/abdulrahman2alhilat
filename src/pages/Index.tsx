
import { Layout } from "@/components/ui/layout";
import { HeroSection } from "@/components/hero-section";
import { TechJourneySection } from "@/components/tech-journey-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { RecentBlogPosts } from "@/components/recent-blog-posts";
import { ContactSection } from "@/components/contact-section";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TechJourneySection />
      <FeaturedProjects />
      <RecentBlogPosts />
      <ContactSection />
    </Layout>
  );
};

export default Index;
