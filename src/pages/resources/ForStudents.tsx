import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Users, BookOpen, Star, ArrowRight } from "lucide-react";

const opportunities = [
  {
    icon: Megaphone,
    title: "Advocacy Training",
    description: "Learn how to effectively advocate for gifted education in your school and community.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Develop skills in public speaking, organizing, and leading initiatives.",
  },
  {
    icon: BookOpen,
    title: "Research Opportunities",
    description: "Participate in student-led research on gifted education topics.",
  },
  {
    icon: Star,
    title: "Recognition Programs",
    description: "Get recognized for your advocacy efforts and contributions.",
  },
];

export default function ForStudents() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">For Students</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Your voice matters. Discover how you can make a difference in gifted education.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Your Voice, Your Impact</h2>
            <p className="text-muted-foreground text-lg">
              As a gifted student, you have unique insights into what works and what doesn't in gifted education. NGTSAB gives you the platform and tools to turn those insights into action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {opportunities.map((opp) => (
              <Card key={opp.title} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <opp.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{opp.title}</CardTitle>
                  <CardDescription>{opp.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join NGTSAB and connect with hundreds of other student advocates across the country. Together, we're changing the future of gifted education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/apply">
                    Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/resources/start-board">Start a Board at Your School</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
