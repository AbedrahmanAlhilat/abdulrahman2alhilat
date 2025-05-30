
import { Link } from "react-router-dom";

interface BlogPostContentProps {
  content: string;
  tags: string[];
}

export function BlogPostContent({ content, tags }: BlogPostContentProps) {
  return (
    <>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      
      <div className="mt-8 pt-8 border-t">
        <h3 className="font-display text-lg font-medium mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <Link key={index} to={`/blog?tag=${tag}`}>
              <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
