import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-16 sm:pb-24 sm:pt-32">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Exploring the Tech Landscape
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From Java programming to Arduino circuits, and exploring the impact of AI in education - join me on my journey through the digital realm.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="tech-tag tech-tag-java">Java</span>
            <span className="tech-tag tech-tag-arduino">Arduino</span>
            <span className="tech-tag tech-tag-ai">AI</span>
            <span className="tech-tag tech-tag-education">Education</span>
          </div>
        </div>
      </div>
    </section>
  );
}
