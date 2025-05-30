
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: "Student Record System",
      description: "A Java application demonstrating OOP principles with inheritance, polymorphism, and encapsulation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=350",
      tags: ["Java", "OOP", "Database"],
      link: "/projects/student-system"
    },
    {
      title: "Smart Home Monitoring",
      description: "Arduino-based solution for monitoring home temperature, humidity, and controlling appliances.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=350",
      tags: ["Arduino", "IoT", "Electronics"],
      link: "/projects/smart-home"
    },
    {
      title: "Educational AI Chatbot",
      description: "Research prototype exploring how conversational AI can enhance student engagement in Jordanian classrooms.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=350",
      tags: ["AI", "Education", "Research"],
      link: "/projects/edu-ai-chatbot"
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of my work showcasing skills in programming, electronics, and educational technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link to={project.link}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
