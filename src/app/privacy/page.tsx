import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                As a trust-building and identity verification platform, we collect information you provide directly to us when you use Vett. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personal identification information (Name, email address).</li>
                <li>Social media handles and public profile data from platforms you choose to connect (e.g., Instagram, X, LinkedIn).</li>
                {/* <li>Verification documents and data you submit to establish your trust profile.</li> */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Verify your identity and build your "Vett" trust profile.</li>
                {/* <li>Maintain our public registry of verified identities (only if you opt-in).</li> */}
                <li>Enable you to share your verified credentials with others.</li>
                <li>Communicate with you about updates, security alerts, and support.</li>
                <li>Improve and optimize our verification algorithms and platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
              <p>
                Trust is at the core of what we do. We do not sell your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>With your consent:</strong> When you choose to share your profile or connect with others.</li>
                {/* <li><strong>Service Providers:</strong> We may work with trusted partners to perform identity verification or host our services.</li> */}
                <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of our users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies (such as Analytics and Speed Insights) to analyze traffic and understand how you interact with our website. This helps us improve your experience. You can control cookie settings in your browser at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data from Third-Party Platforms</h2>
              <p>
                To build your trust profile, we fetch specific data from social media platforms (like Instagram, X, or LinkedIn) when you choose to connect them. We only access the information you explicitly authorize during the connection process. This data is used solely for identity verification and profile enrichment as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Children's Privacy</h2>
              <p>
                Vett is intended for use by individuals who are at least 18 years old. We do not knowingly collect personal information from children under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Choices and Contact</h2>
              <p>
                You can manage your profile settings to control what information is public. If you have any questions about this Privacy Policy or wish to request the deletion of your data, please contact us at:
              </p>
              <p className="mt-4">
                <a href="/contact" className="text-primary hover:underline font-semibold">Contact Us Page</a>
              </p>
            </section>

            <section>
              <p className="text-sm text-foreground/60 italic">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
