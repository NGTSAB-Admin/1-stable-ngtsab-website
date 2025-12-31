import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Presentation, FileText, Download, ExternalLink, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Resources for Educators</h2>
            <p className="text-muted-foreground text-lg">
              We've compiled these resources to help educators advocate for and support gifted students. 
              From understanding why gifted education matters to practical strategies for fostering creativity, 
              these materials are designed to empower you in your classroom.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Why Gifted Education Matters */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Presentation className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Why Gifted Education Matters</h3>
                    <p className="text-muted-foreground">
                      A comprehensive presentation explaining the importance of gifted education, 
                      the unique needs of gifted learners, and why dedicated programs are essential 
                      for their academic and social-emotional development.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button asChild>
                    <a 
                      href="https://docs.google.com/presentation/d/1Dd4h_2-fttBw1GEPLqCSuCLCPkix1Mpc/edit?usp=sharing&ouid=112534150296906157920&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Presentation
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden bg-muted/30">
                  <iframe 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQKRKIpseX1xwdvXUjVxfZ6IapaFmapeXkLpA07p1GenX-VRIrtNs4CPhk0YdYkaQ/embed?start=false&loop=false&delayms=10000" 
                    width="100%" 
                    height="450"
                    className="w-full"
                    title="Why Gifted Education Matters Presentation"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* GT Programs Across the Country */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">GT Programs Across the Country Comparison</h3>
                    <p className="text-muted-foreground">
                      A detailed comparison of gifted and talented programs across different states and districts, 
                      highlighting various approaches, requirements, and best practices in GT education nationwide.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button asChild>
                    <a 
                      href="https://drive.google.com/file/d/1jErcs4QmzfTJgZziQOgQYjT6dUlA565-/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Document
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden bg-muted/30">
                  <iframe 
                    src="https://drive.google.com/file/d/1jErcs4QmzfTJgZziQOgQYjT6dUlA565-/preview" 
                    width="100%" 
                    height="500"
                    className="w-full"
                    title="GT Programs Comparison Document"
                    allow="autoplay"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Interest Based Learning */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Presentation className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Interest Based Learning</h3>
                    <p className="text-muted-foreground">
                      Explore strategies for implementing interest-based learning in your classroom. 
                      This presentation covers how to tap into students' passions and curiosities 
                      to drive deeper engagement and meaningful learning experiences.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button asChild>
                    <a 
                      href="https://docs.google.com/presentation/d/1nct_dEPk5U2Nj8egOIMAL8Eo0OEEYp9y/edit?usp=sharing&ouid=112534150296906157920&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Presentation
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden bg-muted/30">
                  <iframe 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTpSeSeV9JZ_Metdoa7Ce2yl0erdHt6ApenUTf3-ZyRSJami0b_V4sljuqgX6pTKA/embed?start=false&loop=false&delayms=10000" 
                    width="100%" 
                    height="450"
                    className="w-full"
                    title="Interest Based Learning Presentation"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* Fostering Creativity */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Fostering Creativity in GT Students</h3>
                    <p className="text-muted-foreground">
                      A guide to nurturing and developing creativity in gifted and talented students. 
                      Learn practical techniques for creating an environment where creative thinking 
                      flourishes and students feel empowered to innovate.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Button asChild>
                    <a 
                      href="https://drive.google.com/file/d/1hcBEXrUNG7-YHmw3PNlCZeboeFqBHd87/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Document
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg overflow-hidden bg-muted/30">
                  <iframe 
                    src="https://drive.google.com/file/d/1hcBEXrUNG7-YHmw3PNlCZeboeFqBHd87/preview" 
                    width="100%" 
                    height="500"
                    className="w-full"
                    title="Fostering Creativity Document"
                    allow="autoplay"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor a GT Board Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <Card className="shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold mb-4">Sponsor a Student GT Board</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-lg">
                Become a faculty sponsor for a student advocacy board at your school. We provide training, 
                resources, and ongoing support to help you guide students in making their voices heard. 
                A GT board gives students a platform to advocate for better gifted education in their school 
                and community.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Interested in sponsoring a board or learning more? We'd love to connect with you and discuss 
                how we can support you in this rewarding endeavor.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us to Get Started
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/resources/start-board">
                    Learn About Starting a Board
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Request More Resources Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">Need More Resources?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're continuously developing new materials for educators. If you have specific needs or 
              would like to request additional resources, please reach out to us. We're here to support 
              you in your mission to serve gifted students.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild>
                <a href="mailto:connect@ngtsab.org">
                  <Mail className="mr-2 h-4 w-4" />
                  connect@ngtsab.org
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Fill Out Contact Form
                </Link>
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden bg-muted/30 max-w-3xl mx-auto">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdpvdhbzgQAMm_8qHq94i1WPF-Oqz6vvUYCqyco_3mFJXoxoQ/viewform?embedded=true" 
              width="100%" 
              height="600"
              className="w-full"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
