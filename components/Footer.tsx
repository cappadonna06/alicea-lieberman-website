import Link from "next/link";

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L2.001 2.25H8.08l4.255 5.626 5.909-5.626Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "#6B7280" }}>
          © {new Date().getFullYear()} Alicea Lieberman. UCLA Anderson School of Management.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com/alieberman?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="link-muted"
          >
            <TwitterIcon size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alicea-allie-lieberman-319a0b13/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="link-muted"
          >
            <LinkedInIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
