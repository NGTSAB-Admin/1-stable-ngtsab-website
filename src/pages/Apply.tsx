import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ExternalLink, Users } from "lucide-react";

const benefits = [
  "Connect with student advocates nationwide",
  "Access exclusive resources and training",
  "Participate in national advocacy campaigns",
  "Develop leadership and communication skills",
  "Make a real impact on gifted education",
];

export default function Apply() {
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

              <Card className="shadow-card bg-accent/50 border-accent mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Now Recruiting State Representatives!</h3>
                      <p className="text-sm text-muted-foreground">
                        We are currently looking for passionate students to serve as State Representatives. If you're interested in advocating for gifted education in your state, apply today!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Application Form</h3>
                  <div className="w-full overflow-hidden rounded-lg">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfRztlgVtpR0k1SLaChapspfn78BzVAgrSuXlCwdrG1JlbVPA/viewform?embedded=true" 
                      width="100%" 
                      height="3097" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="border-0"
                      title="NGTSAB Application Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Having trouble with the embedded form?
                    </p>
                    <a 
                      href="https://forms.gle/9iEzMVjCFdYdHSeg7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      Open form in a new tab <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
