import { publications } from '@/data/site-content';

function extractPaperTitle(citation: string) {
  const quoteMatch = citation.match(/["“](.+?)["”]/);
  return quoteMatch?.[1] ?? 'Paper Title';
}

function PublicationList({ items }: { items: { citation: string; journal: string; link: string }[] }) {
  return (
    <ul className="pub-list">
      {items.map((item, idx) => (
        <li key={`${item.link}-${idx}`}>
          <strong>Alicea Lieberman</strong>
          <span> {item.citation}</span>{' '}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {extractPaperTitle(item.citation)}
          </a>
          {item.journal ? (
            <>
              {' '}
              <em>{item.journal}</em>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function PublicationsPage() {
  return (
    <section className="card">
      <h2>Selected Publications</h2>
      <h3>JOURNAL PUBLICATIONS</h3>
      <PublicationList items={publications.journal} />
      <h3>ADDITIONAL PUBLICATIONS AND BOOK CHAPTERS</h3>
      <PublicationList items={publications.additional} />
    </section>
  );
}
