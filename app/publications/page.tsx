import Link from "next/link";

interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  details?: string;
  url: string;
}

interface AdditionalPub {
  authors: string;
  year: number;
  title: string;
  outlet: string;
  url: string;
}

function renderAuthors(authors: string) {
  const boldName = "Alicea Lieberman";
  const parts = authors.split(boldName);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <strong>{boldName}</strong>}
    </span>
  ));
}

const journalPubs: Publication[] = [
  {
    authors: "Gershon, Rachel, Alicea Lieberman, and Sydney Scott",
    year: 2025,
    title: "Consumers Believe Legal Products are Less Effective Than Illegal Products",
    journal: "Journal of Marketing Research",
    url: "https://journals.sagepub.com/doi/10.1177/00222437251328249",
  },
  {
    authors: "Lieberman, Alicea, On Amir, and Ziv Carmon",
    year: 2023,
    title: "The Entrenchment Effect: Why People Persist With Less-Preferred Behaviors",
    journal: "Organizational Behavior and Human Decision Processes",
    details: "178, 104277",
    url: "https://www.sciencedirect.com/science/article/pii/S0749597823000535?dgcid=author",
  },
  {
    authors: "Lieberman, Alicea, Andrea C. Morales, and On Amir",
    year: 2022,
    title: "Tangential Immersion: Increasing Persistence in Boring Consumer Behaviors",
    journal: "Journal of Consumer Research",
    details: "49(3), 450–472",
    url: "https://academic.oup.com/jcr/article-abstract/49/3/450/6460823?redirectedFrom=fulltext&login=false",
  },
  {
    authors: "Lieberman, Alicea, Juliana Schroeder, and On Amir",
    year: 2022,
    title: "A Voice Inside My Head: The Psychological and Behavioral Consequences of Auditory Technologies",
    journal: "Organizational Behavior and Human Decision Processes",
    details: "170, 104–133",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0749597822000176",
  },
  {
    authors: "Mazar, Asaf, Guy Itzchakov, Alicea Lieberman, and Wendy Wood",
    year: 2022,
    title: "The Unintentional Nonconformist: Habits Promote Resistance to Social Influence",
    journal: "Personality and Social Psychology Bulletin",
    details: "49(7), 1058–1070",
    url: "https://pubmed.ncbi.nlm.nih.gov/35485353/",
  },
  {
    authors: "Lieberman, Alicea, Ayelet Gneezy, Emily Berry, Stacie Miller, Mark Koch, Keith Argenbright, and Samir Gupta",
    year: 2021,
    title: "The Effect of Deadlines on Cancer Screening Completion: A Randomized Controlled Trial",
    journal: "Scientific Reports",
    details: "11(13876)",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_8d762b53fbf949178253262ea7dcc33c.pdf",
  },
  {
    authors: "Williams, Elanor F., Alicea Lieberman, and On Amir",
    year: 2021,
    title: "Perspective Neglect: Inadequate Perspective Taking Limits Consumer Coordination",
    journal: "Judgment and Decision Making",
    details: "16(4), 898–931",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_f94210b5f84f4d289f586169376ce231.pdf",
  },
  {
    authors: "Lieberman, Alicea, Kristen E. Duke, and On Amir",
    year: 2019,
    title: "How Incentive Framing Can Harness the Power of Social Norms",
    journal: "Organizational Behavior and Human Decision Processes",
    details: "151, 118–131",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_d92055c5e31d41bfb354a138ad467a20.pdf",
  },
  {
    authors: "Lieberman, Alicea and Juliana Schroeder",
    year: 2019,
    title: "Two Social Lives: How Differences Between Online and Offline Interaction Influence Social Outcomes",
    journal: "Current Opinion in Psychology",
    details: "30, 16–21",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_804b4505ddae46b8ace42b1a6af03a6d.pdf",
  },
  {
    authors: "Lieberman, Alicea, Ayelet Gneezy, Emily Berry, Stacie Miller, Mark Koch, Bijal A. Balasubramanian, Keith Argenbright, and Samir Gupta",
    year: 2019,
    title: "Financial Incentives to Promote Colorectal Cancer Screening: A Longitudinal Randomized Control Trial",
    journal: "Cancer, Epidemiology, Biomarkers & Prevention",
    details: "28, 1902–1908",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_aaa8ef9c32ee4912b0cc0b0847b30e32.pdf",
  },
  {
    authors: "Jetelina, Katelyn, Joshua Yudkin, Stacy Miller, Emily Berry, Alicea Lieberman, Samir Gupta, and Bijal Balasubramanian",
    year: 2019,
    title: "Patient-reported barriers to completing a diagnostic colonoscopy following abnormal fecal immunochemical test among uninsured patients",
    journal: "Journal of General Internal Medicine",
    details: "9, 1730–1736",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_23267f8ad3fa42869a7e12f608b76c28.pdf",
  },
  {
    authors: "Kim, Annice E., Tim Hopper, Sean Simpson, Jim Nonnemaker, Alicea Lieberman, Heather Hansen, and Lauren Porter",
    year: 2015,
    title: "Using Twitter Data to Gain Insights Into E-cigarette Marketing and Locations of Use: An Infoveillance Study",
    journal: "Journal of Medical Internet Research",
    details: "17, e251",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_fa325834d08345e883494ebd90e94bc1.pdf",
  },
  {
    authors: "Robles, Brenda., Jon L. Blitstein, Alicea Lieberman, Noel C. Barragan, Lauren N. Gase, and Tony Kuo",
    year: 2015,
    title: "The Relationship Between Amount of Soda Consumed and Intention to Reduce Soda Consumption Among Adults Exposed to the Choose Health LA \u2018Sugar Pack\u2019 Health Marketing Campaign",
    journal: "Public Health Nutrition",
    details: "18, 2582–2591",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_c02700ff6d734e9d9e2f68f30cae81e1.pdf",
  },
  {
    authors: "Kim, Annice E., Alicea Lieberman, and Daniel Dench",
    year: 2014,
    title: "Crowdsourcing Data Collection of the Retail Tobacco Environment: Case Study Comparing Data From Crowdsourced Workers to Trained Data Collectors",
    journal: "Tobacco Control",
    details: "24, e6–e9",
    url: "https://www.alicealieberman.com/_files/ugd/5ee748_dc877d1a536141c2a394defec667078d.pdf",
  },
];

const additionalPubs: AdditionalPub[] = [
  {
    authors: "Lieberman, Alicea",
    year: 2024,
    title: "Why We Choose the Hard Way to Do Tedious Tasks",
    outlet: "Harvard Business Review",
    url: "https://hbr.org/2024/06/research-why-we-choose-the-hard-way-to-do-tedious-tasks",
  },
  {
    authors: "Lieberman, Alicea",
    year: 2022,
    title: "How to Power Through Boring Tasks",
    outlet: "Harvard Business Review",
    url: "https://hbr.org/2022/04/research-how-to-power-through-boring-tasks",
  },
  {
    authors: "Lieberman, Alicea and Kristen E. Duke",
    year: 2020,
    title: "Why We\u2019re Incentivized by Discounts and Surcharges",
    outlet: "Harvard Business Review",
    url: "https://hbr.org/2020/02/research-why-were-incentivized-by-discounts-and-surcharges?",
  },
  {
    authors: "Lieberman, Alicea and Juliana Schroeder",
    year: 2020,
    title: "Increasing Social Connection While \u2018Social Distancing\u2019",
    outlet: "The Behavioral Scientist",
    url: "https://behavioralscientist.org/increasing-social-connection-while-social-distancing-during-coronavirus/",
  },
  {
    authors: "Lieberman, Alicea, Andrea C. Morales, and On Amir",
    year: 2019,
    title: "Collecting Data From the Field: Using Field Experiments and Experiments-In-the-Field to Increase Research Validity",
    outlet: "Handbook of Research Methods in Consumer Psychology, eds. P. Herr & N. Schwarz. Abingdon, UK: Routledge.",
    url: "https://books.google.com/books?hl=en&lr=&id=iwuWDwAAQBAJ&oi=fnd&pg=PA41&dq=alicea+lieberman+field+experiments&ots=vr8DVBVrRk&sig=g8mKNulGiezf4m_XX4w95nphk8g#v=onepage&q=alicea%20lieberman%20field%20experiments&f=false",
  },
];

function PubRow({ pub }: { pub: Publication }) {
  return (
    <div className="py-4 border-b flex gap-4" style={{ borderColor: "#F3F4F6" }}>
      <span className="text-sm font-medium w-10 flex-shrink-0 pt-0.5" style={{ color: "#9CA3AF" }}>
        {pub.year}
      </span>
      <p className="flex-1 min-w-0 text-sm leading-relaxed" style={{ color: "#374151" }}>
        {renderAuthors(pub.authors)}{" "}
        <span style={{ color: "#6B7280" }}>({pub.year}), </span>
        <Link href={pub.url} target="_blank" rel="noopener noreferrer" className="link-blue font-medium">
          &ldquo;{pub.title},&rdquo;
        </Link>{" "}
        <em>{pub.journal}</em>
        {pub.details ? `, ${pub.details}.` : "."}
      </p>
    </div>
  );
}

function AdditionalPubRow({ pub }: { pub: AdditionalPub }) {
  return (
    <div className="py-4 border-b flex gap-4" style={{ borderColor: "#F3F4F6" }}>
      <span className="text-sm font-medium w-10 flex-shrink-0 pt-0.5" style={{ color: "#9CA3AF" }}>
        {pub.year}
      </span>
      <p className="flex-1 min-w-0 text-sm leading-relaxed" style={{ color: "#374151" }}>
        {renderAuthors(pub.authors)}{" "}
        <span style={{ color: "#6B7280" }}>({pub.year}), </span>
        <Link href={pub.url} target="_blank" rel="noopener noreferrer" className="link-blue font-medium">
          &ldquo;{pub.title},&rdquo;
        </Link>{" "}
        <em>{pub.outlet}</em>
      </p>
    </div>
  );
}

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1
        className="text-3xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
      >
        Selected Publications
      </h1>
      <p className="text-sm mb-10" style={{ color: "#6B7280" }}>
        <strong>Alicea Lieberman</strong> is bolded. Paper titles are linked.
      </p>

      <section className="mb-12">
        <h2
          className="text-xs uppercase font-semibold mb-1 pb-2 border-b"
          style={{ color: "#003B5C", borderColor: "#003B5C", letterSpacing: "0.1em" }}
        >
          Journal Publications
        </h2>
        {journalPubs.map((pub, i) => <PubRow key={i} pub={pub} />)}
      </section>

      <section>
        <h2
          className="text-xs uppercase font-semibold mb-1 pb-2 border-b"
          style={{ color: "#003B5C", borderColor: "#003B5C", letterSpacing: "0.1em" }}
        >
          Additional Publications and Book Chapters
        </h2>
        {additionalPubs.map((pub, i) => <AdditionalPubRow key={i} pub={pub} />)}
      </section>
    </div>
  );
}
