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
    link: "https://drive.google.com/file/d/1s72qABghUgF15Hz3RRH0a__0JJ-oRezE/view", 
    type: "download",
    icon: FileText
  },
  { 
    title: "Why Gifted Education Matters", 
    description: "Presentation on the importance of gifted education programs", 
    link: "https://docs.google.com/presentation/d/1Dd4h_2-fttBw1GEPLqCSuCLCPkix1Mpc/edit?usp=sharing", 
    type: "external",
    icon: Presentation
  },
  { 
    title: "GT Programs Across the Country", 
    description: "Comparison of gifted and talented programs across different states", 
    link: "https://drive.google.com/file/d/1jErcs4QmzfTJgZziQOgQYjT6dUlA565-/view", 
    type: "download",
    icon: FileText
  },
  { 
    title: "Interest Based Learning", 
    description: "Strategies for implementing interest-based learning in the classroom", 
    link: "https://docs.google.com/presentation/d/1nct_dEPk5U2Nj8egOIMAL8Eo0OEEYp9y/edit?usp=sharing", 
    type: "external",
    icon: Presentation
  },
  { 
    title: "Fostering Creativity in GT Students", 
    description: "Guide to nurturing creativity in gifted and talented students", 
    link: "https://drive.google.com/file/d/1hcBEXrUNG7-YHmw3PNlCZeboeFqBHd87/view", 
    type: "download",
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
                      <Link to={doc.link}>
                        View Document <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" size="sm">
                      <a href={doc.link} target="_blank" rel="noopener noreferrer">
                        {doc.type === "download" ? (
                          <>
                            <Download className="mr-2 h-4 w-4" /> Download
                          </>
                        ) : (
                          <>
                            <ExternalLink className="mr-2 h-4 w-4" /> Open
                          </>
                        )}
                      </a>
                    </Button>
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
