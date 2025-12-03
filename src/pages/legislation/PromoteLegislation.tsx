import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users, FileText, Megaphone, Mail, Building } from "lucide-react";

const actions = [
  {
    icon: MessageSquare,
    title: "Contact Your Legislators",
    description: "Reach out to your state representatives and senators. Share your story and ask them to support automatic enrollment legislation.",
    tips: ["Find your representatives online", "Personalize your message", "Follow up with phone calls"],
  },
  {
    icon: Users,
    title: "Build a Coalition",
    description: "Connect with other students, parents, teachers, and community members who support automatic enrollment.",
    tips: ["Start a petition", "Hold informational meetings", "Partner with local organizations"],
  },
  {
    icon: FileText,
    title: "Testify at Hearings",
    description: "When legislation is being considered, student testimony is powerful. Share your perspective on why this matters.",
    tips: ["Prepare talking points", "Practice your testimony", "Bring supporters to the hearing"],
  },
  {
    icon: Megaphone,
    title: "Use Social Media",
    description: "Raise awareness about automatic enrollment and build public support through social media campaigns.",
    tips: ["Share facts and statistics", "Tell personal stories", "Tag your legislators"],
  },
  {
    icon: Mail,
    title: "Write Op-Eds",
    description: "Submit opinion pieces to local newspapers explaining why automatic enrollment matters for students in your community.",
    tips: ["Focus on local impact", "Include personal experience", "Keep it concise"],
  },
  {
    icon: Building,
    title: "Work with School Boards",
    description: "Even without state legislation, some districts can implement automatic enrollment policies locally.",
    tips: ["Attend board meetings", "Request agenda time", "Present research"],
  },
];

export default function PromoteLegislation() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">How to Promote Legislation</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            A practical guide to advocating for automatic enrollment in your state.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Making Your Voice Heard</h2>
            <p className="text-lg text-muted-foreground">
              Students are uniquely positioned to advocate for automatic enrollment—you understand firsthand how gifted programs impact lives. Here's how you can take action to bring automatic enrollment to your state.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {actions.map((action) => (
              <Card key={action.title} className="shadow-card">
                <CardHeader>
                  <action.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {action.tips.map((tip) => (
                      <li key={tip} className="text-sm text-muted-foreground flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-elegant bg-secondary">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Need Support?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                NGTSAB can help connect you with resources, model legislation, and experienced advocates in your state. We're here to support your advocacy efforts every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/apply">Join NGTSAB</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/resources/documents">Download Resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
