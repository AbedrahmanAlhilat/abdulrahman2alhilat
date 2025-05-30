
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function TechJourneySection() {
  const journeyItems = [
    {
      title: "Java & Object-Oriented Programming",
      description: "Building foundational skills in Java and exploring object-oriented programming concepts.",
      className: "bg-tech-java/5 border-tech-java/20",
      link: "/projects#java"
    },
    {
      title: "Electronics & Arduino",
      description: "Experimenting with circuits, components, and Arduino-based projects to solve real-world problems.",
      className: "bg-tech-arduino/5 border-tech-arduino/20",
      link: "/projects#arduino"
    },
    {
      title: "AI in Education Research",
      description: "Exploring how artificial intelligence can transform educational experiences in Jordan.",
      className: "bg-tech-ai/5 border-tech-ai/20",
      link: "/blog"
    },
    {
      title: "Digital Transformation",
      description: "Investigating the impact of digital tools on educational outcomes and accessibility.",
      className: "bg-tech-education/5 border-tech-education/20",
      link: "/blog"
    },
  ];

  return (
    <section className="section bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Tech Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Exploring various domains of technology and their applications in the real world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {journeyItems.map((item, index) => (
            <div 
              key={index}
              className={`rounded-xl border p-6 transition-all hover:shadow-md ${item.className}`}
            >
              <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <Link 
                to={item.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
