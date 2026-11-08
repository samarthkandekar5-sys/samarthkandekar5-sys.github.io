export type SocialProfile = { label: string; href: string; published: boolean };
export type ProductDirection = { id: 'patient' | 'clinic'; eyebrow: string; name: string; description: string; features: string[] };
export type Venture = {
  id: string; number: string; name: string; role: string; type: string; intro: string; detail: string;
  tags: string[]; mark: string; url: string; status: string; productDirections?: ProductDirection[];
};

export const site = {
  name: 'Samarth Kandekar',
  firstName: 'Samarth',
  lastName: 'Kandekar',
  designation: 'Founder & CEO · Building Technology Companies',
  domain: 'https://samarthkandekar.me',
  email: 'samarthkandekar5@gmail.com',
  location: 'India',
  age: 18,
  biography: 'Samarth Kandekar is the Founder & CEO of VelCura Health, an early-stage healthcare technology venture founded in October 2025. His interest in the problem began after seeing his mother navigate clinic visits for minor illnesses and the costs and uncertainty that can accompany care. He is exploring how thoughtful patient intake and clinician-facing workflows could make healthcare journeys more structured. Samarth is also a builder of AdFlow OS, an AI-assisted campaign operations product.',
  founderProfile: 'Founder & CEO of VelCura Health, building an early-stage healthcare technology venture around clearer patient intake and clinician-reviewed workflows. Based in Nagpur, India, Samarth works across applied AI, product strategy and company building.',
  education: 'Stanford Online — AI in Healthcare specialization; Aspire Institute — Cohort 4 Fellow.',
  mediaKitPath: '/media-kit',
  executiveProfilePath: '/Samarth-Kandekar-Executive-Profile.docx',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samarth-kandekar-38100b333', published: true },
    { label: 'Instagram', href: 'https://www.instagram.com/samarth_kandekar_patil', published: true },
    { label: 'X', href: 'https://x.com/samarthkan54702', published: true },
  ] satisfies SocialProfile[],
};

export const technologyFocus = [
  { id: 'ai', name: 'AI & Emerging Technology', shortName: 'AI & Emerging Tech', descriptor: 'Deploying applied intelligence over surface wrappers.', detail: 'Architecting production-grade AI systems, LLM orchestration, and full-stack software that compress manual latency in high-friction domains like healthcare and enterprise operations.' },
  { id: 'products', name: 'Venture Building', shortName: 'Venture Building', descriptor: 'Zero-to-one company architecture and execution.', detail: 'Taking high-conviction ideas from product thesis toward deployment-ready ventures—shaping team structures, validating clinical workflows, and navigating cross-border operations.' },
  { id: 'automation', name: 'Product & Business Strategy', shortName: 'Product & Business', descriptor: 'Engineering high-utility products with systemic moats.', detail: 'Aligning core technical architecture directly with user workflows and unit economics. Designing software that solves acute pain points while establishing long-term compounding enterprise value.' },
  { id: 'health', name: 'Growth & Market Development', shortName: 'Growth & Markets', descriptor: 'Autonomous distribution and high-deliverability pipelines.', detail: 'Building automated outbound infrastructure, algorithmic distribution pipelines, and performance systems that de-risk customer acquisition and generate predictable commercial momentum.' },
];

export const ventures: Venture[] = [
  {
    id: 'velcura', number: '01', name: 'VelCura Health', role: 'Founder & CEO', type: 'Healthcare technology',
    intro: 'An early-stage healthcare technology venture exploring connected patient intake and clinic workflows, with AI-assisted information organization for clinician review.',
    detail: 'Founded October 2025 · No paying customers or live clinical deployments to date.',
    tags: ['Patient experience', 'Clinical workflows', 'AI-assisted'], mark: 'V', url: 'https://velcura-health-ywh0rwh.gamma.site', status: 'PRODUCT CONCEPTS · IN DEVELOPMENT',
    productDirections: [
      { id: 'patient', eyebrow: '01 / FOR PEOPLE SEEKING CARE', name: 'VelCura Patient Platform', description: 'A considered starting point for care: share context, understand possible next steps and connect with registered doctors.', features: ['AI-assisted initial symptom assessment', 'Personal health history', 'Safety-first triage workflows', 'Doctor access and follow-up continuity', 'Pharmacy fulfilment envisioned through licensed partners'] },
      { id: 'clinic', eyebrow: '02 / FOR CARE TEAMS', name: 'VelCura Clinic Intelligence', description: 'A clearer information flow for clinics, from digital intake to structured records and clinician-reviewed summaries.', features: ['Digital patient intake', 'Structured medical history', 'AI-generated summaries for doctor review', 'Digital visit records', 'Clinic and hospital workflow exploration'] },
    ],
  },
  {
    id: 'adflow', number: '02', name: 'AdFlow OS', role: 'Builder', type: 'Autonomous marketing infrastructure',
    intro: 'An AI-assisted campaign operations product exploring brief intake, copy drafting and creative review workflows for growth teams and B2B agencies.',
    detail: '',
    tags: ['Campaign Orchestration', 'Workflow Automation', 'Variant Generation'], mark: 'A', url: 'https://www.adflowos.in/', status: 'PRODUCT EXPLORATION · EARLY DEVELOPMENT',
  },
];

export const founderStory = [
  'I am an entrepreneur focused on building technology ventures at the intersection of artificial intelligence, healthcare and business.',
  'My interest in healthcare technology emerged from observing the everyday challenges families face when navigating minor health concerns. That observation led to the exploration of VelCura Health in October 2025.',
  'Today, I lead VelCura Health as Founder & CEO, developing an early-stage vision for connected patient and clinical workflows. My work extends beyond product development into market research, business models, product strategy and venture building.',
  'Alongside VelCura, I explore AI-powered business workflows through Adflow OS. I continue to deepen my understanding of healthcare AI and entrepreneurship through structured learning and practical execution.',
];
