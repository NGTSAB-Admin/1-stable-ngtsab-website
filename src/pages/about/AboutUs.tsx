import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About NGTSAB</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            The National Gifted and Talented Student Advocacy Board is a student-run organization dedicated to improving gifted education across America.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded by gifted students who recognized the need for a unified voice in education policy, NGTSAB emerged from a simple belief: students should have a seat at the table when decisions about their education are made.
            </p>
            <p className="text-muted-foreground mb-6">
              What started as a small group of passionate advocates has grown into a national movement, connecting students from all 50 states who share a common goal: ensuring every gifted student has access to appropriate educational opportunities.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Policy Advocacy</h3>
                  <p className="text-muted-foreground text-sm">
                    We work with legislators at federal, state, and local levels to promote policies that support gifted education and automatic enrollment.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Board Development</h3>
                  <p className="text-muted-foreground text-sm">
                    We help students establish GT advocacy boards in their own schools, districts, and states.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Resource Creation</h3>
                  <p className="text-muted-foreground text-sm">
                    We develop guides, toolkits, and resources for students, teachers, and administrators.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Community Building</h3>
                  <p className="text-muted-foreground text-sm">
                    We connect students across the country through events, conferences, and online platforms.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">Our Values</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li><strong className="text-foreground">Student Leadership:</strong> We believe students should lead the conversation about their own education.</li>
              <li><strong className="text-foreground">Equity:</strong> Every gifted student deserves access to appropriate education, regardless of background.</li>
              <li><strong className="text-foreground">Collaboration:</strong> We work together with educators, parents, and policymakers to create lasting change.</li>
              <li><strong className="text-foreground">Excellence:</strong> We strive for the highest standards in everything we do.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
