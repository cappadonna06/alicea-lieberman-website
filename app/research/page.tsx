import Image from "next/image";
import Link from "next/link";

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  citations: { text: string; url: string }[];
}

const projects: ResearchProject[] = [
  {
    title: "How Incentive Framing Can Harness the Power of Social Norms",
    description:
      "Incentives are an increasingly common tool used to change behavior. In this research, we propose that more than just motivating behavior for monetary reasons, incentives also have an important, undiscovered consequence: they leak information about social norms. Four experiments reveal that framing an incentive as a surcharge (vs. a discount), signals that the incentivized behavior is both more socially approved and more common, motivating consumers to perform the incentivized behavior. Importantly, by shifting social norms, we find that incentives can also change behaviors among those who merely witness the incentive as well as influence behavior not only in the moment, but also downstream when there is no longer an active incentive.",
    image: "/Social-norms.png",
    imageAlt: "Social norms research visualization",
    citations: [
      {
        text: "Lieberman, Alicea, Kristen Duke, and On Amir (2019), \u201cHow Incentive Framing Can Harness the Power of Social Norms,\u201d Organizational Behavior and Human Decision Processes, 151, 118\u2013131.",
        url: "https://www.alicealieberman.com/_files/ugd/5ee748_d92055c5e31d41bfb354a138ad467a20.pdf",
      },
      {
        text: "Lieberman, Alicea and Kristen Duke (2020), \u201cWhy We\u2019re Incentivized by Discounts and Surcharges,\u201d Harvard Business Review.",
        url: "https://hbr.org/2020/02/research-why-were-incentivized-by-discounts-and-surcharges?",
      },
    ],
  },
  {
    title: "Tangential Immersion: Increasing Persistence in Boring Consumer Behaviors",
    description:
      "Daily life is filled with myriad behaviors that benefit from persistence (e.g. hygiene, exercise), but that are often not performed long enough. We posit that consumers often halt such behaviors prematurely because they do not satisfy attentional needs. Five experiments demonstrate that immersion in a tangential task\u2014thereby increasing attentional demands\u2014satisfies attentional needs and increases persistence. Tangential immersion is shown to increase persistence across a range of behaviors (e.g., toothbrushing, coordination exercise) and with different tangential tasks (reading, listening, viewing). Two important boundaries arise: first, the focal behavior must be low-attention, allowing consumers to sufficiently attend to the tangential task; second, the tangential task must achieve the proper level of immersion\u2014it must sustain attention without exceeding attentional capacity.",
    image: "/tangential-imersion.png",
    imageAlt: "Tangential immersion research visualization",
    citations: [
      {
        text: "Lieberman, Alicea, Andrea C. Morales, and On Amir (2022), \u201cTangential Immersion: Increasing Persistence in Boring Consumer Behaviors,\u201d Journal of Consumer Research, 49(3), 450\u2013472.",
        url: "https://academic.oup.com/jcr/article-abstract/49/3/450/6460823?redirectedFrom=fulltext&login=false",
      },
    ],
  },
  {
    title: "The Effect of Deadlines on Cancer Screening Completion",
    description:
      "Preventive screening allows for early detection and is one of the most effective approaches to reducing cancer mortality. However, screening participation is suboptimal, particularly among underserved populations. In a large, preregistered field experiment (n=7,711), we tested whether deadlines\u2014both with and without monetary incentives tied to them\u2014increase colorectal cancer (CRC) screening. Relative to control, pure deadlines, as well as deadlines coupled with monetary incentives, increased completion. Moreover, individuals faced with a non-incentivized short deadline were as likely to complete screening as individuals who received an incentivized deadline. These results suggest that merely imposing deadlines\u2014especially short ones\u2014can significantly increase CRC screening completion, and may also have implications for other forms of cancer screening.",
    image: "/deadlines.png",
    imageAlt: "Deadlines and cancer screening research visualization",
    citations: [
      {
        text: "Lieberman, Alicea, Ayelet Gneezy, et al. (2021), \u201cThe Effect of Deadlines on Cancer Screening Completion: A Randomized Controlled Trial,\u201d Scientific Reports, 11(13876).",
        url: "https://www.alicealieberman.com/_files/ugd/5ee748_8d762b53fbf949178253262ea7dcc33c.pdf",
      },
    ],
  },
];

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <h1
        className="text-3xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
      >
        Selected Research
      </h1>
      <p className="text-sm mb-12" style={{ color: "#6B7280" }}>
        My research examines the psychological mechanisms underlying behavioral initiation and persistence,
        with an emphasis on behaviors that improve health and well-being.
      </p>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="flex flex-col md:flex-row gap-8 pb-16 border-b last:border-0"
            style={{ borderColor: "#E5E7EB" }}
          >
            <div className="flex-shrink-0 overflow-hidden rounded-sm" style={{ maxWidth: 280 }}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={280}
                height={200}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h2
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
              >
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                {project.description}
              </p>
              <div className="space-y-2">
                {project.citations.map((cite, cIdx) => (
                  <Link
                    key={cIdx}
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-blue block text-xs leading-relaxed"
                  >
                    {cite.text}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
