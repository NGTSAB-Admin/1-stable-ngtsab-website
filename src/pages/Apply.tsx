import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Connect with student advocates nationwide",
  "Access exclusive resources and training",
  "Participate in national advocacy campaigns",
  "Develop leadership and communication skills",
  "Make a real impact on gifted education",
];

export default function Apply() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in NGTSAB. We'll be in touch soon.",
    });
  };

  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Apply to Join NGTSAB</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Become part of our national movement to improve gifted education.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Join?</h2>
              <p className="text-muted-foreground mb-6">
                As a member of NGTSAB, you'll join a community of passionate student advocates working together to transform gifted education across America.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Card className="shadow-card bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Who Can Apply?</h3>
                  <p className="text-sm text-muted-foreground">
                    We welcome applications from middle school, high school, and college students who are passionate about improving gifted education. No prior advocacy experience is required—just enthusiasm and commitment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              {submitted ? (
                <Card className="shadow-elegant">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">Application Received!</h3>
                    <p className="text-muted-foreground">
                      Thank you for applying to NGTSAB. Our team will review your application and get back to you within 1-2 weeks.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Application Form</CardTitle>
                    <CardDescription>Fill out the form below to apply for membership.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade Level</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="middle">Middle School (6-8)</SelectItem>
                            <SelectItem value="high">High School (9-12)</SelectItem>
                            <SelectItem value="college">College/University</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="interest">Why do you want to join NGTSAB?</Label>
                        <Textarea id="interest" rows={4} required />
                      </div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
