import Link from "next/link";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-10 mb-3 pb-2 border-b uppercase font-semibold"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        color: "#003B5C",
        borderColor: "#003B5C",
        letterSpacing: "0.1em",
        fontSize: "0.7rem",
      }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-6 mb-2 uppercase font-semibold"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        color: "#374151",
        letterSpacing: "0.08em",
        fontSize: "0.65rem",
      }}
    >
      {children}
    </h3>
  );
}

function Entry({
  title,
  subtitle,
  detail,
  right,
}: {
  title: string;
  subtitle?: string;
  detail?: string;
  right?: string;
}) {
  return (
    <div className="flex justify-between items-start gap-4 mb-3">
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm" style={{ color: "#111827" }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-sm" style={{ color: "#374151" }}>
            {subtitle}
          </p>
        )}
        {detail && (
          <p className="text-sm mt-0.5" style={{ color: "#6B7280" }}>
            {detail}
          </p>
        )}
      </div>
      {right && (
        <span className="text-sm whitespace-nowrap flex-shrink-0" style={{ color: "#6B7280" }}>
          {right}
        </span>
      )}
    </div>
  );
}

function PubEntry({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm leading-relaxed" style={{ color: "#374151" }}>
      {children}
    </p>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 -mt-1.5 pl-6 text-xs leading-relaxed" style={{ color: "#6B7280" }}>
      {children}
    </p>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm mb-1.5 pl-4" style={{ color: "#374151" }}>
      {children}
    </p>
  );
}

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      {/* Title + download */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
          >
            Curriculum Vitae
          </h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            Alicea (Allie) Lieberman
          </p>
        </div>
        <Link
          href="/Lieberman_CV_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-navy inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </Link>
      </div>

      {/* CV Card */}
      <div className="bg-white border rounded-sm shadow-sm px-10 py-12" style={{ borderColor: "#E5E7EB" }}>
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: "#E5E7EB" }}>
          <h2
            className="text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
          >
            ALICEA (ALLIE) LIEBERMAN
          </h2>
          <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
            alicea.lieberman@anderson.ucla.edu
          </p>
        </div>

        <SectionHeading>Academic Positions</SectionHeading>
        <Entry title="UCLA Anderson School of Management" subtitle="Assistant Professor, Marketing and Behavioral Decision Making" right="2021–Present" />
        <Entry title="UCSD Rady School of Management" subtitle="Postdoctoral Scholar, Marketing" right="2021" />

        <SectionHeading>Education</SectionHeading>
        <Entry title="UCSD Rady School of Management" subtitle="Ph.D., Marketing" right="2020" />
        <Entry title="UNC Gillings School of Global Public Health" subtitle="M.P.H., Health Behavior" right="2010" />
        <Entry title="The George Washington University" subtitle="B.A., International Relations (Minors: Psychology, Spanish)" right="2008" />

        <SectionHeading>Research Interests</SectionHeading>
        <p className="text-sm mb-4" style={{ color: "#374151" }}>
          Behavioral Change, Health Behavior, Persistence, Social Influence, Decision Making
        </p>

        <SectionHeading>Journal Publications</SectionHeading>
        <PubEntry>Gershon, Rachel, <strong>Alicea Lieberman</strong>, and Sydney Scott (2025), &ldquo;Consumers Believe Legal Products are Less Effective Than Illegal Products,&rdquo; <em>Journal of Marketing Research</em>.</PubEntry>
        <Note>*Finalist, 2025 <em>Journal of Marketing Research</em> Paul E. Green/Vithala R. Rao Award</Note>
        <PubEntry><strong>Lieberman, Alicea</strong>, On Amir, and Ziv Carmon (2023), &ldquo;The Entrenchment Effect: Why People Persist with Less-Preferred Behaviors,&rdquo; <em>Organizational Behavior and Human Decision Processes</em>, 178, 104277.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Andrea C. Morales, and On Amir (2022), &ldquo;Tangential Immersion: Increasing Persistence in Boring Consumer Behaviors,&rdquo; <em>Journal of Consumer Research</em>, 49(3), 450–472.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Juliana Schroeder, and On Amir (2022), &ldquo;A Voice Inside My Head: The Psychological and Behavioral Consequences of Auditory Technologies,&rdquo; <em>Organizational Behavior and Human Decision Processes</em>, 170, 104–133.</PubEntry>
        <PubEntry>Mazar, Asaf, Guy Itzchakov, <strong>Alicea Lieberman</strong>, and Wendy Wood (2022), &ldquo;The Unintentional Nonconformist: Habits Promote Resistance to Social Influence,&rdquo; <em>Personality and Social Psychology Bulletin</em>, 49(7), 1058–1070.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Ayelet Gneezy, Emily Berry, Stacie Miller, Mark Koch, Keith Argenbright, and Samir Gupta (2021), &ldquo;The Effect of Deadlines on Cancer Screening Completion: A Randomized Controlled Trial,&rdquo; <em>Scientific Reports</em>, 11(1), 13876.</PubEntry>
        <PubEntry>Williams, Elanor F., <strong>Alicea Lieberman</strong>, and On Amir (2021), &ldquo;Perspective Neglect: Inadequate Perspective Taking Limits Consumer Coordination,&rdquo; <em>Judgment and Decision Making</em>, 16(4), 898–931.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Kristen E. Duke, and On Amir (2019), &ldquo;How Incentive Framing Can Harness the Power of Social Norms,&rdquo; <em>Organizational Behavior and Human Decision Processes</em>, 151, 118–131.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong> and Juliana Schroeder (2019), &ldquo;Two Social Lives: How Differences Between Online and Offline Interaction Influence Social Outcomes,&rdquo; <em>Current Opinion in Psychology</em>, 30, 16–21.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Ayelet Gneezy, Emily Berry, Stacie Miller, Mark Koch, Bijal A. Balasubramanian, Keith Argenbright, and Samir Gupta (2019), &ldquo;Financial Incentives to Promote Colorectal Cancer Screening: A Longitudinal Randomized Control Trial,&rdquo; <em>Cancer, Epidemiology, Biomarkers &amp; Prevention</em>, 28, 1902–1908.</PubEntry>
        <PubEntry>Jetelina, Katelyn, Joshua Yudkin, Stacy Miller, Emily Berry, <strong>Alicea Lieberman</strong>, Samir Gupta, and Bijal Balasubramanian (2019), &ldquo;Patient-reported Barriers to Completing a Diagnostic Colonoscopy Following Abnormal Fecal Immunochemical Test Among Uninsured Patients,&rdquo; <em>Journal of General Internal Medicine</em>, 9, 1730–1736.</PubEntry>
        <PubEntry>Jager, Mark, [and 10 others, including <strong>Alicea Lieberman</strong>] (2019), &ldquo;Mailed Outreach is Superior to Usual Care Alone for Colorectal Cancer Screening in the United States: A Systematic Review and Meta-Analysis,&rdquo; <em>Digestive Diseases and Sciences</em>, 64, 2489–2496.</PubEntry>
        <PubEntry>Gupta, Samir, [and 16 others, including <strong>Alicea Lieberman</strong>] (2016), &ldquo;Financial Incentives for Promoting Colorectal Cancer Screening: A Randomized, Comparative Effectiveness Trial,&rdquo; <em>American Journal of Gastroenterology</em>, 111, 1630–1636.</PubEntry>
        <PubEntry>Kim, Annice E., Tim Hopper, Sean Simpson, Jim Nonnemaker, <strong>Alicea Lieberman</strong>, Heather Hansen, and Lauren Porter (2015), &ldquo;Using Twitter Data to Gain Insights Into E-cigarette Marketing and Locations of Use: An Infoveillance Study,&rdquo; <em>Journal of Medical Internet Research</em>, 17, e251.</PubEntry>
        <PubEntry>Robles, Brenda, Jon L. Blitstein, <strong>Alicea Lieberman</strong>, Noel C. Barragan, Lauren N. Gase, and Tony Kuo (2015), &ldquo;The Relationship Between Amount of Soda Consumed and Intention to Reduce Soda Consumption Among Adults Exposed to the Choose Health LA &lsquo;Sugar Pack&rsquo; Health Marketing Campaign,&rdquo; <em>Public Health Nutrition</em>, 18, 2582–2591.</PubEntry>
        <PubEntry>Kim, Annice E., <strong>Alicea Lieberman</strong>, and Daniel Dench (2014), &ldquo;Crowdsourcing Data Collection of the Retail Tobacco Environment: Case Study Comparing Data From Crowdsourced Workers to Trained Data Collectors,&rdquo; <em>Tobacco Control</em>, 24, e6–e9.</PubEntry>

        <SectionHeading>Under Review and Select Work in Progress</SectionHeading>
        <p className="text-xs mb-3 -mt-1" style={{ color: "#9CA3AF" }}>*equal first authorship; †PhD student/postdoc</p>
        <PubEntry><strong>Lieberman, Alicea</strong>, Rachel Gershon, and Jackie Silverman, &ldquo;The &lsquo;Anti-snacked&rsquo; Bias: Breaking Activities into Smaller Chunks Reduces Perceived Effectiveness,&rdquo; under review at <em>Journal of Consumer Research</em>.</PubEntry>
        <PubEntry>*Duke, Kristen E. and *<strong>Alicea Lieberman</strong>, &ldquo;Designing for Behavior Change: How Choice Environments Signal Norms and Shape Behavior,&rdquo; in progress.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, &ldquo;The Temporal and Valence Dimensions of Persistence: An Integrated Framework,&rdquo; in progress.</PubEntry>
        <PubEntry><strong>Alicea Lieberman</strong>, Shelly Tsang†, and Cassie Mogilner, &ldquo;The Effects of Scheduling on Social Connection and Communication Persistence,&rdquo; in progress.</PubEntry>
        <PubEntry>Andrea Low†, Megan Weber†, Hengchen Dai, <strong>Alicea Lieberman</strong>, Hal E. Hershfield, Katy Milkman, and Angela Duckworth, &ldquo;Shared Identity or Shared Interests? Field Experimental Evidence on the Bases of Peer Connection and Success,&rdquo; in progress.</PubEntry>
        <PubEntry>Andrea Low†, Hengchen Dai, <strong>Alicea Lieberman</strong>, Craig Fox, Jana Gallus, Silvia Saccardo, Will Turner, and Richard Leuchter, &ldquo;Increasing On Time Arrival,&rdquo; in progress.</PubEntry>

        <SectionHeading>Additional Publications and Book Chapters</SectionHeading>
        <PubEntry>
          <strong>Lieberman, Alicea</strong> (2024), &ldquo;Why We Choose the Hard Way to Do Tedious Tasks,&rdquo; <em>Harvard Business Review</em>:{" "}
          <Link href="https://hbr.org/2024/06/research-why-we-choose-the-hard-way-to-do-tedious-tasks" target="_blank" rel="noopener noreferrer" className="link-blue break-words">
            hbr.org/2024/06/research-why-we-choose-the-hard-way-to-do-tedious-tasks
          </Link>
        </PubEntry>
        <Note>
          &bull; Adapted for Harvard Business Publishing Education &ndash; Inspiring Minds:{" "}
          <Link href="https://hbsp.harvard.edu/inspiring-minds/breaking-from-tedious-tasks-how-educators-overcome-unproductive-habits/" target="_blank" rel="noopener noreferrer" className="link-blue break-words">
            hbsp.harvard.edu/inspiring-minds/breaking-from-tedious-tasks-how-educators-overcome-unproductive-habits
          </Link>
        </Note>
        <PubEntry>
          <strong>Lieberman, Alicea</strong> (2022), &ldquo;How to Power Through Boring Tasks,&rdquo; <em>Harvard Business Review</em>:{" "}
          <Link href="https://hbr.org/2022/04/research-how-to-power-through-boring-tasks" target="_blank" rel="noopener noreferrer" className="link-blue break-words">
            hbr.org/2022/04/research-how-to-power-through-boring-tasks
          </Link>
        </PubEntry>
        <PubEntry>
          <strong>Lieberman, Alicea</strong> and Kristen E. Duke (2020), &ldquo;Why We&rsquo;re Incentivized by Discounts and Surcharges,&rdquo; <em>Harvard Business Review</em>:{" "}
          <Link href="https://hbr.org/2020/02/research-why-were-incentivized-by-discounts-and-surcharges" target="_blank" rel="noopener noreferrer" className="link-blue break-words">
            hbr.org/2020/02/research-why-were-incentivized-by-discounts-and-surcharges
          </Link>
        </PubEntry>
        <PubEntry>
          <strong>Lieberman, Alicea</strong> and Juliana Schroeder (2020), &ldquo;Increasing Social Connection While &lsquo;Social Distancing,&rsquo;&rdquo; <em>The Behavioral Scientist</em>:{" "}
          <Link href="https://behavioralscientist.org/increasing-social-connection-while-social-distancing-during-coronavirus/" target="_blank" rel="noopener noreferrer" className="link-blue break-words">
            behavioralscientist.org/increasing-social-connection-while-social-distancing-during-coronavirus
          </Link>
        </PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, Andrea C. Morales, and On Amir (2019), &ldquo;Collecting Data From the Field: Using Field Experiments and Experiments-In-the-Field to Increase Research Validity,&rdquo; In <em>Handbook of Research Methods in Consumer Psychology</em>, eds. P. Herr &amp; N. Schwarz. Abingdon, UK: Routledge.</PubEntry>

        <SectionHeading>Select Press Coverage</SectionHeading>
        {[
          {
            paper: "Tangential Immersion: Increasing Persistence in Boring Consumer Behaviors",
            lines: ["Select Media Coverage: Forbes"],
          },
          {
            paper: "A Voice Inside My Head: The Psychological and Behavioral Consequences of Auditory Technologies",
            lines: [
              "Press Interview: I discussed this work on the How the World Works podcast",
              "Select Media Coverage: Harvard Business Review Idea Watch (July–August, 2022), The Guardian, Newswise, Times of San Diego, Inside Radio, Patch, CBS 8, Earth, UCLA Anderson Review, The Daily Bruin, UC San Diego News, US News and World Report",
            ],
          },
          {
            paper: "How Incentive Framing Can Harness the Power of Social Norms",
            lines: [
              "Press Interview: I discussed this work on The Intuitive Customer podcast",
              "Select Media Coverage: Beyond Philosophy",
            ],
          },
          {
            paper: "Increasing Social Connection While ‘Social Distancing’",
            lines: ["Select Media Coverage: Berkeley Haas Newsroom, National Law Review"],
          },
        ].map((item) => (
          <div key={item.paper} className="mb-4">
            <p className="text-sm font-medium mb-1" style={{ color: "#111827" }}>
              &ldquo;{item.paper}&rdquo;
            </p>
            {item.lines.map((line) => (
              <p key={line} className="text-sm mb-1 pl-4 leading-relaxed" style={{ color: "#374151" }}>
                &ndash; {line}
              </p>
            ))}
          </div>
        ))}

        <SectionHeading>Select Awards and Grants</SectionHeading>
        {[
          ["Dean George W. Robbins Assistant Professor Teaching Award", "2025"],
          ["UCLA Anderson Center for Impact Research Fellow", "2025"],
          ["UCLA Council on Research Grant", "2025"],
          ["MSI Young Scholar, Marketing Science Institute", "2023"],
          ["UCLA Society of Hellman Fellow", "2023–2024"],
          ["Morrison Center for Marketing and Data Analytics Research Grants (two received)", "2023–2024"],
          ["NIH Grant-UG3HL154302 (co-investigator), “Multi-Ethnic Multi-level Strategies and Behavioral Economics to Eliminate Hypertension Disparities in LA County”", "2021–Present"],
          ["Morrison Center for Marketing and Data Analytics Research Grant", "2022–2023"],
          ["Morrison Center for Marketing and Data Analytics Research Grant", "2021–2022"],
          ["AMA CBSIG Rising Star Award", "2020–2021"],
          ["AMA-Sheth Doctoral Consortium Fellow", "2019"],
          ["SDSU/UCSD Cancer Center Comprehensive Partnership U54 Pilot Grant", "2018"],
          ["Frontiers in Innovation Scholars Program Fellowship", "2017–2018"],
          ["SJDM Student Poster Award: Honorable Mention", "2017"],
          ["UCSD GSA Interdisciplinary Research Award", "2016"],
          ["Arison School of Business PhD Summer Institute", "2016"],
          ["Doctoral Fellowship", "2015–2020"],
          ["Research Triangle Institute Annual Award", "2011–2013"],
          ["Research Triangle Institute Distinguished Spot Award", "2012"],
          ["Department of Health Behavior Academic Scholarship", "2009–2010"],
          ["Ethel Jean Jackson Award, UNC Department of Health Behavior", "2009"],
          ["Order of Omega Leadership Honor Society", "2005–2008"],
          ["George Washington University Dean’s List", "2005–2008"],
          ["George Washington University Presidential Academic Scholarship", "2004–2008"],
        ].map(([title, year]) => (
          <Entry key={title + year} title={title} right={year} />
        ))}

        <SectionHeading>Conference Presentations</SectionHeading>

        <SubHeading>Organized Symposia</SubHeading>
        <PubEntry>&ldquo;Causes, Consequences, and Alleviation of Boredom,&rdquo; (2020), Society for Consumer Psychology, Huntington Beach, CA.</PubEntry>
        <PubEntry>&ldquo;Behavior Change Challenges: Understanding When and Why People Fail (Or Succeed) to Engage in Beneficial Behaviors&rdquo; (2018), Society for Consumer Psychology, Dallas, TX.</PubEntry>
        <PubEntry>&ldquo;The Psychological Consequences of Technological Advances&rdquo; (2018, with Juliana Schroeder), Society for Personality and Social Psychology, Atlanta, GA.</PubEntry>
        <PubEntry>&ldquo;Changing for the Better: When and Why People Fail (or Succeed) to Engage in Beneficial Behavior Change&rdquo; (2017), Association for Consumer Research, San Diego, CA.</PubEntry>
        <PubEntry>&ldquo;Marketing Actions that Change Behavior&rdquo; (2016, with Kristen Duke), Society for Consumer Psychology, St. Pete&rsquo;s Beach, FL.</PubEntry>

        <SubHeading>Paper Presentations (*presenter)</SubHeading>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Rachel Gershon, and Jackie Silverman (2026). &ldquo;The &lsquo;Anti-Snack&rsquo; Bias: Breaking Activities into Smaller Chunks Reduces Perceived Effectiveness,&rdquo; Paper presented at the Society for Consumer Psychology, San Diego.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Rachel Gershon, and Jackie Silverman (2025). &ldquo;The &lsquo;Anti-Snack&rsquo; Bias: Breaking Activities into Smaller Chunks Reduces Perceived Effectiveness,&rdquo; Paper presented at the Society for Judgment and Decision Making, Denver, CO.</PubEntry>
        <PubEntry>Duke, Kristen E. and <strong>Alicea Lieberman</strong>* (2025), &ldquo;Designing for Behavior Change: How Choice Environments Signal Norms and Shape Behavior,&rdquo; Paper presented at the Association for Consumer Research, Washington, DC.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong> and Kristen E. Duke (2023), &ldquo;How the Choice Environment Can Signal Social Norms and Change Behavior,&rdquo; Paper presented at Society for Judgment and Decision Making, Seattle, WA.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, *On Amir, and Ziv Carmon (2022), &ldquo;Stuck in a Rut: The Behavioral Entrenchment Effect,&rdquo; Paper presented at Association for Consumer Research, Denver, CO.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Andrea C. Morales, and On Amir (2022), &ldquo;Tangential Immersion: Increasing Persistence in Low-Attention Behaviors,&rdquo; Paper presented at Society for Judgment and Decision Making, virtual.</PubEntry>
        <PubEntry>*Gershon, Rachel, <strong>Alicea Lieberman</strong>, and Sydney Scott (2022), &ldquo;The Illegal = Effective Heuristic,&rdquo; Paper presented at Society for Judgment and Decision Making, virtual.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Ayelet Gneezy, Emily Berry, Keith Argenbright, and Samir Gupta (2021), &ldquo;Testing the Role of Motivation and Procrastination in Colorectal Cancer Screening,&rdquo; Paper presented at Society for Consumer Psychology, virtual.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Ayelet Gneezy, Emily Berry, Keith Argenbright, and Samir Gupta (2020), &ldquo;Testing the Role of Motivation and Procrastination in Colorectal Cancer Screening,&rdquo; Paper presented at Association for Consumer Research, virtual.</PubEntry>
        <PubEntry>*Gershon, Rachel, <strong>Alicea Lieberman</strong>, and Sydney Scott (2020), &ldquo;The Illegal = Effective Heuristic,&rdquo; Paper presented at Association for Consumer Research, virtual.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Andrea Morales (2020), &ldquo;The Paradox of Tangential Immersion,&rdquo; Paper presented at Society for Consumer Psychology, Huntington Beach, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Ayelet Gneezy, and Samir Gupta (2019), &ldquo;Using Behavioral Insights to Increase Colorectal Cancer Screening,&rdquo; Paper presented at Society for Judgment and Decision Making, Montreal, Canada.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Ayelet Gneezy, and Samir Gupta (2019), &ldquo;Using Behavioral Insights to Increase Colorectal Cancer Screening,&rdquo; Paper presented at Behavioral Insights into Business for Social Good, Vancouver, Canada.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2018), &ldquo;How Incentive Framing Can Harness the Power of Social Norms,&rdquo; Paper presented at Society for Judgment and Decision Making, New Orleans, LA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2018), &ldquo;How Incentive Framing Can Harness the Power of Social Norms,&rdquo; Paper presented at Association for Consumer Research, Dallas, TX.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2018), &ldquo;Simulating Social Closeness: The Psychological Consequences of Consumer Technologies,&rdquo; Paper presented at Behavioral Decision Research in Management, Cambridge, MA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2018), &ldquo;How Incentive Framing Can Harness the Power of Social Norms,&rdquo; Paper presented at Behavioral Decision Research in Management, Cambridge, MA.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, On Amir, and *Juliana Schroeder (2018), &ldquo;Simulating Social Closeness: The Psychological Consequences of Consumer Technologies,&rdquo; Paper presented at Society for Personality and Social Psychology, Atlanta, GA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Ziv Carmon (2018), &ldquo;The Entrenchment Effect,&rdquo; Paper presented at Society for Consumer Psychology, Dallas, TX.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2017), &ldquo;Simulating Social Closeness: The Psychological Consequences of Consumer Technologies,&rdquo; Paper presented at Society for Judgment and Decision Making, Vancouver, Canada.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2017), &ldquo;Simulating Social Closeness: The Psychological Consequences of Consumer Technologies,&rdquo; Paper presented at Psychology of Technology, Berkeley, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Ziv Carmon (2017), &ldquo;The Entrenchment Effect,&rdquo; Paper presented at Association for Consumer Research, San Diego, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2017), &ldquo;How the Framing of Incentive Policies Can Harness the Power of Social Norms,&rdquo; Paper presented at Behavioral Science and Policy Association, New York, NY.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2017), &ldquo;A Voice Inside your Head: Listening to Messages Via Headphones Increases Immersion, Presence, Positive Impression, and Generosity,&rdquo; Paper presented at Society for Consumer Psychology, San Francisco, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2016), &ldquo;A Voice Inside your Head: Listening to Messages Via Headphones Increases Immersion, Presence, Positive Impression, and Generosity,&rdquo; Paper presented at Association for Consumer Research, Berlin, Germany.</PubEntry>
        <PubEntry>Williams, Elanor F., On Amir, and *<strong>Alicea Lieberman</strong> (2016), &ldquo;Perspective Neglect: Inadequate Perspective Taking Limits Consumer Coordination,&rdquo; Paper presented at Society for Judgment and Decision Making, Boston, MA.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong> and *Wendy Liu (2016), &ldquo;Risk Taking in Socially Responsible Investing,&rdquo; Paper presented at Behavioral Decision Research in Management, Toronto, Canada.</PubEntry>
        <PubEntry><strong>Lieberman, Alicea</strong>, *Kristen Duke, and On Amir (2016), &ldquo;Norm Inferences: The Hidden Influence of Incentive Framing,&rdquo; Paper presented at Society for Consumer Psychology, St. Pete Beach, FL.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2015), &ldquo;Norm Inferences: The Hidden Influence of Incentive Framing,&rdquo; Paper presented at Society for Judgment and Decision Making, Chicago, IL.</PubEntry>

        <SubHeading>Poster Presentations</SubHeading>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2017), &ldquo;How the Framing of Incentive Policies Can Harness the Power of Social Norms,&rdquo; Poster presented at Society for Judgment and Decision Making, Vancouver, CA.</PubEntry>
        <Note>&ndash; SJDM Student Poster Award: Honorable Mention</Note>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Ayelet Gneezy, and Samir Gupta (2017), &ldquo;Increasing Colorectal Cancer Screening Among the Underserved,&rdquo; Poster presented at The Science of Habits: Behavior Change Interventions for Health Habits, Catalina, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, On Amir, and Juliana Schroeder (2016), &ldquo;A Voice Inside your Head: Listening to Messages Via Headphones Increases Immersion, Presence, Positive Impression, and Generosity,&rdquo; Poster presented at Society for Judgment and Decision Making, Boston, MA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2016), &ldquo;Norm Inferences: The Hidden Influence of Incentive Framing,&rdquo; Poster presented at the Society for Judgment and Decision Making SPSP Preconference, San Diego, CA.</PubEntry>
        <PubEntry>Williams, Elanor F., On Amir, and *<strong>Alicea Lieberman</strong> (2016), &ldquo;Encouraging People to Consider Others&rsquo; Perspectives Helps Them Optimize Decisions about Scarce Resources,&rdquo; Poster presented at Society for Judgment and Decision Making SPSP Preconference, San Diego, CA.</PubEntry>
        <PubEntry>*<strong>Lieberman, Alicea</strong>, Kristen Duke, and On Amir (2016), &ldquo;Norm Inferences: The Hidden Influence of Incentive Framing,&rdquo; Poster presented at The Science of Habits: The Habit Driven Consumer, Catalina, CA.</PubEntry>

        <SubHeading>Invited Presentations</SubHeading>
        {[
          ["University of Arizona, Eller College of Management, Marketing Camp", "January 2026"],
          ["Stanford University, Stanford Graduate School of Business", "October 2025"],
          ["University of Pennsylvania, The Wharton School", "May 2025"],
          ["Washington University in St. Louis, Olin Business School, Junior Faculty Forum", "April 2025"],
          ["University of California, Los Angeles, Anderson School of Management, Marketing Camp", "May 2024"],
          ["University of California, Berkeley, Haas School of Business", "April 2024"],
          ["University of California, Riverside, School of Business", "April 2024"],
          ["University of California, Los Angeles, Department of Psychology", "April 2024"],
          ["MSI Young Scholars Conference, Snowbird, Utah", "January 2024"],
          ["University of Chicago, Booth School of Business", "March 2023"],
          ["Stanford University, Stanford Graduate School of Business", "May 2021"],
          ["Yale University, Yale School of Management", "November 2020"],
          ["Cornell University, SC Johnson College of Business", "November 2020"],
          ["University of California, Los Angeles, Anderson School of Management", "November 2020"],
          ["Texas A&M University, Mays Business School", "November 2020"],
          ["San Diego State University, Fowler College of Business", "October 2020"],
          ["Columbia University, Columbia Business School", "October 2020"],
        ].map(([place, when], i) => (
          <Entry key={`${place}-${when}-${i}`} title={place} right={when} />
        ))}

        <SectionHeading>Teaching Experience</SectionHeading>
        <p className="text-sm font-medium mb-2" style={{ color: "#111827" }}>UCLA Anderson School of Management</p>
        {[
          "Introduction to Marketing (MGMT 411), Winter 2026 full-time MBA core",
          "Introduction to Marketing (MGMT 411), Winter 2025 full-time MBA core",
          "Introduction to Marketing (MGMT 411), Fall 2023 full-time MBA core",
          "Introduction to Marketing (MGMT 411), Spring 2023 FEMBA core",
          "Introduction to Marketing (MGMT 411), Spring 2022 FEMBA core",
        ].map((t) => (
          <Bullet key={t}>{t}</Bullet>
        ))}
        <p className="text-sm font-medium mb-2 mt-4" style={{ color: "#111827" }}>UCSD Rady School of Management</p>
        <Bullet>Social Media Marketing (MGT 489), FlexMBA Spring 2021</Bullet>

        <SectionHeading>Advising Experience</SectionHeading>
        <p className="text-sm font-medium mb-2" style={{ color: "#111827" }}>Dissertation Committees</p>
        {["Shelli Orzach", "Andrea Low", "Megan Weber", "Tayler Bergstrom"].map((name) => (
          <Bullet key={name}>{name}</Bullet>
        ))}

        <SectionHeading>Service and Affiliations</SectionHeading>
        <p className="text-sm font-medium mb-2" style={{ color: "#111827" }}>Editorial Service</p>
        <Bullet>
          Editorial Review Board: <em>Journal of Experimental Psychology: Applied</em> (2021–2023)
        </Bullet>
        <Bullet>
          Ad Hoc Reviewer: <em>Journal of Marketing Research</em>, <em>Journal of Consumer Research</em>, <em>Organizational Behavior and Human Decision Processes</em>, <em>Management Science</em>, <em>Communications Medicine – Nature</em>, <em>Journal of Personality and Social Psychology</em>
        </Bullet>

        <p className="text-sm font-medium mb-2 mt-4" style={{ color: "#111827" }}>To Anderson and UCLA</p>
        {[
          "BDM Area Seminar Planning Committee, UCLA Anderson (2023–present)",
          "Ethics@Anderson Task Force, UCLA Anderson (2023)",
          "Marketing and BDM Areas PhD Admissions Committee, UCLA Anderson (2022–present)",
          "Marketing Camp Planning Committee, UCLA Anderson (2022–present)",
        ].map((s) => (
          <Bullet key={s}>{s}</Bullet>
        ))}

        <p className="text-sm font-medium mb-2 mt-4" style={{ color: "#111827" }}>To Professional Societies</p>
        {[
          "Social Co-chair, Society for Consumer Psychology (SCP) conference (2025–26)",
          "Co-organizer, California Schools Conference (2025)",
          "Faculty Mentor, SCP conference Doctoral Consortium (2025)",
          "Reviewer, MSI Alden G. Clayton Dissertation Proposal Award (2025)",
          "Member, MSI Healthcare Initiative (2024)",
          "Reviewer, Behavioral Decision Research in Management (BDRM) conference (2024)",
          "Reviewer, SCP Dissertation Award (2024)",
          "Reviewer, American Marketing Association CBSIG conference (2024)",
          "Reviewer, Society for Judgment and Decision Making (SJDM) conference (2023)",
          "Judge, student poster award, SJDM conference (2022)",
          "Reviewer, Association for Consumer Research (ACR) conference (2018–present)",
          "Reviewer, SCP conference (2018–present)",
          "Reviewer, Hawai‘i International Conference on System Sciences (HICSS-51) (2017)",
          "Volunteer, ACR conference (2017)",
          "Volunteer, SCP conference (2017)",
        ].map((s) => (
          <Bullet key={s}>{s}</Bullet>
        ))}

        <p className="text-sm font-medium mb-2 mt-4" style={{ color: "#111827" }}>Professional Affiliations</p>
        {[
          "Association for Consumer Research (ACR)",
          "Behavioral Decision Research Management (BDRM)",
          "Society for Consumer Psychology (SCP)",
          "Society for Judgment and Decision Making (SJDM)",
        ].map((a) => (
          <Bullet key={a}>{a}</Bullet>
        ))}

        <SectionHeading>Professional Experience</SectionHeading>
        <Entry
          title="RTI International, Research Triangle Park, NC"
          subtitle="Research Analyst/Project Manager"
          detail="Designed, managed, and implemented evaluations of state and federal behavior-change marketing campaigns on a variety of health topics."
          right="2010–2014"
        />
        <Entry
          title="UNC Translational Research and Clinical Sciences Institute, Chapel Hill, NC"
          subtitle="Graduate Research Assistant"
          detail="Developed online research trainings for university and community researchers in an effort to build research capacity for the NC Translational Research and Clinical Sciences Institute."
          right="2009–2010"
        />
      </div>
    </div>
  );
}
