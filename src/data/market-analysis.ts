export const marketAnalysisTabs = [
  { id: 'sizing', label: 'Market sizing' },
  { id: 'segments', label: 'Customer segments' },
  { id: 'competition', label: 'Competitors' },
  { id: 'model', label: 'Business model' },
] as const;

export const marketSizing = [
  {
    area: 'India · TAM', value: '$10–$20 billion / year', kind: 'estimate', source: 'digitalHealthBenchmark',
    facts: ['Founder-provided range · broad India digital-health scope'],
    assumptions: ['Category definition and bottom-up sizing remain unverified'],
  },
  {
    area: 'India · SAM', value: '$1–$2 billion / year', kind: 'assumption', source: null,
    facts: ['Founder-provided serviceable-market range'],
    assumptions: ['Buyer scope, inclusion criteria, and derivation need validation'],
  },
  {
    area: '3-year · annual revenue target', value: '$50–$100 million / year', kind: 'hypothesis', source: null,
    facts: [],
    assumptions: ['Founder-set ambition · not achieved revenue or a forecast', 'Requires a separate scale plan beyond proposed per-facility SaaS prices'],
  },
] as const;

export const marketSources = {
  digitalHealthBenchmark: { label: 'Context only · GVR broad digital-health estimate, 2024', href: 'https://www.grandviewresearch.com/industry-analysis/india-digital-health-market-report' },
} as const;

export const customerSegments = {
  buyers: [
    { name: 'Independent clinics', fit: 'Initial customer hypothesis' },
    { name: 'Small and mid-sized hospitals', fit: 'Initial customer hypothesis' },
    { name: 'Multi-specialty clinics', fit: 'Potential buyer segment' },
    { name: 'Hospital outpatient departments', fit: 'Potential buyer segment' },
  ],
  users: ['Doctors and clinicians', 'Reception and clinical staff', 'Patients'],
  note: 'The person using a workflow may not be the person or organisation paying for it. Buyer, budget owner, and procurement path remain to be validated.',
} as const;

export const competitorLandscape = [
  {
    name: 'Practo Ray', category: 'Practice management',
    target: 'Doctors and clinics',
    capabilities: 'Appointments, EMR, billing, reminders.',
    overlap: 'Clinic records and intake.',
    source: 'Official product page', href: 'https://www.practo.com/providers/clinics/ray',
  },
  {
    name: 'HealthPlix', category: 'EMR · AI-assisted clinical software',
    target: 'Doctors, clinics, hospitals, and patients',
    capabilities: 'AI-enabled EMR, clinical assistance, patient app.',
    overlap: 'Clinical notes and AI assistance.',
    source: 'Official product page', href: 'https://www.healthplix.com/',
  },
  {
    name: 'Eka Care', category: 'EMR · connected health',
    target: 'Doctors, clinics, and patients',
    capabilities: 'Records, prescriptions, appointments, billing.',
    overlap: 'Patient and clinic workflow.',
    source: 'Official product page', href: 'https://www.eka.care/eka-for-doctors/emr-ehr-medical-software',
  },
  {
    name: 'MocDoc', category: 'Clinic and hospital management',
    target: 'Clinics, polyclinics, medical centres, and hospitals',
    capabilities: 'Visits, case sheets, billing, EMR, OP/IP.',
    overlap: 'Intake, history, and facility workflows.',
    source: 'Official product page', href: 'https://mocdoc.com/hospital/clinic-management-system',
  },
  {
    name: 'DocEngage', category: 'Practice management · EHR · HMS',
    target: 'Clinics, multi-specialty practices, and hospitals',
    capabilities: 'OPD/IPD, EHR, CRM, telehealth.',
    overlap: 'Connected clinical workflows.',
    source: 'Official solutions page', href: 'https://www.docengage.in/solutions',
  },
  {
    name: 'eSushrut HMIS', category: 'Hospital management information system',
    target: 'Hospitals; eSushrut@Clinic also addresses smaller providers',
    capabilities: 'HMIS, records, prescriptions, OPD.',
    overlap: 'Patient records and provider workflows.',
    source: 'MoHFW / NHA–C-DAC', href: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2156603&lang=2&reg=48',
  },
] as const;

export const businessModel = [
  { name: 'Clinic SaaS', price: '₹3,000–₹5,000 / month', payer: 'Clinic or practice owner', source: 'Recurring software subscription' },
  { name: 'Hospital SaaS', price: '₹15,000–₹30,000 / month', payer: 'Hospital / department budget owner', source: 'Recurring software subscription' },
  { name: 'Optional patient plan', price: '₹99–₹199 / month', payer: 'Patient, if a clear value case exists', source: 'Optional subscription hypothesis' },
  { name: 'Consultation / service fees', price: 'To be defined', payer: 'Patient or provider, depending on service', source: 'Per-consultation or service fee' },
  { name: 'Pharmacy partnerships', price: 'To be defined', payer: 'Licensed pharmacy partner / service arrangement', source: 'Fulfilment partnership hypothesis' },
] as const;

export const unitEconomicsToValidate = ['Payer and willingness to pay', 'Product delivery and support costs', 'Customer acquisition cost and sales cycle', 'Retention, contribution margin, and payback'] as const;
