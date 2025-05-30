
import { useParams } from "react-router-dom";
import { Layout } from "@/components/ui/layout";
import { ArduinoSimulator } from "@/components/arduino-simulator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or database
  // For now we'll use a simple map of project data
  const projectData: Record<string, any> = {
    "smart-home": {
      title: "Smart Home Monitoring",
      description: "Arduino-based solution for monitoring home temperature, humidity, and controlling appliances.",
      longDescription: "This project uses an Arduino to monitor various environmental factors in a home setting, including temperature, humidity, and light levels. It also includes functionality to control appliances through relays, all accessible through a simple interface. The system can be expanded to include remote monitoring via IoT connectivity.",
      technologies: ["Arduino Uno", "DHT22 Sensor", "Relay Module", "LDR Sensor", "LCD Display"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&h=600",
      category: "arduino",
      // The wokwiId would be the actual ID for embedding
      // wokwiId: "123456789",
      fallbackImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&h=500",
    },
    "plant-watering": {
      title: "Automated Plant Watering System",
      description: "System that monitors soil moisture and automatically waters plants when needed.",
      longDescription: "This automated plant watering system uses soil moisture sensors to detect when plants need water and activates a water pump to provide just the right amount. The system is designed to be energy-efficient and can be powered by a small solar panel, making it suitable for outdoor or indoor use without constant maintenance.",
      technologies: ["Arduino Nano", "Soil Moisture Sensor", "Water Pump", "Solar Panel", "Voltage Regulator"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&h=600",
      category: "arduino",
      fallbackImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=500",
    },
    "student-system": {
      title: "Student Record System",
      description: "A Java application demonstrating OOP principles with inheritance, polymorphism, and encapsulation.",
      longDescription: "This Java application implements a comprehensive student record management system that showcases object-oriented programming principles. It includes features for managing student information, course registrations, grades, and academic progress tracking. The system uses inheritance for different types of students (undergraduate, graduate), polymorphism for various record operations, and encapsulation to maintain data integrity.",
      technologies: ["Java", "Object-Oriented Programming", "File I/O", "Collections Framework", "Exception Handling"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=600",
      category: "java",
      codeSnippet: `
public abstract class Person {
    protected String id;
    protected String name;
    protected String email;
    
    public Person(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    // Abstract method to be implemented by subclasses
    public abstract void displayDetails();
    
    // Getters and setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

public class Student extends Person {
    private String major;
    private double gpa;
    private List<Course> courses;
    
    public Student(String id, String name, String email, String major) {
        super(id, name, email);
        this.major = major;
        this.gpa = 0.0;
        this.courses = new ArrayList<>();
    }
    
    @Override
    public void displayDetails() {
        System.out.println("Student ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
    }
    
    // Additional methods specific to Student
    public void enrollCourse(Course course) {
        courses.add(course);
    }
    
    public void calculateGPA() {
        // Implementation for GPA calculation
    }
}`,
    },
  };
  
  const project = id ? projectData[id] : null;
  
  if (!project) {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="text-center">
              <h1 className="font-display text-3xl font-bold mb-4">Project Not Found</h1>
              <p className="mb-6">Sorry, the project you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <Link to="/projects">Back to Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div 
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <section className="section">
        <div className="container">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/projects">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
          
          <h1 className="font-display text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none mb-8">
                <h2>Overview</h2>
                <p>{project.longDescription}</p>
              </div>
              
              {project.category === 'arduino' && (
                <ArduinoSimulator
                  title={project.title}
                  description="Interactive simulation of the Arduino project"
                  wokwiId={project.wokwiId}
                  fallbackImage={project.fallbackImage}
                />
              )}
              
              {project.category === 'java' && project.codeSnippet && (
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-medium mb-4">Code Sample</h2>
                  <div className="bg-secondary/70 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono">{project.codeSnippet}</pre>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="font-display text-xl font-medium mb-4">Project Details</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Technologies Used</h4>
                  <ul className="space-y-1">
                    {project.technologies.map((tech: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Category</h4>
                  <div className="flex">
                    <span className={`tech-tag ${project.category === 'java' ? 'tech-tag-java' : 'tech-tag-arduino'}`}>
                      {project.category === 'java' ? 'Java Project' : 'Arduino & Electronics'}
                    </span>
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
