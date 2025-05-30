import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormEvent } from "react";

export function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:abed.alhilat@gmail.com?subject=Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm always open to discussing technology, research opportunities, or potential collaborations.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <a href="mailto:abed.alhilat@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    abed.alhilat@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
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
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
