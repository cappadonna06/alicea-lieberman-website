import { cvFileName } from '@/data/site-content';

export default function CVPage() {
  return (
    <section className="card">
      <h2>CV</h2>
      <p>
        <a href={`/${cvFileName}`} download>
          Download CV
        </a>
      </p>
      <div className="pdf-frame-wrap">
        <iframe title="Alicea Lieberman CV" src={`/${cvFileName}`} className="pdf-frame" />
      </div>
    </section>
  );
}
