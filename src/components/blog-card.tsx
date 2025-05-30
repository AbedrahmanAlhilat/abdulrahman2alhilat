
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  onTagClick?: (tag: string) => void;
}

export function BlogCard({ title, excerpt, date, category, tags, slug, onTagClick }: BlogCardProps) {
  return (
    <Card className="transition-all hover:shadow-md h-full flex flex-col">
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">{date} · {category}</div>
        <CardTitle className="text-2xl">
          <Link to={slug} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className={onTagClick ? "cursor-pointer" : ""}
                onClick={() => onTagClick && onTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link to={slug}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
