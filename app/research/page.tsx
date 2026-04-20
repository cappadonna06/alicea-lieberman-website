import Image from 'next/image';
import { researchItems } from '@/data/site-content';

export default function ResearchPage() {
  return (
    <section className="card">
      <h2>Selected Research</h2>
      <div className="research-list">
        {researchItems.map((item) => (
          <article key={item.heading} className="research-item">
            <h3>{item.heading}</h3>
            <p>{item.title}</p>
            <div className="research-image-wrap">
              <Image src={item.image} alt={item.heading} width={640} height={360} className="research-image" />
            </div>
            {item.lines.map((line) => (
              <p key={line} className="citation-line">
                {line}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
