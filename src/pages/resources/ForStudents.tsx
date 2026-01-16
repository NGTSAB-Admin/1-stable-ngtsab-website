import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, ArrowRight, Users, Clock, ExternalLink } from "lucide-react";

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

          {/* Recruitment Banner */}
          <Card className="shadow-elegant bg-primary text-primary-foreground mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Users className="h-12 w-12 flex-shrink-0" />
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-2">We're Recruiting Student Advocates!</h3>
                  <p className="text-primary-foreground/90">
                    NGTSAB is actively looking for passionate students to join our network. Whether you want to become a State Representative or start a board at your school, we want to hear from you!
                  </p>
                </div>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/apply">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GT Board Startup Handbook */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">GT Board Startup Handbook</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Our comprehensive guide to starting a new Gifted and Talented student advocacy board at your school. This handbook covers everything from initial planning and finding a faculty sponsor to structuring your board and taking your first advocacy actions. It's designed specifically for students who want to create meaningful change in their schools.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <a 
                  href="/pdf/gt-startup-handbook.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Preview Handbook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="/pdf/gt-startup-handbook.pdf" 
                  download
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-4 overflow-hidden">
              <iframe 
                src="/pdf/gt-startup-handbook.pdf" 
                width="100%" 
                height="600"
                className="rounded border-0"
                title="GT Board Startup Handbook"
              />
            </div>
          </div>

          {/* More Resources Coming Soon */}
          <Card className="bg-muted border-dashed mb-12">
            <CardContent className="p-8 text-center">
              <Clock className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">More Resources Coming Soon</h3>
              <p className="text-muted-foreground">
                We're actively developing additional resources for student advocates, including advocacy training materials, templates, and guides. Check back soon!
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-secondary rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join NGTSAB and connect with other student advocates across the country. Together, we're changing the future of gifted education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
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