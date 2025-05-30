
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
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
      <CardContent className="flex-grow">
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link to={link}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
