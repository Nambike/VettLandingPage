import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-foreground/60 italic mb-12">
            Last Updated: {lastUpdated}
          </p>

          <div className="prose prose-invert max-w-none space-y-12 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction and Acceptance</h2>
              <p>
                Welcome to Vett. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and Vett ("we", "us", or "our") regarding your use of our website, platform, and identity verification services (collectively, the "Services").
              </p>
              <p className="mt-4">
                By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility and Account Registration</h2>
              <p>
                <strong>2.1 Eligibility:</strong> You must be at least 18 years of age to use our Services. By using Vett, you represent and warrant that you possess the legal right and ability to enter into these Terms and to use the Services in accordance with these Terms.
              </p>
              <p className="mt-4">
                <strong>2.2 Account Creation:</strong> To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mt-4">
                <strong>2.3 Account Security:</strong> You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Vett will not be liable for any loss or damage arising from your failure to comply with this security obligation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of the Services</h2>
              <p>
                <strong>3.1 Limited License:</strong> Subject to your compliance with these Terms, we grant you a personal, non-exclusive, non-transferable, revocable, limited license to access and use the Services.
              </p>
              <p className="mt-4 font-semibold">3.2 Prohibited Conduct. You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the Services for any fraudulent or unlawful purpose.</li>
                <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with any person or entity.</li>
                <li>Interfere with or disrupt the operation of the Services or the servers or networks used to make the Services available.</li>
                <li>Transmit or otherwise make available in connection with the Services any virus, worm, Trojan horse, Easter egg, time bomb, spyware, or other computer code that is harmful or invasive.</li>
                <li>Restrict or inhibit any other person from using the Services.</li>
                <li>Reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare, distribute or otherwise exploit any portion of the Services without our express prior written consent.</li>
                <li>Reverse engineer, decompile or disassemble any portion of the Services, except where such restriction is expressly prohibited by applicable law.</li>
                <li>Remove any copyright, trademark or other proprietary rights notice from the Services.</li>
                <li>Frame or mirror any portion of the Services, or otherwise incorporate any portion of the Services into any product or service.</li>
                <li>Systematically download and store Services content.</li>
                <li>Use any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, "scrape," "data mine" or otherwise gather Services content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Identity Verification and Public Registry</h2>
              <p>
                <strong>4.1 Verification Process:</strong> Vett provides an identity verification service. By submitting your information and connecting third-party accounts, you authorize Vett to use this data to verify your identity and generate a trust profile.
              </p>
              <p className="mt-4">
                <strong>4.2 Accuracy Disclaimer:</strong> While we use advanced algorithms and data sources, Vett does not guarantee the absolute accuracy, completeness, or reliability of any verification. A "Verified" status or "Trust Score" is an assessment and should not be considered a definitive guarantee of an individual's identity or character.
              </p>
              <p className="mt-4">
                <strong>4.3 Public Registry:</strong> If you opt-in to our public registry, certain aspects of your verified profile may be visible to others. You are responsible for managing your privacy settings and understanding what information you are making public.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p>
                <strong>5.1 Our Property:</strong> Vett and its licensors own the Services, including all software, text, graphics, logos, images, and the "look and feel" of the platform. These are protected by copyright, trademark, and other laws.
              </p>
              <p className="mt-4">
                <strong>5.2 Your Content:</strong> You retain ownership of any content you submit to the Services. However, by submitting content, you grant Vett a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content in connection with providing and promoting the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
              <p>
                Our Services may integrate with or contain links to third-party services (e.g., social media platforms). Use of these services is subject to the terms and privacy policies of those third parties. We are not responsible for the content, accuracy, or practices of any third-party service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, and with or without notice. Reasons for termination may include, but are not limited to, a breach of these Terms, request by law enforcement, or technical issues. Upon termination, your right to use the Services ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Vett, its officers, directors, employees, and agents from and against all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your infringement of any third-party right.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimers and Limitation of Liability</h2>
              <p>
                <strong>9.1 No Warranty:</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY LAW, VETT DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                <strong>9.2 Limitation of Liability:</strong> IN NO EVENT SHALL VETT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR USE OR INABILITY TO USE THE SERVICES; (II) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS; OR (III) ANY CONTENT OBTAINED FROM THE SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by the laws of the jurisdiction in which Vett is headquartered, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration, except that either party may assert claims in small claims court if the claims qualify.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. General Provisions</h2>
              <p>
                <strong>11.1 Entire Agreement:</strong> These Terms and our Privacy Policy constitute the entire agreement between you and Vett regarding the Services.
              </p>
              <p className="mt-4">
                <strong>11.2 Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>
              <p className="mt-4">
                <strong>11.3 No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us via our contact page:
              </p>
              <p className="mt-4">
                <a href="/contact" className="text-primary hover:underline font-semibold">Contact Us Page</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
