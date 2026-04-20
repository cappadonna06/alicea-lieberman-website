import Image from 'next/image';
import { homeContent } from '@/data/site-content';

export default function HomePage() {
  return (
    <section className="card">
      <div className="home-grid">
        <div>
          <h2>{homeContent.name}</h2>
          <p>{homeContent.bio}</p>
        </div>
        <div className="portrait-wrap">
          <Image
            src="/Lieberman_2020_edited.png"
            alt="Alicea Lieberman"
            width={420}
            height={530}
            priority
            className="portrait"
          />
        </div>
      </div>
    </section>
  );
}
