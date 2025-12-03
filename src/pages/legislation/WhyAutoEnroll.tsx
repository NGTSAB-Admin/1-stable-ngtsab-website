import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Equity and Access",
    description: "Under opt-in systems, students from underserved communities are significantly less likely to be enrolled in gifted programs, even when they qualify. Automatic enrollment removes barriers that disproportionately affect low-income families and families of color.",
  },
  {
    title: "Reduced Administrative Burden",
    description: "Schools spend considerable resources on outreach, recruitment, and paperwork for opt-in programs. Automatic enrollment streamlines this process, allowing resources to be directed toward actual program delivery.",
  },
  {
    title: "Better Outcomes",
    description: "Students who are enrolled in appropriate programs perform better academically and report higher engagement. Automatic enrollment ensures more students get the services they need.",
  },
  {
    title: "Research-Backed",
    description: "Studies consistently show that opt-out systems increase participation rates, especially among historically underrepresented groups, without decreasing program quality.",
  },
  {
    title: "Parent Choice Preserved",
    description: "Automatic enrollment doesn't force anyone into programs—parents can still opt out. It simply changes the default to better serve students.",
  },
  {
    title: "National Movement",
    description: "States across the country are recognizing the value of automatic enrollment. Joining this movement positions your state as a leader in educational equity.",
  },
];

export default function WhyAutoEnroll() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Automatic Enrollment</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            The case for changing how students access gifted education programs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">The Problem with Opt-In</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Currently, most gifted programs require parents to actively enroll their children. This seems reasonable until you consider who gets left out: students whose parents work multiple jobs, don't speak English, aren't familiar with the education system, or simply don't know the option exists.
            </p>
            <p className="text-lg text-muted-foreground">
              The result is that gifted programs often don't reflect the diversity of the student population. Students who could benefit from challenging coursework miss out—not because they don't qualify, but because the system wasn't designed to find them.
            </p>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Six Reasons to Support Automatic Enrollment</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason, i) => (
              <Card key={reason.title} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/legislation/promote">
                Learn How to Take Action <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
