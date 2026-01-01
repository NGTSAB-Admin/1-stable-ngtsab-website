import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "colorado-update-dec-2025",
    title: "A December 2025 Update on Colorado's Automatic Enrollment",
    excerpt: "Colorado is currently developing a new statewide automatic enrollment bill, led by Representative Jacque Phillips and created in collaboration with students.",
    date: "December 29, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
  },
  {
    id: "nagc26-proposals-open",
    title: "NAGC26 Proposals are OPEN",
    excerpt: "Proposal submissions are now open for NAGC26, the annual national conference hosted by the National Association for Gifted Children.",
    date: "December 15, 2025",
    category: "Events",
    author: "Caleb Olson",
  },
  {
    id: "nagc-student-focus-group",
    title: "NAGC's New Student Focus Group: A Milestone for Student Voice",
    excerpt: "The National Association for Gifted Children (NAGC) has announced an exciting initiative: a new student focus group designed to better understand the lived experiences of gifted students.",
    date: "December 8, 2025",
    category: "Events",
    author: "Caleb Olson",
  },
  {
    id: "ngtsab-nagc25",
    title: "First Student Presenters in NAGC's 70-Year History: NGTSAB at NAGC25",
    excerpt: "For the first time in the conference's 70-year history, students were featured as concurrent session presenters at NAGC25.",
    date: "November 15, 2025",
    category: "Success Stories",
    author: "Caleb Olson",
  },
  {
    id: "students-present-cagt",
    title: "Students Present at CAGT",
    excerpt: "NGTSAB student leaders presented at the Colorado Association for the Gifted and Talented Conference with their session on the Procrastination Paradox.",
    date: "October 21, 2025",
    category: "Success Stories",
    author: "Caleb Olson",
  },
  {
    id: "recruiting-state-reps",
    title: "We're Recruiting: Become an NGTSAB State Representative",
    excerpt: "NGTSAB is officially recruiting new state representatives from across the country to ensure gifted students from every state have a voice.",
    date: "October 8, 2025",
    category: "GT Boards",
    author: "Abigail Riead",
  },
  {
    id: "how-to-testify",
    title: "How to Testify for Legislation: A Guide for Students",
    excerpt: "A step-by-step guide covering written testimony, contacting legislators, and school board outreach for student advocates.",
    date: "September 2, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
  },
  {
    id: "sponsoring-gt-board-educators",
    title: "Sponsoring a GT Board: A Guide for Educators",
    excerpt: "Advice for teachers on being supportive but hands-off sponsors for GT Student Boards.",
    date: "August 7, 2025",
    category: "Resources",
    author: "Abigail Riead",
  },
  {
    id: "gt-board-handbook-guide",
    title: "How to Use the GT Board Startup Handbook: A Guide for Students",
    excerpt: "A guide to interpreting and using the GT Board Startup Handbook to create your own student advocacy board.",
    date: "August 6, 2025",
    category: "Resources",
    author: "Abigail Riead",
  },
  {
    id: "auto-enrollment-review",
    title: "A Review of Automatic Enrollment Across the Nation",
    excerpt: "Case studies from North Carolina, Texas, and Washington showing positive outcomes from automatic enrollment policies.",
    date: "July 18, 2025",
    category: "Legislation",
    author: "Ann Mary Thomas",
  },
  {
    id: "importance-auto-enrollment",
    title: "The Importance of Automatic Enrollment",
    excerpt: "Explaining opt-out placement as a low-cost, high-impact equity tool for gifted education.",
    date: "June 4, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
  },
  {
    id: "javits-testimony",
    title: "NGTSAB Javits Testimony",
    excerpt: "NGTSAB submitted written testimony to the U.S. Senate in defense of the Jacob K. Javits Gifted and Talented Students Education Program.",
    date: "February 12, 2025",
    category: "Legislation",
    author: "Carter FitzGerald",
  },
  {
    id: "about-ngtsab",
    title: "About the National Gifted and Talented Student Advocacy Board (NGTSAB)",
    excerpt: "The history of NGTSAB's founding and its focus on systemic inequities in gifted education.",
    date: "December 19, 2024",
    category: "GT Boards",
    author: "Carter FitzGerald",
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
