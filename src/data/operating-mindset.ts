export const operatingAreas = [
  {
    id: 'business',
    title: 'Business thinking',
    note: 'Connect value creation to a durable model.',
    topics: ['Business model design', 'Value creation', 'Revenue models', 'Unit economics', 'Sustainable business models'],
  },
  {
    id: 'market',
    title: 'Market intelligence',
    note: 'Understand the landscape before choosing a direction.',
    topics: ['Market opportunity research', 'Customer segmentation', 'TAM · SAM · SOM', 'Competitive positioning', 'Market entry strategy', 'Distribution opportunities'],
  },
  {
    id: 'venture',
    title: 'Venture building',
    note: 'Move from a meaningful problem toward a focused product.',
    topics: ['Problem identification', 'Opportunity evaluation', 'Product strategy', 'MVP development', 'Validation and iteration', 'Scalable business systems'],
  },
  {
    id: 'execution',
    title: 'Strategic execution',
    note: 'Turn priorities into deliberate, sustained progress.',
    topics: ['Prioritisation', 'Resource allocation', 'Growth strategy', 'Partnerships', 'Customer acquisition', 'Long-term planning'],
  },
] as const;

export const decisionJournal = [
  {
    id: 'connected-directions', title: 'Why explore two connected product directions?',
    question: 'How might a patient-facing starting point connect with clinic-facing workflow support?',
    options: 'One broad experience; two separate products; or two focused directions designed around a shared care journey.',
    reasoning: 'Patients and care teams have different needs. Keeping the directions distinct can make those needs easier to understand while preserving a potential connection.',
    hypothesis: 'Explore a patient platform and clinic intelligence direction as complementary product concepts.',
    validation: 'Test workflow fit, user needs, and the practical value of connecting the two directions.',
  },
  {
    id: 'clinical-oversight', title: 'Why does healthcare AI need clinician oversight?',
    question: 'Where can AI assist without displacing clinical judgement?',
    options: 'Automated recommendations; workflow assistance with review; or non-clinical administrative support.',
    reasoning: 'Healthcare decisions carry real consequences. Clear review points and role boundaries are central to a responsible product direction.',
    hypothesis: 'Use AI to organise and summarise information for practitioner review, not as an autonomous diagnostician or prescriber.',
    validation: 'Review safety, usability, data governance, and clinical workflows with qualified practitioners.',
  },
  {
    id: 'clinic-software', title: 'Why do clinic workflows deserve dedicated software?',
    question: 'Can general-purpose tools support structured intake and visit preparation well enough?',
    options: 'Adapt general tools; build a focused workflow layer; or defer product investment until needs are clearer.',
    reasoning: 'Intake, history, review, and follow-up form a connected workflow that should be evaluated in its real care context.',
    hypothesis: 'Explore clinic-facing software around structured intake and clinician-reviewed information.',
    validation: 'Map actual workflows and test whether a focused tool improves clarity without adding burden.',
  },
  {
    id: 'recurring-value', title: 'How could a subscription create recurring value?',
    question: 'What ongoing value could support a recurring commercial relationship?',
    options: 'Subscription; usage-based pricing; service-supported model; or another approach shaped by the buyer and workflow.',
    reasoning: 'Pricing should follow durable customer value, delivery costs, and the real purchasing context.',
    hypothesis: 'A subscription is one model to explore, not a selected or validated pricing decision.',
    validation: 'Research buyer preferences, willingness to pay, cost to serve, and procurement requirements.',
  },
  {
    id: 'distribution', title: 'Why does distribution matter as much as product development?',
    question: 'How will the product reach and earn trust with the people it is designed for?',
    options: 'Direct outreach; partnerships; institutional channels; or a focused combination informed by research.',
    reasoning: 'A useful product still needs a credible path to adoption, implementation, and continued use.',
    hypothesis: 'Treat distribution and partnerships as part of product strategy from the beginning.',
    validation: 'Identify decision makers, buying paths, implementation constraints, and repeatable acquisition routes.',
  },
] as const;

export const ventureJourney = [
  { number: '01', title: 'Identify the problem', copy: 'Focus on patient intake friction and the demands of healthcare workflows.', status: 'Founded · Oct 2025' },
  { number: '02', title: 'Define the opportunity', copy: 'Explore how patient-facing and clinic-facing technology could work together.', status: 'Opportunity framing' },
  { number: '03', title: 'Design the product', copy: 'Shape two directions: VelCura Patient Platform and VelCura Clinic Intelligence.', status: 'Illustrative concepts' },
  { number: '04', title: 'Build the technology', copy: 'Develop AI-assisted intake, structured history, safety checks, and clinician-reviewed summaries.', status: 'Development focus' },
  { number: '05', title: 'Evaluate the business', copy: 'Explore customer segments, business models, distribution, and partnership paths.', status: 'Active exploration' },
  { number: '06', title: 'Validate and improve', copy: 'Gather feedback, run experiments, and iterate as the product and evidence develop.', status: 'Future validation' },
] as const;
