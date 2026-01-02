import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Scale, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-sans">
              Empowering Student Voices in Gifted Education
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              The National Gifted and Talented Student Advocacy Board unites students across America to improve gifted education practices and champion automatic enrollment legislation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/apply">
                  Join Our Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building a nationwide movement to ensure every gifted student has access to appropriate education and a voice in shaping their future.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Student Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Amplifying student voices to influence gifted education policy at every level of government.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Automatic Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Promoting legislation that ensures all qualifying students are automatically enrolled in gifted programs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Creating Boards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Establishing student advocacy boards at state, district, and school levels across the country.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Better Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Improving gifted education through research-backed recommendations and student perspectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Resources for Change</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the tools and guidance you need to make a real impact in gifted education.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>For Student Advocates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Access training materials, advocacy guides, and connect with a nationwide network of student leaders passionate about gifted education.
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link to="/resources/students">
                    Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Automatic Enrollment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Learn about automatic enrollment legislation, why it matters for equity, and how you can advocate for it in your state.
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link to="/legislation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Start a GT Board</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Get step-by-step guidance on starting a student advocacy board at your school, district, or state level.
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link to="/resources/start-board">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you're a student, teacher, or advocate, there's a place for you in our movement. Join us in transforming gifted education across America.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/apply">Apply to Join</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Link to="/resources/start-board">Start a GT Board</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Latest Updates</h2>
            <Link to="/blog" className="text-primary hover:underline flex items-center">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              id: "colorado-update-dec-2025",
              title: "A December 2025 Update on Colorado's Automatic Enrollment",
              date: "December 29, 2025",
              excerpt: "Colorado is currently developing a new statewide automatic enrollment bill, led by Representative Jacque Phillips and created in collaboration with students."
            }, {
              id: "nagc26-proposals-open",
              title: "NAGC26 Proposals are OPEN",
              date: "December 15, 2025",
              excerpt: "Proposal submissions are now open for NAGC26, the annual national conference hosted by the National Association for Gifted Children."
            }, {
              id: "nagc-student-focus-group",
              title: "NAGC's New Student Focus Group: A Milestone for Student Voice",
              date: "December 8, 2025",
              excerpt: "The National Association for Gifted Children (NAGC) has announced an exciting initiative: a new student focus group designed to better understand the lived experiences of gifted students."
            }].map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <CardDescription>{post.date}</CardDescription>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-primary hover:underline text-sm mt-2 inline-block">
                    Read more <ArrowRight className="inline h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;