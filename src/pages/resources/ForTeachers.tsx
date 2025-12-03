import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, Download, GraduationCap, Heart } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Classroom Differentiation Guide",
    description: "Strategies for meeting the needs of gifted learners in mixed-ability classrooms.",
  },
  {
    icon: Users,
    title: "Student Voice Toolkit",
    description: "How to incorporate student feedback and leadership in your gifted program.",
  },
  {
    icon: Lightbulb,
    title: "Identification Best Practices",
    description: "Equitable approaches to identifying gifted students from all backgrounds.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Training opportunities and resources for educators working with gifted students.",
  },
];

export default function ForTeachers() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">For Teachers</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Resources and support for educators committed to serving gifted students.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Partner With Student Voices</h2>
            <p className="text-muted-foreground text-lg">
              Teachers play a critical role in supporting gifted students. We've developed these resources in collaboration with educators and students to help you create more engaging, equitable, and effective learning environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource) => (
              <Card key={resource.title} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <resource.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card bg-secondary">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Sponsor a Student Board</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Become a faculty sponsor for a student advocacy board at your school. We provide training, resources, and ongoing support to help you guide students in making their voices heard.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn About Sponsorship
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
