import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L2.001 2.25H8.08l4.255 5.626 5.909-5.626Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1
        className="text-3xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
      >
        Contact
      </h1>
      <p className="text-sm mb-12" style={{ color: "#6B7280" }}>
        I welcome inquiries from students, researchers, and collaborators.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact details */}
        <div className="rounded-sm border p-8 space-y-7" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
          {/* Address */}
          <div>
            <p className="text-xs uppercase font-semibold mb-2" style={{ color: "#9CA3AF", letterSpacing: "0.1em" }}>
              Address
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: "#374151" }}>
              University of California, Los Angeles<br />
              Anderson School of Management<br />
              110 Westwood Plaza<br />
              Los Angeles, CA 90095 USA
            </address>
          </div>

          {/* Email */}
          <div>
            <p className="text-xs uppercase font-semibold mb-2" style={{ color: "#9CA3AF", letterSpacing: "0.1em" }}>
              Email
            </p>
            <Link
              href="mailto:alicea.lieberman@anderson.ucla.edu"
              className="link-blue text-sm"
            >
              alicea.lieberman@anderson.ucla.edu
            </Link>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase font-semibold mb-3" style={{ color: "#9CA3AF", letterSpacing: "0.1em" }}>
              Social
            </p>
            <div className="flex gap-5">
              <Link
                href="https://twitter.com/alieberman?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted flex items-center gap-2 text-sm"
              >
                <TwitterIcon size={16} />
                Twitter / X
              </Link>
              <Link
                href="https://www.linkedin.com/in/alicea-allie-lieberman-319a0b13/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted flex items-center gap-2 text-sm"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-sm border p-8 flex flex-col justify-between" style={{ borderColor: "#E5E7EB" }}>
          <div>
            <p className="text-xs uppercase font-semibold mb-4" style={{ color: "#9CA3AF", letterSpacing: "0.1em" }}>
              Department
            </p>
            <p
              className="text-base font-semibold mb-1"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
            >
              Marketing &amp; Behavioral Decision Making
            </p>
            <p className="text-sm mb-4" style={{ color: "#374151" }}>
              UCLA Anderson School of Management
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              My research examines the psychological mechanisms underlying behavioral initiation and persistence,
              with a focus on behaviors that improve health and well-being.
            </p>
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/research" className="btn-navy px-4 py-2 text-sm font-medium rounded-sm">
              View Research
            </Link>
            <Link href="/cv" className="btn-navy-outline px-4 py-2 text-sm font-medium rounded-sm">
              View CV
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />

      <div className="mt-8 text-right">
        <Link
          href="https://www.anderson.ucla.edu/faculty-and-research/marketing/faculty/alicea-lieberman"
          target="_blank"
          rel="noopener noreferrer"
          className="link-blue text-sm"
        >
          UCLA Anderson Faculty Profile
        </Link>
      </div>
    </div>
  );
}
