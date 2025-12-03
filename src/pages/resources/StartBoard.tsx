import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Gather Interest",
    description: "Find 3-5 other students who are passionate about gifted education and want to make a difference.",
  },
  {
    number: "02",
    title: "Find a Sponsor",
    description: "Identify a teacher or administrator willing to serve as your faculty advisor and supporter.",
  },
  {
    number: "03",
    title: "Define Your Mission",
    description: "Determine what issues your board will focus on—automatic enrollment, program quality, equity, etc.",
  },
  {
    number: "04",
    title: "Create Your Structure",
    description: "Establish officer positions, meeting schedules, and communication channels.",
  },
  {
    number: "05",
    title: "Connect with NGTSAB",
    description: "Register your board with us to access resources, mentorship, and join our national network.",
  },
  {
    number: "06",
    title: "Take Action",
    description: "Start advocating! Meet with administrators, attend school board meetings, and make your voices heard.",
  },
];

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
            A step-by-step guide to creating a student advocacy board in your school, district, or state.
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

          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">How to Get Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {steps.map((step) => (
              <Card key={step.number} className="shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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

          <Card className="shadow-elegant bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-serif text-2xl font-bold mb-4">What You'll Get From NGTSAB</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Starter kit with templates, bylaws, and guides",
                    "Mentorship from experienced student leaders",
                    "Access to our resource library",
                    "Connection to our national network",
                    "Support from our staff and advisors",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/apply">
                    Register Your Board <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
