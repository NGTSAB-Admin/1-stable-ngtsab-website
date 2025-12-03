import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Bylaws() {
  return (
    <Layout>
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Bylaws</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Official bylaws governing the National Gifted and Talented Student Advocacy Board.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="shadow-card">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-bold mb-4">Article I: Name and Purpose</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Section 1.</strong> The name of this organization shall be the National Gifted and Talented Student Advocacy Board (NGTSAB).
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Section 2.</strong> The purpose of NGTSAB shall be to advocate for improved gifted education practices, promote automatic enrollment legislation, and support the creation of student advocacy boards at all educational levels.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">Article II: Membership</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Section 1.</strong> Membership is open to all students currently enrolled in middle school, high school, or higher education who share the organization's mission.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Section 2.</strong> Members in good standing are entitled to vote in elections, participate in committees, and access member resources.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">Article III: Officers</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Section 1.</strong> The Executive Board shall consist of President, Vice President, Secretary, and Treasurer.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Section 2.</strong> Officers shall serve one-year terms and may be re-elected for up to two consecutive terms.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Section 3.</strong> Elections shall be held annually during the spring semester.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">Article IV: Meetings</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Section 1.</strong> Regular meetings shall be held monthly during the academic year.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Section 2.</strong> An annual conference shall be held each year to bring together members from across the nation.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">Article V: Amendments</h2>
              <p className="text-muted-foreground">
                These bylaws may be amended by a two-thirds vote of the membership, provided that the proposed amendment has been submitted in writing at least 30 days prior to the vote.
              </p>

              <p className="text-sm text-muted-foreground mt-8 italic">
                Last amended: January 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
