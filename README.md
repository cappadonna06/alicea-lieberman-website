This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form (Resend)

The contact page includes a form that submits to `POST /api/contact`, which sends emails through the Resend API.

1. Create a free account at [Resend](https://resend.com).
2. Generate an API key in the Resend dashboard.
3. Create a `.env.local` file in the project root.
4. Add your API key:
   - `RESEND_API_KEY=...`
5. (Recommended) Set your sender email:
   - `CONTACT_FROM_EMAIL=you@yourdomain.com`
   - If omitted, the route defaults to `onboarding@resend.dev` for local testing.
6. Start dev server and test the form at `/contact`.

> If your environment blocks package installation, run `npm install resend` in your local environment before deploying.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
