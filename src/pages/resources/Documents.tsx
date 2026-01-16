import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const documents = [
  { 
    title: "NGTSAB Bylaws", 
    description: "Official organizational bylaws and governance documents", 
    link: "/resources/documents/bylaws", 
    type: "internal",
    icon: FileText
  },
  { 
    title: "GT Board Startup Handbook", 
    description: "Complete guide to starting a student advocacy board at your school", 
    previewLink: "/pdf/gt-startup-handbook.pdf",
    downloadLink: "/pdf/gt-startup-handbook.pdf",
    type: "pdf",
    icon: FileText
  },
  { 
    title: "Why Gifted Education Matters", 
    description: "Presentation on the importance of gifted education programs", 
    previewLink: "/pdf/why-gifted-education-matters.pptx",
    downloadLink: "/pdf/why-gifted-education-matters.pptx",
    type: "pptx",
    icon: Presentation
  },
  { 
    title: "GT Programs Across the Country", 
    description: "Comparison of gifted and talented programs across different states", 
    previewLink: "/pdf/national-gt-comparison.pdf",
    downloadLink: "/pdf/national-gt-comparison.pdf",
    type: "pdf",
    icon: FileText
  },
  { 
    title: "Interest Based Learning", 
    description: "Strategies for implementing interest-based learning in the classroom", 
    previewLink: "/pdf/interest-based-learning.pptx",
    downloadLink: "/pdf/interest-based-learning.pptx",
    type: "pptx",
    icon: Presentation
  },
  { 
    title: "Fostering Creativity in GT Students", 
    description: "Guide to nurturing creativity in gifted and talented students", 
    previewLink: "/pdf/fostering-creativity-in-gt-students.pdf",
    downloadLink: "/pdf/fostering-creativity-in-gt-students.pdf",
    type: "pdf",
    icon: FileText
  },
];

export default function Documents() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Documents</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Access our official documents, reports, and resources.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card key={doc.title} className="shadow-card hover:shadow-hover transition-shadow">
                <CardHeader>
                  <doc.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {doc.type === "internal" ? (
                    <Button asChild variant="outline" size="sm">
                      <Link to={doc.link!}>
                        View Document <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a href={doc.previewLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Preview
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={doc.downloadLink} download>
                          <Download className="mr-2 h-4 w-4" /> Download
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}