import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "New Automatic Enrollment Bill Introduced in Congress",
    excerpt: "A groundbreaking bill supporting automatic enrollment in gifted programs has been introduced with bipartisan support.",
    date: "December 1, 2024",
    category: "Legislation",
    author: "Alex Johnson",
  },
  {
    id: 2,
    title: "Student Board Success Story: Texas GT Advocacy Board",
    excerpt: "The Texas GT Student Board celebrates its first year of advocacy achievements, including policy changes in three districts.",
    date: "November 28, 2024",
    category: "Success Stories",
    author: "Sarah Chen",
  },
  {
    id: 3,
    title: "NGTSAB Annual Conference 2024 Recap",
    excerpt: "Over 200 student advocates gathered for our annual conference to share strategies and build connections.",
    date: "November 15, 2024",
    category: "Events",
    author: "Marcus Williams",
  },
  {
    id: 4,
    title: "Why Student Voice Matters in Gifted Education",
    excerpt: "Research shows that programs designed with student input are more effective and better serve diverse learners.",
    date: "November 8, 2024",
    category: "Opinion",
    author: "Emily Rodriguez",
  },
  {
    id: 5,
    title: "5 Steps to Advocate for Automatic Enrollment in Your State",
    excerpt: "A practical guide for students who want to push for automatic enrollment legislation in their home states.",
    date: "October 25, 2024",
    category: "How-To",
    author: "Jordan Lee",
  },
  {
    id: 6,
    title: "The Equity Case for Automatic Enrollment",
    excerpt: "Understanding how automatic enrollment addresses systemic inequities in gifted program access.",
    date: "October 18, 2024",
    category: "Legislation",
    author: "Priya Patel",
  },
];

export default function BlogIndex() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            News, updates, and insights from NGTSAB and the gifted education community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <p className="text-sm text-muted-foreground">By {post.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
