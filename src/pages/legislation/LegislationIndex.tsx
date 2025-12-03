import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle, Clock } from "lucide-react";

const keyPoints = [
  "Automatic enrollment ensures all qualifying students access gifted programs",
  "Currently, many students miss out due to lack of parent awareness or advocacy",
  "Opt-out systems are proven more equitable than opt-in systems",
  "Research shows automatic enrollment increases diversity in GT programs",
];

export default function LegislationIndex() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Automatic Enrollment</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Understanding the policy change that could transform gifted education access across America.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">What is Automatic Enrollment?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Automatic enrollment is a policy approach where students who meet the criteria for gifted programs are automatically enrolled, with parents having the option to opt out rather than opt in. This simple change addresses a fundamental equity issue: the current opt-in system favors families with the knowledge, time, and resources to navigate the enrollment process.
            </p>
            
            <Card className="shadow-card mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Key Points</h3>
                <ul className="space-y-3">
                  {keyPoints.map((point) => (
                    <li key={point} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Current Status by State</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Enacted</CardTitle>
                <CardDescription>States with automatic enrollment laws</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">5 States</p>
                <p className="text-sm text-muted-foreground mt-2">Leading the way in equitable GT access</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardHeader>
                <Clock className="h-8 w-8 text-accent mb-2" />
                <CardTitle>In Progress</CardTitle>
                <CardDescription>States with pending legislation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">12 States</p>
                <p className="text-sm text-muted-foreground mt-2">Active advocacy efforts underway</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-muted-foreground mb-2" />
                <CardTitle>Not Yet Started</CardTitle>
                <CardDescription>States needing advocacy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">33 States</p>
                <p className="text-sm text-muted-foreground mt-2">Opportunities for student advocates</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/legislation/why">
                Why Automatic Enrollment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/legislation/promote">How to Promote Legislation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
