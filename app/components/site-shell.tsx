import Link from 'next/link';
import { contact } from '@/data/site-content';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'CV', href: '/cv' },
  { label: 'Publications', href: '/publications' },
  { label: 'Research', href: '/research' },
  { label: 'Contact Me', href: '/contact-me' }
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrap">
      <header className="site-header">
        <div className="header-overlay">
          <h1>Alicea Lieberman, PhD, MPH</h1>
        </div>
      </header>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <main className="main-content">{children}</main>
      <footer className="site-footer">
        <a href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          Twitter
        </a>
        <span>•</span>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
