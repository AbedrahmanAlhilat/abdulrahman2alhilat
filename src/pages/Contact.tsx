
import { Layout } from "@/components/ui/layout";
import { ContactSection } from "@/components/contact-section";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Me
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm always open to discussing technology, research opportunities, or potential collaborations.
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </Layout>
  );
};

export default Contact;
