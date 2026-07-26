<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Updating the CV

## Where the files live

| Path | Role |
| --- | --- |
| `docs/cv-inbox/` | Drop zone. Put the new CV PDF here under **any** filename. |
| `public/Lieberman_CV.pdf` | The served file. This name never changes — it is what `/cv` links to. |
| `docs/cv-archive/Lieberman_CV_YYYY-MM.pdf` | Previous versions, dated by the **CV's own vintage**, not by the date you did the swap. |

Only `public/` is served. Nothing under `docs/` reaches the live site, so the archive
and the inbox are for humans and agents, not for visitors. Never add a second copy of
the CV to `public/`, and never version the served filename — a dated served name breaks
every external link the moment it changes.

If two revisions share a vintage (a second June 2026 CV, say), suffix the later one with
a letter: `Lieberman_CV_2026-06b.pdf`.

## The intake procedure

1. Find the PDF in `docs/cv-inbox/`. Extract its text with `pdftotext -layout`
   (`brew install poppler` if missing).
2. Diff that text against the current `public/Lieberman_CV.pdf` to see exactly what
   changed. This is far faster than re-reading the whole CV.
3. Update `app/cv/page.tsx` to match the new PDF **word for word** (see below).
4. Check `app/publications/page.tsx` and `app/research/page.tsx` for citation drift
   against the new CV — author order, year, volume, issue, pages, titles. These pages
   repeat citations that also appear on the CV, and they drift silently.
5. Archive the outgoing CV to `docs/cv-archive/`, install the new one at
   `public/Lieberman_CV.pdf`, save a dated copy of the new one to `docs/cv-archive/`,
   and leave `docs/cv-inbox/` empty (keep the `.gitkeep`).

## The CV page is hand-written

`app/cv/page.tsx` is hand-written JSX. It is **not** generated from the PDF, and nothing
checks the two against each other. Every content change is a manual edit, using the
existing components: `SectionHeading`, `SubHeading`, `Entry`, `PubEntry`, `Note`, `Bullet`.

The PDF is the source of truth. If something in the PDF looks like an error, **report it
— do not silently correct it on the page.** A page that quietly disagrees with the PDF is
worse than one that faithfully reproduces a typo, because the disagreement is invisible.
Known divergences that are deliberate are recorded in the PR that introduced them; leave
them alone unless the PDF itself changes.

## Two things not to break

- **The download link must not have a `download` attribute.** It uses
  `target="_blank" rel="noopener noreferrer"` so the PDF opens in a new tab. Combining
  `download` with `target="_blank"` makes browsers flash open a window that immediately
  closes.
- **Never link papers to `alicealieberman.com/_files/ugd/...`.** Those are dead Wix
  media-manager paths left over from the old site. Link to the publisher of record or a DOI.

## Verify

```bash
npm run build && npm run lint
grep -rn "Lieberman_CV" app components
```

The grep should return exactly one hit: the `/Lieberman_CV.pdf` href in `app/cv/page.tsx`.
Then load `/cv` and confirm the Download PDF button opens the new CV in a new tab.
