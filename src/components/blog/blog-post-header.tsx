import { Calendar, ChevronLeft, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
}

export function BlogPostHeader({ title, date, author, category }: BlogPostHeaderProps) {
  return (
    <>
      <Button asChild variant="outline" className="mb-6">
        <Link to="/blog">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </Button>
      
      <h1 className="font-display text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-8">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-2" />
          <span>{author}</span>
        </div>
        <div className="flex items-center">
          <Tag className="h-4 w-4 mr-2" />
          <span>{category}</span>
        </div>
      </div>
    </>
  );
}
