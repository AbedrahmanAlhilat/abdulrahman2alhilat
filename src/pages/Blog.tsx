import { useState, useEffect } from "react";
import { Layout } from "@/components/ui/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  content: string;
}

const defaultPosts: BlogPost[] = [
  {
    title: "Getting Started with Educational Technology",
    excerpt: "A comprehensive guide to implementing technology in educational settings effectively.",
    date: "April 19, 2025",
    category: "EdTech",
    tags: ["Education", "Technology", "Getting Started", "Guide"],
    slug: "/blog/getting-started-edtech",
    content: "Welcome to this guide on educational technology..."
  },
  {
    title: "Building Interactive Learning Tools with Java",
    excerpt: "How object-oriented programming can create engaging educational experiences for students.",
    date: "March 28, 2025",
    category: "Programming",
    tags: ["Java", "OOP", "Education", "Development"],
    slug: "/blog/interactive-learning-java",
    content: "This article explores how object-oriented programming can create engaging educational experiences for students..."
  },
  {
    title: "Arduino in the Classroom: A Hands-on Approach",
    excerpt: "Implementing electronics projects to enhance STEM education and problem-solving skills.",
    date: "March 15, 2025",
    category: "Electronics",
    tags: ["Arduino", "STEM", "Education", "Electronics"],
    slug: "/blog/arduino-classroom",
    content: "This article discusses implementing electronics projects to enhance STEM education and problem-solving skills..."
  },
  {
    title: "Digital Literacy in Jordan: Challenges and Opportunities",
    excerpt: "Analyzing the current state of digital literacy in Jordan and strategies for improvement.",
    date: "February 27, 2025",
    category: "Digital Transformation",
    tags: ["Digital Literacy", "Jordan", "Education"],
    slug: "/blog/digital-literacy-jordan",
    content: "This article analyzes the current state of digital literacy in Jordan and discusses strategies for improvement..."
  },
  {
    title: "The Role of AI in Personalized Learning",
    excerpt: "How artificial intelligence can help create customized educational experiences for diverse student needs.",
    date: "February 15, 2025",
    category: "AI & Education",
    tags: ["AI", "Personalized Learning", "EdTech"],
    slug: "/blog/ai-personalized-learning",
    content: "This article discusses how artificial intelligence can help create customized educational experiences for diverse student needs..."
  },
  {
    title: "My First Java Project: Lessons Learned",
    excerpt: "Reflections on building my first Java application and the principles of object-oriented programming.",
    date: "January 30, 2025",
    category: "Programming",
    tags: ["Java", "Beginner", "Learning"],
    slug: "/blog/first-java-project",
    content: "This article reflects on building my first Java application and the principles of object-oriented programming..."
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts([...parsedPosts, ...defaultPosts]);
    }
  }, []);

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Thoughts and insights on technology, education, and their intersection.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search posts..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-2">{post.date} · {post.category}</div>
                      <CardTitle className="text-2xl">
                        <Link to={post.slug} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="cursor-pointer" onClick={() => setSelectedTag(tag)}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="sticky top-6">
                <h3 className="font-display text-lg font-medium mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTag && (
                    <Badge variant="outline" className="mb-4 cursor-pointer" onClick={() => setSelectedTag(null)}>
                      Clear: {selectedTag} ×
                    </Badge>
                  )}
                  
                  {allTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant={selectedTag === tag ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => setSelectedTag(tag !== selectedTag ? tag : null)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
