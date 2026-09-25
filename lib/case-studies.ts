export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  blurb: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  content: string; // trusted static HTML authored in this repo
  deckUrl?: string; // optional downloadable deck (served from /public)
};

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "job-finder",
    tag: "AI Product · 0→1",
    title: "Job Finder",
    subtitle:
      "AI job-search agent · 2026 · job-finder-agent",
    blurb:
      "Designed and shipped an AI agent that scrapes fresh PM roles daily, scores fit with an LLM, auto-tailors resumes and cover letters, and emails a ranked digest — turning a fragmented, hours-long job hunt into a single morning glance.",
    metrics: [
      { value: "Daily", label: "Automated pipeline" },
      { value: "7+", label: "Job sources" },
      { value: "Multi", label: "Tenant SaaS" },
      { value: "0→1", label: "Solo PM + build" },
    ],
    skills: [
      "AI Product",
      "Workflow Automation",
      "Cost / Constraint Design",
      "User Research",
      "Roadmapping",
      "GTM Strategy",
    ],
    content: `
      <h2>Executive Summary</h2>
      <p>Job Finder is an AI-powered job-search agent built for one painfully familiar problem — applying to roles is a slow, repetitive, emotionally draining grind. It scrapes fresh Product Manager openings across multiple boards every day, scores each one for fit using an LLM, automatically tailors a resume and cover letter to the strongest matches, and emails a ranked daily digest. What used to take hours of manual searching and rewriting becomes a single glance over morning coffee.</p>
      <blockquote><strong>The core insight:</strong> the hardest part of job-hunting isn't a lack of listings — it's the cognitive load of filtering noise, judging fit, and re-tailoring materials for every single role. Automate the grind, and the candidate gets to spend their energy on the conversations that actually matter.</blockquote>

      <h2>The Problem Space</h2>
      <h3>Three pain points from my own job search</h3>
      <ul>
        <li><strong>Fragmented search:</strong> relevant roles are scattered across a dozen boards, each with its own filters and noise. Checking them all daily is exhausting and easy to abandon.</li>
        <li><strong>Fit is hard to judge fast:</strong> a listing's title rarely tells you whether you'd actually be a strong candidate — visa eligibility, seniority, and domain all hide in the fine print.</li>
        <li><strong>Tailoring doesn't scale:</strong> everyone says "customize your resume for each role," but doing that by hand for 20 applications a week is simply not sustainable.</li>
      </ul>

      <h2>Target User</h2>
      <div class="table-wrap"><table>
        <tr><th>Attribute</th><th>The Active Job-Seeker</th></tr>
        <tr><td><strong>Who</strong></td><td>Early-to-mid career professional running a focused, ongoing job search (starting with PM roles)</td></tr>
        <tr><td><strong>Core need</strong></td><td>A curated, fit-scored shortlist every day — without manually trawling boards</td></tr>
        <tr><td><strong>Frustration</strong></td><td>"I waste an hour a day searching and re-tailoring, and still miss good roles"</td></tr>
        <tr><td><strong>Success metric</strong></td><td>More quality applications submitted with far less effort per application</td></tr>
      </table></div>

      <h2>The Solution — An End-to-End Pipeline</h2>
      <p><span class="phase phase-1">1 — Discover</span><br/>Daily scrapers pull fresh roles from free, free-to-apply sources (The Muse, Jobicy, and others) that link straight to the employer's own application page — no paywalls, no dead ends.</p>
      <p><span class="phase phase-2">2 — Score</span><br/>Each role is scored for fit by an LLM, batched for efficiency, with a fast regex pre-check for visa-sponsorship signals so expensive model calls are spent only where they add value.</p>
      <p><span class="phase phase-3">3 — Tailor &amp; Deliver</span><br/>For the strongest matches, the agent auto-generates a tailored resume and cover letter, then emails a ranked digest straight to the user's inbox.</p>

      <h2>Prioritization &amp; Constraint Design</h2>
      <p>The defining PM challenge here wasn't features — it was running a genuinely useful AI product without runaway cost. Every decision was a deliberate trade-off between coverage, quality, and spend:</p>
      <div class="table-wrap"><table>
        <tr><th>Decision</th><th>Rationale</th></tr>
        <tr><td>Batch LLM scoring (~1 call per 8 jobs)</td><td>Cuts model spend dramatically while keeping fit-scoring quality high</td></tr>
        <tr><td>Regex sponsorship pre-filter</td><td>Removes obviously ineligible roles with zero LLM cost</td></tr>
        <tr><td>Hard per-run, per-user, per-day call caps</td><td>Guarantees the product can never blow its budget</td></tr>
        <tr><td>Time-boxed scrapers &amp; tailoring budget</td><td>Keeps the daily run fast and predictable</td></tr>
        <tr><td>Free, free-to-apply sources only</td><td>Respects the user's intent — no surfacing roles behind paywalls</td></tr>
      </table></div>

      <h2>From Tool to Product</h2>
      <p>What started as a personal script became a real multi-tenant SaaS. I designed an approval-gated onboarding flow — sign up, confirm email, wait for admin approval — with role-based access and per-user data isolation, so each person gets their own private pipeline, preferences, and digest. That shift from "a thing I built for myself" to "a product other people can safely use" was the most important product decision of the project.</p>

      <h2>Measuring Impact</h2>
      <ul>
        <li><strong>Effort:</strong> collapses a daily multi-board search + manual tailoring routine into one ranked email</li>
        <li><strong>Coverage:</strong> aggregates 7+ sources the user would otherwise check by hand</li>
        <li><strong>Quality:</strong> every surfaced role is fit-scored and links to a real, free-to-apply posting</li>
        <li><strong>Sustainability:</strong> cost caps and batching keep the running cost low enough to operate continuously</li>
      </ul>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Constraints are the product.</strong> For an AI product, cost discipline isn't a footnote — it's a core feature. The batching and caps are what make it shippable, not just a demo.</li>
        <li><strong>Respect the user's intent.</strong> Dropping sources that felt paywalled mattered more than maximizing raw listing count. Trust beats volume.</li>
        <li><strong>Build for one, design for many.</strong> Solving my own problem first kept the scope honest; adding multi-tenancy turned it into something others can actually use.</li>
      </ul>
    `,
  },
  {
    slug: "pw-teardown",
    tag: "Product Teardown",
    title: "Physics Wallah Teardown",
    subtitle: "How PW can own the EdTech AI race by fixing what users actually hate · 2026",
    blurb:
      "A full product teardown of Physics Wallah — India's fastest-growing EdTech app. Diagnosed why new users drop off in the first session, benchmarked PW against Unacademy and Testbook, and prioritised four fixes with RICE and MoSCoW, anchored to a North Star metric and OKRs.",
    metrics: [
      { value: "3", label: "Apps compared" },
      { value: "4", label: "Pain points diagnosed" },
      { value: "4", label: "Solutions RICE-scored" },
      { value: "3", label: "Personas mapped" },
    ],
    skills: [
      "Product Teardown",
      "Competitive Analysis",
      "User Personas",
      "RICE / MoSCoW",
      "North Star & OKRs",
      "Retention Strategy",
    ],
    deckUrl: "/PW-Product-Teardown-Shivangi-Pandita.pptx",
    content: `
      <h2>Executive Summary</h2>
      <p>Physics Wallah has 10M+ downloads and is the fastest-growing EdTech platform in India — yet new users drop off within the first session. This teardown diagnoses why, benchmarks PW against its two closest rivals, and proposes a prioritised set of fixes to repair first-session retention before a user ever hits a paywall.</p>
      <blockquote><strong>The thesis:</strong> PW has the reach, the affordability, and — uniquely — a working AI assistant. The only thing missing is using what it already knows about the user. Fix onboarding, reduce overwhelm, and make the AI context-aware, and PW wins the EdTech AI race.</blockquote>

      <h2>Problem Statement</h2>
      <ul>
        <li><strong>Value after the paywall:</strong> PW lands users directly on paid batch pages before they experience any product value, causing early abandonment.</li>
        <li><strong>A blind differentiator:</strong> PW's AI assistant is a genuine edge over competitors — but it answers without using the user's study context, delivering irrelevant responses.</li>
        <li><strong>Onboarding gaps:</strong> basic profile features (like gender selection) are missing, and the home screen is too overwhelming for a first-time user to navigate.</li>
      </ul>
      <p><strong>Goal:</strong> fix D1 retention by improving onboarding, reducing overwhelm, and making the AI assistant context-aware — so users see value before they see a paywall.</p>

      <h2>The Arena — India's EdTech Market</h2>
      <div class="table-wrap"><table>
        <tr><th>Signal</th><th>Value</th><th>Why it matters</th></tr>
        <tr><td>Total EdTech market (2025)</td><td><strong>$7.5B</strong></td><td>Large, fast-growing prize</td></tr>
        <tr><td>Students in India (K-12 + Higher Ed)</td><td><strong>450M+</strong></td><td>Enormous addressable base</td></tr>
        <tr><td>EdTech users from Tier 2 &amp; 3 cities</td><td><strong>60%</strong></td><td>PW's core, budget-sensitive user</td></tr>
        <tr><td>Growth in online exam prep (2022–25)</td><td><strong>2.8x</strong></td><td>Demand is accelerating</td></tr>
      </table></div>
      <blockquote><strong>Key insight:</strong> PW's core user — an affordable exam aspirant from Tier 2/3 India — is mobile-first, budget-sensitive, and overwhelmed by choice. They don't need more content. They need structure, guidance, and confidence. PW has the reach; the gap is in the experience.</blockquote>

      <h2>User Personas</h2>
      <div class="table-wrap"><table>
        <tr><th>Persona</th><th>Who</th><th>Frustration</th><th>What they want</th></tr>
        <tr><td><strong>Jatin</strong></td><td>17, Delhi (Tier 1) · JEE Main + Advanced</td><td>Studying for boards AND JEE — time is his scarcest resource</td><td>"I have 4 hours a day. I can't waste even 10 mins figuring out where to start."</td></tr>
        <tr><td><strong>Surbhi</strong></td><td>20, Pune (Tier 2) · NEET (2nd attempt)</td><td>Failed once; obsessively compares resources but can't commit</td><td>"I've tried 3 apps. They all feel the same. I just want someone to guide me."</td></tr>
        <tr><td><strong>Ria</strong></td><td>25, Ahmedabad (Tier 2) · UPSC</td><td>Working full-time; too many resources, no structure</td><td>"I have 2 hours every morning. Tell me exactly what to do in those 2 hours."</td></tr>
      </table></div>

      <h2>User Pain Points</h2>
      <ul>
        <li><strong>Wrong first screen:</strong> after login, users land directly on paid batches before seeing any value — aggressive monetization before trust is built. Hits Jatin &amp; Ria hardest; they open the app to study, not to buy.</li>
        <li><strong>Overwhelming home screen:</strong> too many tabs, sections, and banners on one screen with no guided path. Hits everyone, especially an already-confused Surbhi.</li>
        <li><strong>Context-blind AI assistant:</strong> a user personalizes for UPSC, asks a NEET question, and the AI answers without acknowledging the mismatch. No context-switch flow exists. Hits Surbhi and Ria, who rely on the AI for guidance.</li>
        <li><strong>No profile customization:</strong> the default profile icon is male with no option to change gender or edit preferences after onboarding — a representation gap that directly hits female users, who are 50%+ of PW's NEET base.</li>
      </ul>

      <h2>Competitive Analysis — PW vs Unacademy vs Testbook</h2>
      <div class="table-wrap"><table>
        <tr><th>Feature</th><th>Physics Wallah</th><th>Unacademy</th><th>Testbook</th></tr>
        <tr><td>First screen</td><td>Paid batches (no choice)</td><td>Choice: Explore or Buy</td><td>Offer page + trial CTA</td></tr>
        <tr><td>User control</td><td>Partial — can navigate away</td><td>Yes — upfront choice</td><td>Partial — back to home</td></tr>
        <tr><td>Home screen</td><td>Very overwhelming</td><td>Less cluttered, crisp tabs</td><td>Fewer tabs, confusing names</td></tr>
        <tr><td>AI assistant</td><td>✓ Exists, good intro</td><td>✗ Not available</td><td>✓ Exists, broken UI</td></tr>
        <tr><td>Context-aware AI</td><td>✗ Answers out of context</td><td>N/A</td><td>✗ Same problem as PW</td></tr>
        <tr><td>Trial option</td><td>✗ Not available</td><td>✗ Not available</td><td>✓ 1–2 day trial</td></tr>
        <tr><td>Profile edit</td><td>✗ Wrong gender icon / no edit</td><td>Default user icon</td><td>Icon by first letter</td></tr>
      </table></div>

      <h3>Key competitive insights</h3>
      <ul>
        <li><strong>PW's AI is a real differentiator.</strong> Neither rival has a properly working AI assistant — PW has one and introduces it well. This is its biggest current advantage.</li>
        <li><strong>Nobody has solved context-aware AI.</strong> All three answer out-of-context questions without checking intent. Whoever fixes this first wins the AI PM race in EdTech India.</li>
        <li><strong>Unacademy wins on information architecture.</strong> Giving users a first-screen choice (Explore vs Buy) feels more respectful of intent than dumping them into paid batches.</li>
        <li><strong>Testbook wins on trial strategy.</strong> A 1–2 day free trial is smart, low-friction conversion — neither PW nor Unacademy offers it.</li>
      </ul>

      <h2>Solutions</h2>
      <p><span class="phase phase-1">S1 — Context-Aware Study Switch</span><br/>When a user asks about a different exam, the AI first confirms intent, offers to switch context, asks why, answers, then offers to return to the original session. <em>Lifts AI session depth, answer relevance, and D7 retention.</em></p>
      <p><span class="phase phase-2">S2 — Guided First Screen</span><br/>Show a choice screen after login — "Continue studying" vs "Explore courses" — mirroring Unacademy but with PW's stronger personalization. <em>Cuts D1 drop-off; improves paid-conversion quality.</em></p>
      <p><span class="phase phase-3">S3 — Simplified Home Architecture</span><br/>Reduce primary tabs to three — Study, Tests, Ask AI — move secondary content behind "More", and give every user a "Today's Plan" card up top. <em>Reduces time-to-first-action; deepens sessions.</em></p>
      <p><span class="phase phase-1">S4 — Free Trial Option</span><br/>Offer a 2-day full-access trial for first-time users, gated behind a phone number, with a clear countdown and a day-2 conversion nudge. <em>Lifts paid conversion and acquisition quality.</em></p>

      <h2>Prioritization — RICE Framework</h2>
      <div class="table-wrap"><table>
        <tr><th>Solution</th><th>Reach</th><th>Impact</th><th>Confidence</th><th>Effort</th><th>RICE</th><th>Priority</th></tr>
        <tr><td>Context-Aware AI (S1)</td><td>8</td><td>5</td><td>85%</td><td>3</td><td><strong>11.3</strong></td><td>#1</td></tr>
        <tr><td>Guided First Screen (S2)</td><td>8</td><td>4</td><td>70%</td><td>2</td><td><strong>11.2</strong></td><td>#2</td></tr>
        <tr><td>Simplified Home (S3)</td><td>9</td><td>4</td><td>75%</td><td>3</td><td><strong>9.0</strong></td><td>#3</td></tr>
        <tr><td>Free Trial (S4)</td><td>7</td><td>3</td><td>70%</td><td>2</td><td><strong>7.35</strong></td><td>#4</td></tr>
      </table></div>
      <p><strong>MoSCoW:</strong> <strong>Must</strong> — Context-Aware AI (S1); <strong>Should</strong> — Guided First Screen (S2); <strong>Could</strong> — Simplified Home (S3); <strong>Won't (now)</strong> — Free Trial (S4), which needs business-model alignment first.</p>

      <h2>North Star Metric &amp; OKRs</h2>
      <blockquote><strong>North Star:</strong> Daily Active Learners completing at least one full study session.</blockquote>
      <p><strong>O1 — Improve first-session retention</strong></p>
      <ul>
        <li>KR1.1 — Increase D1 retention by +15 points within 90 days</li>
        <li>KR1.2 — Reduce time-to-first-study-action to under 2 minutes</li>
        <li>KR1.3 — Increase % of new users who reach the "Explore" tab in their first session by 40%</li>
      </ul>
      <p><strong>O2 — Make the AI assistant the #1 reason users stay</strong></p>
      <ul>
        <li>KR2.1 — Increase average AI session depth (messages per session) by 60%</li>
        <li>KR2.2 — Achieve 80%+ answer-relevance rate (thumbs-up signal) for AI responses</li>
        <li>KR2.3 — Users who engage with AI retain at 2x the rate of non-AI users (D30)</li>
      </ul>

      <h2>The Takeaway</h2>
      <p>Physics Wallah has the reach, the affordability, and now the AI. The only thing missing is using what it already knows about the user — turning a content library into a guided, context-aware learning experience that earns trust before it asks for money.</p>
    `,
  },
  {
    slug: "focus-tribe",
    tag: "0→1 Product",
    title: "Focus Tribe",
    subtitle: "Collaborative productivity platform · Jan 2026 – Present · focustribe.in",
    blurb:
      "Built a habit-tracking platform combining real-time task management, Pomodoro focus sessions, and structured self-reflection — all visible to your accountability circle. Led product strategy from 0→1.",
    metrics: [
      { value: "14", label: "Features shipped" },
      { value: "3", label: "Phases" },
      { value: "40+", label: "User interviews" },
      { value: "120+", label: "Beta users" },
    ],
    skills: [
      "Product Strategy",
      "User Research",
      "JTBD",
      "Roadmapping",
      "Competitive Analysis",
      "Feature Prioritization",
    ],
    content: `
      <h2>Executive Summary</h2>
      <p>Focus Tribe is a collaborative productivity platform that combines real-time task management, Pomodoro focus sessions, and structured self-reflection — all visible to your accountability circle.</p>
      <p>It was born from a simple frustration: existing productivity tools force users to juggle 3–4 separate apps for tasks, focus timers, journaling, and team accountability. Focus Tribe brings it all into one place, with the social layer that makes progress feel real.</p>
      <blockquote><strong>The core insight:</strong> Solo productivity apps fail because there's no social consequence for ignoring tasks. By making work visible to people you care about, Focus Tribe turns productivity from a private struggle into a shared journey.</blockquote>

      <h2>The Problem Space</h2>
      <h3>Three recurring pain points from 40+ user interviews</h3>
      <ul>
        <li><strong>App-Hopping Fatigue:</strong> Users juggled Todoist for tasks, Forest for focus, a journaling app for reflection, and group chats for accountability. Each context switch costs cognitive energy.</li>
        <li><strong>Solo Accountability Doesn't Work:</strong> No built-in mechanism for friends or teammates to see your progress, offer encouragement, or create gentle social pressure.</li>
        <li><strong>Productivity Feels Like a Black Box:</strong> Users complete tasks and run focus sessions but have no way to see patterns over time — what's helping them focus or whether they're improving.</li>
      </ul>

      <h2>User Personas</h2>
      <div class="table-wrap"><table>
        <tr><th>Persona</th><th>Who</th><th>Core Need</th><th>Frustration</th></tr>
        <tr><td><strong>The Accountability Seeker</strong></td><td>College student / early professional, 18–25</td><td>Someone to keep them honest about goals</td><td>"I set goals and forget them because nobody's watching"</td></tr>
        <tr><td><strong>The All-in-One Optimizer</strong></td><td>Freelancer / remote worker, 22–30</td><td>One tool instead of five</td><td>"I waste 10 minutes every morning switching between apps"</td></tr>
        <tr><td><strong>The Reflective Builder</strong></td><td>Self-improvement enthusiast, 20–28</td><td>Evidence that effort is compounding</td><td>"I work hard but can't tell if I'm actually getting better"</td></tr>
      </table></div>

      <h2>Jobs-to-be-Done</h2>
      <ul>
        <li><strong>Job #1 — Accountability:</strong> "Help me stay accountable by making my work visible to people I care about." The real aspiration: <em>"Make me the kind of person who follows through."</em></li>
        <li><strong>Job #2 — Consolidation:</strong> "Give me one place for everything so I stop app-hopping." Driven by frustration with fragmented workflows and decision fatigue.</li>
        <li><strong>Job #3 — Growth Evidence:</strong> "Show me I'm improving so I keep going." Users need proof that effort is compounding, not just busy work.</li>
      </ul>

      <h2>Competitive Landscape</h2>
      <p>The key strategic insight: <strong>no other product combines real-time collaborative task management + focus sessions + structured self-reflection in one platform.</strong></p>
      <div class="table-wrap"><table>
        <tr><th>Competitor</th><th>Tasks</th><th>Focus</th><th>Reflection</th><th>Collaboration</th></tr>
        <tr><td>Todoist</td><td>★★★★★</td><td>✗</td><td>✗</td><td>Basic</td></tr>
        <tr><td>TickTick</td><td>★★★★★</td><td>★★★</td><td>✗</td><td>Basic</td></tr>
        <tr><td>Forest</td><td>✗</td><td>★★★★★</td><td>✗</td><td>Group planting</td></tr>
        <tr><td>Notion</td><td>★★★★</td><td>✗</td><td>★★★</td><td>★★★★★</td></tr>
        <tr><td><strong>Focus Tribe</strong></td><td><strong>★★★★</strong></td><td><strong>★★★★</strong></td><td><strong>★★★★★</strong></td><td><strong>★★★★</strong></td></tr>
      </table></div>
      <blockquote><strong>The "Only Focus Tribe" Test:</strong> before building any feature, we asked — "does this strengthen what ONLY Focus Tribe can do, or does it just copy a competitor?" This filter shaped every prioritization decision.</blockquote>

      <h2>Phased Delivery Strategy</h2>
      <p><span class="phase phase-1">Phase 1 — Quick Wins</span><br/>Core task management: priority levels, task categories, subtasks with progress tracking, persistent timer bar.</p>
      <p><span class="phase phase-2">Phase 2 — Core Differentiators</span><br/>Pomodoro break system, focus time analytics with charts, groundwork for gamification.</p>
      <p><span class="phase phase-3">Phase 3 — Social Moat</span><br/>Live focus status, team leaderboards, Productivity Journal, recurring tasks, keyboard shortcuts, time-block scheduling.</p>

      <h2>Prioritization (JTBD Impact × Effort)</h2>
      <div class="table-wrap"><table>
        <tr><th>Feature</th><th>Job</th><th>Impact</th><th>Effort</th><th>Status</th></tr>
        <tr><td>Real-time task sync</td><td>Accountability</td><td>Very High</td><td>High</td><td>✅ Shipped</td></tr>
        <tr><td>Pomodoro timer + breaks</td><td>Consolidation</td><td>High</td><td>Medium</td><td>✅ Shipped</td></tr>
        <tr><td>Productivity Journal</td><td>Growth</td><td>Very High</td><td>High</td><td>✅ Shipped</td></tr>
        <tr><td>Live focus status</td><td>Accountability</td><td>High</td><td>Medium</td><td>✅ Shipped</td></tr>
        <tr><td>Team leaderboard</td><td>Accountability</td><td>Medium</td><td>Low</td><td>✅ Shipped</td></tr>
        <tr><td>Focus Garden activation</td><td>Growth</td><td>Very High</td><td>Low</td><td>🔜 Next</td></tr>
        <tr><td>Weekly report card</td><td>Growth</td><td>High</td><td>Low</td><td>🔜 Planned</td></tr>
      </table></div>

      <h2>Key Metrics Framework</h2>
      <ul>
        <li><strong>Activation:</strong> users who create a task within first session — target &gt;80%</li>
        <li><strong>Engagement:</strong> focus sessions per user per week — target &gt;5</li>
        <li><strong>Retention:</strong> weekly active users returning next week — target &gt;40%</li>
        <li><strong>Collaboration:</strong> users in teams of 2+ — target &gt;60% of active users</li>
        <li><strong>Depth:</strong> reflection entries per user per week — target &gt;2</li>
      </ul>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Emotional features drive retention more than functional ones.</strong> Shipping 14 features made Focus Tribe complete, but the app remained "emotionally flat." The highest-leverage next features make progress feel alive.</li>
        <li><strong>The "Only Us" test is the most powerful prioritization filter.</strong> It prevented feature creep and kept development focused.</li>
        <li><strong>Real-time sync is the foundation, not the feature.</strong> Users don't notice real-time updates — they notice when things don't sync.</li>
        <li><strong>Ship the platform, then ship the emotion.</strong> Phase 1–2 built credibility. Phase 3+ builds love. Both are necessary, in that order.</li>
      </ul>
    `,
  },
  {
    slug: "public-loan-management",
    tag: "Real-World BA + PM",
    title: "Public Loan Management",
    subtitle: "Barnstable County Community Septic Loan Program · 7 months",
    blurb:
      "Transformed a manual, paper-heavy public loan program into a streamlined Salesforce platform for homeowners and county staff.",
    metrics: [
      { value: "60%", label: "Faster processing" },
      { value: "80%", label: "Fewer errors" },
      { value: "100%", label: "Real-time visibility" },
      { value: "4", label: "User personas" },
    ],
    skills: [
      "Stakeholder Management",
      "Salesforce",
      "Process Design",
      "User Research",
      "Workflow Automation",
    ],
    content: `
      <h2>Overview &amp; Goal</h2>
      <p>Barnstable County's Community Septic Management Loan Program ran entirely on paper — homeowners submitted physical applications, coordinators tracked progress in spreadsheets, and everyone communicated through phone calls and emails. The goal: transform this into a streamlined, end-to-end Salesforce platform.</p>
      <blockquote><strong>Product Vision:</strong> enable homeowners to easily apply for septic repair/replacement loans while empowering county staff with automation, transparency, and compliance tracking.</blockquote>

      <h2>Understanding the Users — 4 Personas</h2>
      <div class="table-wrap"><table>
        <tr><th>Persona</th><th>Role</th><th>Core Need</th><th>Pain Point (Old Process)</th></tr>
        <tr><td><strong>Sarah</strong></td><td>Homeowner</td><td>Simple online portal to apply, upload docs, track status</td><td>Manual paper forms, no status visibility — "total black box"</td></tr>
        <tr><td><strong>David</strong></td><td>Program Coordinator</td><td>Central system to review applications and manage workloads</td><td>Scattered paper files, manual spreadsheet tracking, duplicate follow-ups</td></tr>
        <tr><td><strong>Maria</strong></td><td>Technical Reviewer</td><td>Easy access to proposals and supporting context</td><td>Communication gaps, manual file transfers</td></tr>
        <tr><td><strong>Robert</strong></td><td>County Manager</td><td>High-level dashboards for program health and compliance</td><td>Dependence on manual, time-consuming reports</td></tr>
      </table></div>

      <h2>Problem Prioritization</h2>
      <div class="table-wrap"><table>
        <tr><th>Problem</th><th>Alignment</th><th>Importance</th><th>Frequency</th></tr>
        <tr><td>Manual &amp; fragmented process</td><td>High</td><td>High</td><td>High</td></tr>
        <tr><td>Limited transparency for homeowners</td><td>High</td><td>High</td><td>High</td></tr>
        <tr><td>Lack of communication between departments</td><td>High</td><td>High</td><td>Medium</td></tr>
        <tr><td>Difficulty in document verification</td><td>High</td><td>Medium</td><td>High</td></tr>
        <tr><td>Manual billing &amp; compliance tracking</td><td>High</td><td>Medium</td><td>Medium</td></tr>
      </table></div>

      <h2>Solutions Designed</h2>
      <h3>1 — Salesforce Experience Cloud Portal (P1)</h3>
      <ul>
        <li>Public-facing portal for homeowners to apply, upload documents, and track application status</li>
        <li>Self-service contract viewing, payments, and amortization schedules</li>
      </ul>
      <h3>2 — Automated Workflow Engine (P2)</h3>
      <ul>
        <li>Status updates automatically trigger notifications to all stakeholders</li>
        <li>Built-in review checklists for program coordinators</li>
        <li>Technical review requests auto-generated for flagged applications</li>
      </ul>
      <h3>3 — Loan &amp; Billing Automation (P3)</h3>
      <ul>
        <li>Integration with Tyler Munis for billing and payment reconciliation</li>
        <li>Amortization schedules auto-generated post-approval</li>
        <li>Overdue payment automation and status tracking</li>
      </ul>
      <h3>4 — Dashboards &amp; Reporting (P4)</h3>
      <ul>
        <li>County managers get visual dashboards showing pipeline, funds disbursed, and compliance rates</li>
      </ul>

      <h2>Measured Impact</h2>
      <ul>
        <li><strong>Application turnaround time</strong> reduced by 60%</li>
        <li><strong>Manual data entry errors</strong> decreased by 80%</li>
        <li><strong>100% of loans</strong> now trackable in real-time via dashboards</li>
        <li><strong>100% of key milestones</strong> trigger automated email/SMS notifications</li>
        <li>Homeowners report clarity and ease of use; county staff report improved coordination and simplified compliance audits</li>
      </ul>
    `,
  },
  {
    slug: "rapido-jammu",
    tag: "GTM Strategy",
    title: "Launching Rapido in Jammu",
    subtitle: "Marketplace & chicken-and-egg problem · 1-week case study",
    blurb:
      "A phased go-to-market strategy for launching a bike-taxi service in a new city — solving the supply-demand cold-start problem with a geofenced MVP.",
    metrics: [
      { value: "902%", label: "Projected ROI" },
      { value: "1.2yr", label: "Break-even" },
      { value: ">90%", label: "Match rate goal" },
      { value: "4", label: "Phases" },
    ],
    skills: [
      "GTM Strategy",
      "Marketplace Dynamics",
      "User Research",
      "Roadmapping",
      "Financial Analysis",
    ],
    content: `
      <h2>The Problem</h2>
      <p>Jammu lacks reliable, affordable app-based transport. Autos charge whatever they want, students struggle with daily commute costs, and tourists get overcharged at stations. Rapido wants to launch its bike-taxi service in this new city — but faces the classic marketplace challenge.</p>
      <blockquote><strong>The #1 Priority Problem — Liquidity.</strong> You can't get Riders without Captains, and you can't get Captains without Riders. If a Rider opens the app and sees "No bikes available," they delete the app and never return.</blockquote>

      <h2>Understanding the Two Sides</h2>
      <h3>The Rider (Demand)</h3>
      <ul>
        <li><strong>Students</strong> at Jammu University, GCET, MIET — price-sensitive daily commuters</li>
        <li><strong>Office commuters</strong> traveling to Trikuta Nagar, Bahu Plaza — time-sensitive</li>
        <li><strong>Tourists</strong> arriving at Jammu Tawi Railway Station — vulnerable to overcharging</li>
      </ul>
      <h3>The Captain (Supply)</h3>
      <ul>
        <li><strong>Underemployed youth</strong> — bike + smartphone, looking for supplemental income</li>
        <li><strong>Gig workers</strong> (Zomato/Swiggy riders) filling empty time between orders</li>
      </ul>

      <h2>Phased Launch Strategy</h2>
      <p><span class="phase phase-1">Phase 1 (Q1) — MVP Launch Zone</span></p>
      <ul>
        <li><strong>Geofenced launch:</strong> not citywide — only a 5km radius around Jammu University (Gandhi Nagar, Trikuta Nagar, Bahu Plaza). Concentrates all Captains in one zone.</li>
        <li><strong>Supply first:</strong> first 2 weeks, onboard Captains only — with guaranteed minimum earnings (₹500/day) before any rider marketing.</li>
        <li><strong>Hyperlocal marketing:</strong> "First Ride Free" QR codes distributed only at university and coaching-center gates.</li>
        <li><strong>Bike-only launch:</strong> no Auto category yet — avoids union conflict and establishes a new, cheaper category.</li>
      </ul>
      <p><span class="phase phase-2">Phase 2 (Q2) — Scale &amp; Build Trust</span></p>
      <ul>
        <li>Market safety features aggressively: 24/7 ride tracking, Share My Ride, SOS button</li>
        <li>Approach auto unions as partners — show demand data, onboard them as a new Auto category</li>
        <li>Expand geofence to Janipur, Talab Tillo, Old City once 100+ active Captains established</li>
      </ul>
      <p><span class="phase phase-3">Phase 3 (Q3–Q4) — Capture Full Market</span></p>
      <ul>
        <li>Fixed-price tourist packages (e.g., "Jammu Station → Raghunath Temple")</li>
        <li>Rapido-Local (package delivery) and Rapido-Food to maximize Captain earnings</li>
      </ul>

      <h2>SWOT Analysis</h2>
      <div class="table-wrap"><table>
        <tr><th>Strengths</th><th>Opportunities</th></tr>
        <tr><td>First proper bike-taxi service in Jammu — first-mover advantage</td><td>Huge student population needing affordable daily transport</td></tr>
        <tr><td>Bikes much cheaper than autos in a price-sensitive market</td><td>Consistent tourist/pilgrim crowd exploited by current auto pricing</td></tr>
        <tr><td>Bikes navigate narrow, crowded streets faster</td><td>High smartphone + UPI adoption reduces friction</td></tr>
        <tr><th>Weaknesses</th><th>Threats</th></tr>
        <tr><td>Classic supply-demand cold start at launch</td><td>Auto union pushback and potential Captain harassment</td></tr>
        <tr><td>Low brand awareness in smaller cities</td><td>Unclear J&amp;K transport regulations for bike taxis</td></tr>
        <tr><td>Female rider hesitation on bikes</td><td>Harsh winters and monsoons affecting seasonal demand</td></tr>
      </table></div>

      <h2>North Star Metrics by Phase</h2>
      <ul>
        <li><strong>Phase 1 — Match Rate &gt;90%:</strong> % of ride requests successfully matched with a Captain</li>
        <li><strong>Phase 1:</strong> rider wait time &lt;5 minutes; 100+ active Captains in first 30 days</li>
        <li><strong>Phase 2 — Weekly Active Riders</strong> growing 20% week-over-week</li>
        <li><strong>Phase 2 — Retention:</strong> % of new riders booking a 2nd ride within 7 days</li>
      </ul>

      <h2>Financial Summary</h2>
      <div class="table-wrap"><table>
        <tr><th>Year</th><th>Investment (INR)</th><th>Revenue (INR)</th></tr>
        <tr><td>Year 0 (Setup)</td><td>₹41.5 lakh</td><td>—</td></tr>
        <tr><td>Year 1</td><td>₹2.49 crore</td><td>₹3.73 crore</td></tr>
        <tr><td>Year 2</td><td>—</td><td>₹10.79 crore</td></tr>
        <tr><td><strong>Break-even</strong></td><td colspan="2"><strong>1.2 years · ROI 902%</strong></td></tr>
      </table></div>
    `,
  },
  {
    slug: "jira-core-ui",
    tag: "Product Analysis",
    title: "Improving Jira's Core UI",
    subtitle: "Atlassian Jira — reducing friction for daily users · 1-week analysis",
    blurb:
      "Identified high-friction pain points for daily users and proposed a Quick-Action Menu MVP targeting a 50% reduction in time-to-action — without disrupting power users.",
    metrics: [
      { value: "50%", label: "Faster actions (target)" },
      { value: "15%", label: "CSAT improvement" },
      { value: "3", label: "Core daily actions" },
      { value: "1", label: "MVP feature" },
    ],
    skills: [
      "Product Thinking",
      "UX Analysis",
      "Persona Development",
      "Prioritization",
      "KPI Design",
    ],
    content: `
      <h2>The Product &amp; Problem</h2>
      <p>Jira is an industry-standard B2B project management tool — highly customizable for complex workflows. Its main strength is configurability. Its main weakness? For <em>daily users</em> (developers, BAs, QA testers), simple actions like "move this ticket to Done" require navigating multiple menus, screens, and dropdowns.</p>
      <blockquote><strong>The problem in one line:</strong> Jira is optimized for <em>configuration</em>, not <em>daily use</em>.</blockquote>

      <h2>Two Distinct User Segments</h2>
      <h3>The Power User (Project Manager / Scrum Master)</h3>
      <ul>
        <li>Sets up projects, creates backlogs, defines workflows, builds reports for leadership</li>
        <li>Needs custom fields, advanced JQL queries, reporting dashboards</li>
      </ul>
      <h3>The Daily User (Developer / BA / QA) ← who we solve for</h3>
      <ul>
        <li>Three core daily actions: see my tasks, change ticket status, re-assign a ticket</li>
        <li><em>"I spend 90% of my time doing 3 simple actions, but they're buried under 50 buttons I never use."</em></li>
      </ul>

      <h2>Friction Log — Problem Prioritization</h2>
      <div class="table-wrap"><table>
        <tr><th>Priority</th><th>Problem</th><th>Impact</th><th>Frequency</th></tr>
        <tr><td><strong>P0</strong></td><td>Slow status change — 3+ clicks to move a ticket to "Done"</td><td>High</td><td>Daily</td></tr>
        <tr><td><strong>P1</strong></td><td>Difficult re-assignment — open ticket → find field → type → select</td><td>High</td><td>Daily</td></tr>
        <tr><td><strong>P1</strong></td><td>Confusing navigation — sidebar full of options daily users never need</td><td>Medium</td><td>High</td></tr>
        <tr><td><strong>P2</strong></td><td>Cluttered ticket view — 30+ fields when users care about 3</td><td>Medium</td><td>Medium</td></tr>
      </table></div>

      <h2>Solutions Evaluated</h2>
      <div class="table-wrap"><table>
        <tr><th>Priority</th><th>Solution</th><th>Pros</th><th>Cons</th></tr>
        <tr><td><strong>P1 ✅</strong></td><td>Quick-Action Menu (MVP)</td><td>Solves P0 + P1 with one non-breaking feature</td><td>Adds another UI element</td></tr>
        <tr><td>P2</td><td>Role-based "Simple Mode" toggle</td><td>Dream solution — hides complexity</td><td>Massive engineering effort</td></tr>
        <tr><td>P3</td><td>Redesign the Kanban board</td><td>Could simplify drag-and-drop</td><td>High risk of backlash from trained users</td></tr>
        <tr><td>P4</td><td>Better onboarding / tutorials</td><td>Low engineering effort</td><td>Teaches users to use a slow UI — doesn't fix the root problem</td></tr>
      </table></div>

      <h2>The MVP: Quick-Action Menu</h2>
      <p>When a daily user <strong>hovers over any ticket</strong> on the main board, a small contextual menu appears with exactly three options:</p>
      <ul>
        <li><strong>Assign to me</strong> — 1 click</li>
        <li><strong>Change status to:</strong> In Progress / In Testing / Done — 1 click</li>
        <li><strong>Add a comment</strong> — 1 click</li>
      </ul>
      <blockquote><strong>Why this is the right MVP:</strong> high-impact (solves the two most frequent pain points), low-risk (power users can ignore it), and testable on a single segment before building "Simple Mode."</blockquote>

      <h2>Success Metrics</h2>
      <ul>
        <li><strong>North Star — Time-to-Action:</strong> average seconds to change a ticket's status. Hypothesis: 50% reduction.</li>
        <li><strong>Feature adoption:</strong> % of daily users using the menu in their first week</li>
        <li><strong>CSAT</strong> — "How easy is it to update your tasks in Jira?" Goal: +15%</li>
        <li><strong>Guardrail — support ticket rate:</strong> ensure the feature doesn't confuse power users</li>
      </ul>
    `,
  },
];

// Display order for the homepage — Focus Tribe leads.
const CASE_STUDY_ORDER = [
  "focus-tribe",
  "job-finder",
  "public-loan-management",
  "rapido-jammu",
  "jira-core-ui",
  "pw-teardown",
];

export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => CASE_STUDY_ORDER.indexOf(a.slug) - CASE_STUDY_ORDER.indexOf(b.slug),
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
