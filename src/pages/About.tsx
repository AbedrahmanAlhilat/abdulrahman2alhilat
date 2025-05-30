import { Layout } from "@/components/ui/layout";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Me
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A tech enthusiast exploring the intersection of technology, education, and artificial intelligence.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-6">
                <div className="rounded-xl overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600" 
                    alt="Abdulrahman Hilat Profile" 
                    className="w-full aspect-square object-cover"
                  />
                </div>
                
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abed-al-rahman-hilat-7040362b9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:abed.alhilat@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                
                <h3 className="font-display text-lg font-medium mb-2">Skills</h3>
                <div className="space-y-2 mb-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Java Programming</span>
                      <span className="text-sm font-medium">Intermediate</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-tech-java rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Arduino & Electronics</span>
                      <span className="text-sm font-medium">Intermediate</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-tech-arduino rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Educational Research</span>
                      <span className="text-sm font-medium">Advanced</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-tech-education rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">AI & Machine Learning</span>
                      <span className="text-sm font-medium">Beginner</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-tech-ai rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-medium mb-2">Areas of Interest</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Educational Technology</li>
                  <li>Digital Transformation</li>
                  <li>Artificial Intelligence</li>
                  <li>IoT & Electronics</li>
                  <li>Programming for Education</li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-medium mb-4">My Story</h2>
                <div className="prose text-foreground max-w-none">
                  <p>
                    Hello! I'm Abdulrahman Hilat, a tech enthusiast with a passion for exploring how technology can transform education, particularly in Jordan. My journey in the world of technology began with curiosity about how things work, which led me to experiment with electronics and programming.
                  </p>
                  <p>
                    Currently, I'm developing my skills in Java programming, focusing on object-oriented principles and building applications that solve real-world problems. I'm fascinated by how software design patterns can create elegant solutions to complex challenges.
                  </p>
                  <p>
                    In parallel with programming, I enjoy working with Arduino and electronic components. There's something magical about connecting circuits and sensors to create interactive projects that respond to the physical world. I believe that hands-on electronics projects are a fantastic way to learn STEM concepts and develop problem-solving skills.
                  </p>
                  <p>
                    My research interests focus on "Digital Transformation in Education and the Role of AI," with a special emphasis on the educational landscape in Jordan. I'm exploring how emerging technologies can address educational challenges, enhance learning experiences, and prepare students for a rapidly changing future.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-medium mb-4">Research Focus</h2>
                <div className="prose text-foreground max-w-none">
                  <p>
                    My current research paper examines the potential of digital transformation in Jordanian education, focusing on:
                  </p>
                  <ul>
                    <li>The current state of technology integration in Jordanian educational institutions</li>
                    <li>Challenges and opportunities for digital transformation in education</li>
                    <li>The potential role of artificial intelligence in enhancing teaching and learning</li>
                    <li>Policy recommendations for sustainable digital education initiatives</li>
                  </ul>
                  <p>
                    Through this research, I aim to contribute to the ongoing conversation about educational innovation in Jordan and help bridge the gap between technological possibilities and educational realities.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="font-display text-2xl font-medium mb-4">Vision</h2>
                <div className="prose text-foreground max-w-none">
                  <p>
                    I believe that technology, when thoughtfully applied, has the power to democratize education, personalize learning experiences, and prepare students for the challenges of tomorrow. My goal is to continue exploring the intersection of technology and education, developing practical solutions that can make a meaningful difference in how we teach and learn.
                  </p>
                  <p>
                    Looking ahead, I aspire to collaborate with educators, technologists, and policymakers to create innovative approaches that leverage the best of both human expertise and technological capabilities. I'm particularly interested in developing technologies that are accessible, culturally responsive, and aligned with the specific needs of Jordanian students and educators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
