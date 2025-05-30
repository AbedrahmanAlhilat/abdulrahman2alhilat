
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export function RecentBlogPosts() {
  const posts: BlogPost[] = [
    {
      title: "The State of AI in Jordanian Education",
      excerpt: "Exploring current implementations and future opportunities for AI in Jordan's educational system.",
      date: "April 12, 2025",
      category: "AI & Education",
      slug: "/blog/ai-jordanian-education"
    },
    {
      title: "Building Interactive Learning Tools with Java",
      excerpt: "How object-oriented programming can create engaging educational experiences for students.",
      date: "March 28, 2025",
      category: "Programming",
      slug: "/blog/interactive-learning-java"
    },
    {
      title: "Arduino in the Classroom: A Hands-on Approach",
      excerpt: "Implementing electronics projects to enhance STEM education and problem-solving skills.",
      date: "March 15, 2025",
      category: "Electronics",
      slug: "/blog/arduino-classroom"
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-background to-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From The Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts and insights on technology, education, and their intersection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{post.date} · {post.category}</div>
                <CardTitle className="leading-tight">
                  <Link to={post.slug} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link to={post.slug}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
