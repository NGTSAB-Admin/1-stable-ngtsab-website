import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const documents = [
  { title: "NGTSAB Bylaws", description: "Official organizational bylaws and governance documents", link: "/resources/documents/bylaws", type: "internal" },
  { title: "Annual Report 2024", description: "Our yearly impact summary and financial overview", link: "#", type: "download" },
  { title: "Strategic Plan 2024-2027", description: "Long-term goals and initiatives for the organization", link: "#", type: "download" },
  { title: "Automatic Enrollment Model Bill", description: "Template legislation for state advocacy efforts", link: "#", type: "download" },
  { title: "GT Board Starter Kit", description: "Complete guide to starting a student advocacy board", link: "#", type: "download" },
  { title: "Position Statements", description: "Official NGTSAB positions on key education issues", link: "#", type: "download" },
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
                  <FileText className="h-8 w-8 text-primary mb-2" />
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
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
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
