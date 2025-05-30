
import { Layout } from "@/components/ui/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Projects = () => {
  const javaProjects = [
    {
      title: "Student Record System",
      description: "A Java application demonstrating OOP principles with inheritance, polymorphism, and encapsulation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=350",
      tags: ["Java", "OOP", "Database"],
      link: "/projects/student-system"
    },
    {
      title: "Library Management System",
      description: "Java-based application to manage book inventory, loans, and user accounts using object-oriented design patterns.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350",
      tags: ["Java", "OOP", "UI Design"],
      link: "/projects/library-system"
    },
    {
      title: "Educational Quiz App",
      description: "Interactive quiz application built with Java Swing to help students test their knowledge in various subjects.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350",
      tags: ["Java", "Swing", "Education"],
      link: "/projects/quiz-app"
    },
  ];
  
  const arduinoProjects = [
    {
      title: "Smart Home Monitoring",
      description: "Arduino-based solution for monitoring home temperature, humidity, and controlling appliances.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&h=350",
      tags: ["Arduino", "IoT", "Electronics"],
      link: "/projects/smart-home"
    },
    {
      title: "Automated Plant Watering System",
      description: "System that monitors soil moisture and automatically waters plants when needed.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=350",
      tags: ["Arduino", "Sensors", "Automation"],
      link: "/projects/plant-watering"
    },
    {
      title: "LED Matrix Display",
      description: "Programmable LED matrix display for showing scrolling messages and simple animations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350",
      tags: ["Arduino", "LEDs", "Programming"],
      link: "/projects/led-matrix"
    },
  ];
  
  const researchProjects = [
    {
      title: "Educational AI Chatbot",
      description: "Research prototype exploring how conversational AI can enhance student engagement in Jordanian classrooms.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=350",
      tags: ["AI", "Education", "Research"],
      link: "/projects/edu-ai-chatbot"
    },
    {
      title: "Digital Transformation Framework",
      description: "A comprehensive framework for implementing digital transformation in Jordanian educational institutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350",
      tags: ["Education", "Digital", "Framework"],
      link: "/projects/digital-framework"
    },
  ];

  const renderProjects = (projects: any[]) => {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md" id={project.title.toLowerCase().replace(/\s+/g, '-')}>
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
                  {project.tags.map((tag: string, idx: number) => (
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
    );
  };

  return (
    <Layout>
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              My Projects
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A collection of my work across programming, electronics, and educational technology research.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <Tabs defaultValue="java" className="w-full">
            <TabsList className="w-full justify-start mb-8 overflow-x-auto">
              <TabsTrigger value="java" id="java">Java Projects</TabsTrigger>
              <TabsTrigger value="arduino" id="arduino">Arduino & Electronics</TabsTrigger>
              <TabsTrigger value="research">Research Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="java" className="mt-6">
              {renderProjects(javaProjects)}
            </TabsContent>
            
            <TabsContent value="arduino" className="mt-6">
              {renderProjects(arduinoProjects)}
            </TabsContent>
            
            <TabsContent value="research" className="mt-6">
              {renderProjects(researchProjects)}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
