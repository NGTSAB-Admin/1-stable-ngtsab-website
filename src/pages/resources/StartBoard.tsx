import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, FileText, Download, ExternalLink, MessageCircle, Video, Mail } from "lucide-react";

const boardTypes = [
  { level: "School Board", description: "Advocate within your school for improved GT programs and student voice." },
  { level: "District Board", description: "Work with multiple schools to influence district-wide GT policies." },
  { level: "State Board", description: "Coordinate advocacy efforts across your state and engage with legislators." },
];

export default function StartBoard() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Starting a GT Board</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Everything you need to create a student advocacy board in your school, district, or state.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Start a Board?</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Student advocacy boards give gifted students a formal voice in education policy. They create a direct channel between students and decision-makers, ensuring that the people most affected by gifted education policies have a say in shaping them.
            </p>
            <p className="text-muted-foreground text-lg">
              Boards that have joined our network have successfully advocated for curriculum changes, increased funding, automatic enrollment policies, and more.
            </p>
          </div>

          {/* GT Board Startup Handbook Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">GT Board Startup Handbook</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Our comprehensive guide covers everything you need to start a successful GT advocacy board at your school. From gathering interest and finding a faculty sponsor to structuring your organization and planning your first advocacy actions—it's all here.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <a 
                  href="https://drive.google.com/file/d/1s72qABghUgF15Hz3RRH0a__0JJ-oRezE/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Handbook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://drive.google.com/file/d/1s72qABghUgF15Hz3RRH0a__0JJ-oRezE/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Open in Google Drive
                </a>
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-4 overflow-hidden">
              <iframe 
                src="https://drive.google.com/file/d/1s72qABghUgF15Hz3RRH0a__0JJ-oRezE/preview" 
                width="100%" 
                height="600"
                className="rounded border-0"
                title="GT Board Startup Handbook"
                allow="autoplay"
              />
            </div>
          </div>

          {/* Contact Us for Help - Emphasized Section */}
          <Card className="shadow-elegant bg-primary text-primary-foreground mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h2 className="font-serif text-3xl font-bold mb-4">We're Here to Help You Every Step of the Way</h2>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  Starting a board doesn't have to be overwhelming. NGTSAB provides personalized support to help you get started. We can schedule virtual meetings with you and your team, answer questions, provide guidance, and connect you with experienced student leaders who've done this before.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg">
                    <Video className="h-8 w-8 mb-2" />
                    <span className="font-semibold">Virtual Meetings</span>
                    <span className="text-sm text-primary-foreground/80">One-on-one guidance</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg">
                    <Mail className="h-8 w-8 mb-2" />
                    <span className="font-semibold">Email Support</span>
                    <span className="text-sm text-primary-foreground/80">connect@ngtsab.org</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg">
                    <CheckCircle className="h-8 w-8 mb-2" />
                    <span className="font-semibold">Mentorship</span>
                    <span className="text-sm text-primary-foreground/80">Learn from peers</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="mailto:connect@ngtsab.org">
                      Email Us Directly
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Types of Boards</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {boardTypes.map((type) => (
              <Card key={type.level} className="shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-3 text-primary">{type.level}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card bg-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Join the NGTSAB Network
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    "Access to resources, templates, and best practices",
                    "Connection with other student advocacy boards nationwide",
                    "Mentorship from experienced student leaders",
                    "Invitation to national conferences and events",
                    "Recognition and support from a national organization",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild size="lg">
                    <Link to="/apply">
                      Register Your Board <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
