import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const filePath = join(process.cwd(), 'docs', 'Lieberman_CV_2026.pdf');
  const fileBuffer = await readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Lieberman_CV_2026.pdf"',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
