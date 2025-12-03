import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export default function TheMission() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Driving systemic change in gifted education through student advocacy, legislation, and community building.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">Mission</h2>
              <p className="text-muted-foreground">
                To amplify student voices in shaping gifted education policy and practice, ensuring equitable access to appropriate educational opportunities for all gifted learners.
              </p>
            </Card>
            <Card className="shadow-card p-8 text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">Vision</h2>
              <p className="text-muted-foreground">
                A future where every gifted student in America has access to challenging, supportive education that nurtures their potential, regardless of their background or circumstances.
              </p>
            </Card>
            <Card className="shadow-card p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold mb-4">Purpose</h2>
              <p className="text-muted-foreground">
                To build a nationwide network of student advocates who can effect meaningful change in how gifted education is delivered and supported across America.
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Strategic Priorities</h2>
            
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-primary">1. Automatic Enrollment Legislation</h3>
                  <p className="text-muted-foreground">
                    We're leading the charge for automatic enrollment policies that ensure all students who qualify for gifted programs are enrolled—not just those whose families know how to navigate the system. This is a matter of equity and access.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-primary">2. Student Board Network</h3>
                  <p className="text-muted-foreground">
                    We're building a network of student advocacy boards at every level—school, district, state, and national. These boards give students a formal voice in education policy and create pathways for meaningful participation.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-primary">3. Best Practices Advocacy</h3>
                  <p className="text-muted-foreground">
                    We work with researchers, educators, and administrators to promote evidence-based practices in gifted education, ensuring that programs are designed to meet students' actual needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-primary">4. Resource Development</h3>
                  <p className="text-muted-foreground">
                    We create toolkits, guides, and resources that empower students, teachers, and administrators to improve gifted education in their communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
