import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden rounded-sm shadow-md" style={{ width: 220, height: 280 }}>
            <Image
              src="/Lieberman_2020_edited.png"
              alt="Alicea Lieberman"
              width={220}
              height={280}
              priority
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 min-w-0">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "2rem",
              fontWeight: 600,
              color: "#003B5C",
            }}
          >
            Alicea (Allie) Lieberman
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: "#374151" }}
          >
            I am an Assistant Professor of Marketing and Behavioral Decision
            Making at The UCLA Anderson School of Management. My research
            program examines the psychological mechanisms underlying behavioral
            initiation and persistence, with an emphasis on behaviors that
            improve health and well-being. I am passionate about
            interdisciplinary approaches and committed to harnessing social
            and behavioral research to impact policy and improve societal
            outcomes.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { href: "/research", label: "Research" },
              { href: "/publications", label: "Publications" },
              { href: "/cv", label: "CV" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="btn-navy-outline px-5 py-2 text-sm font-medium rounded-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t" style={{ borderColor: "#E5E7EB" }} />

      {/* Affiliations strip */}
      <div className="mt-10 text-center">
        <p
          className="text-sm font-medium"
          style={{ color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.7rem" }}
        >
          UCLA Anderson School of Management &nbsp;·&nbsp; Marketing &amp; Behavioral Decision Making
        </p>
      </div>
    </div>
  );
}
