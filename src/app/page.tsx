import { ArrowDown, ArrowUpRight, ArrowUpRight as External, Braces, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { TechnologyLandscape } from '@/components/technology-landscape';
import { VelCuraShowcase } from '@/components/velcura-showcase';
import { OperatingMindset } from '@/components/operating-mindset';
import { ContactForm } from '@/components/contact-form';
import { founderStory, site, ventures } from '@/data/site';

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return <p className="section-overline"><span>{index}</span><i/>{children}</p>;
}

function AdflowStudy() {
  return <article className="adflow-study" id="adflow">
    <div className="adflow-copy">
      <span className="venture-index">02 / VENTURE · AUTONOMOUS MARKETING INFRASTRUCTURE</span>
      <div className="adflow-title-row"><span className="adflow-logo-crop"><Image src="/images/adflow-os-logo.png" alt="" aria-hidden="true" width={238} height={220} sizes="48px"/></span><h3>AdFlow OS</h3></div><p>{ventures[1].intro} {ventures[1].detail}</p>
      <div className="adflow-themes"><span>Campaign Orchestration</span><span>Algorithmic Workflows</span><span>High-Volume Output</span></div>
      <a className="quiet-link" href={ventures[1].url} target="_blank" rel="noreferrer">Visit Adflow OS <External size={16}/></a>
    </div>
    <div className="adflow-window" aria-label="Illustrative Adflow campaign workspace concept">
      <div className="mock-top"><span className="app-brand"><b>A</b> ADFLOW / WORKSPACE</span><span className="mock-chip">WORKSPACE OVERVIEW</span></div>
      <div className="adflow-window-body"><aside><small>YOUR WORKSPACE</small><span className="selected-nav">Campaigns</span><span>Brand voice</span><span>Assets</span><span>Settings</span></aside><div className="campaign-content"><small>CAMPAIGN GENERATOR</small><h4>From brief<br/>to first draft.</h4><div className="campaign-input"><span>What are we making?</span><i>Spring launch for an independent design studio</i><b>GENERATE DIRECTION <ArrowUpRight size={12}/></b></div><div className="campaign-result"><span>CAMPAIGN DIRECTION</span><strong>Good work.<br/><em>Less busywork.</em></strong><small>Illustrative concept screen</small></div></div></div>
    </div>
  </article>;
}

export default function Home() {
  return <><SiteHeader/><main id="top">
    <section className="hero" id="home">
      <div className="hero-grid"/><div className="hero-signal" aria-hidden="true"><div className="signal-ring ring-outer"/><div className="signal-ring ring-middle"/><div className="signal-ring ring-inner"/><div className="signal-core"><span>SK</span><i/></div><span className="signal-coordinate">IND / 18°</span></div>
      <figure className="hero-portrait"><div className="portrait-frame"><Image src="/images/samarth-kandekar-portrait.webp" alt="Samarth Kandekar, founder and CEO of VelCura Health" width={1254} height={1254} priority sizes="(max-width: 760px) 96px, (max-width: 1000px) 20vw, 22vw"/><i className="portrait-corner portrait-corner-a"/><i className="portrait-corner portrait-corner-b"/><i className="portrait-corner portrait-corner-c"/><i className="portrait-corner portrait-corner-d"/></div><figcaption>SAMARTH KANDEKAR · FOUNDER</figcaption></figure>
      <div className="hero-overline"><span className="hero-location">NAGPUR, INDIA · BUILDING TECHNOLOGY VENTURES</span></div>
      <div className="hero-name" data-reveal><h1><span>{site.firstName}</span><span>{site.lastName}<i>.</i></span></h1><div className="hero-subline"><p><strong>Founder &amp; CEO</strong> <span className="hero-company">· VelCura Health</span></p><ArrowDown size={18}/></div></div>
      <div className="hero-statement" data-reveal><span>01 / 06</span><div><h2>Building technology<br/><em>companies.</em></h2><p>Working at the intersection of artificial intelligence, healthcare and business — turning ambitious ideas into thoughtfully designed technology ventures.</p><div className="hero-actions"><a className="button-primary" href="#ventures">Explore my ventures <ArrowDown size={15}/></a><a className="button-secondary" href="#contact">Start a conversation <ArrowUpRight size={15}/></a></div></div><a className="hero-scroll" href="#about" aria-label="Scroll to About"><ArrowDown size={18}/></a></div>
    </section>

    <section className="about-section" id="about">
      <p className="section-overline"><i aria-hidden="true"/>THE FOUNDER — SAMARTH KANDEKAR</p>
      <div className="about-layout"><aside className="founder-identity"><div className="about-portrait"><Image src="/images/samarth-kandekar-portrait.webp" alt="Samarth Kandekar, founder and CEO of VelCura Health" width={1254} height={1254} sizes="(max-width: 760px) 36vw, 300px"/></div><div className="founder-meta"><strong>Founder &amp; CEO</strong><p>VelCura Health</p><span>NAGPUR · INDIA</span></div></aside><div className="about-story"><h2>Building with purpose.<br/><em>Thinking beyond products.</em></h2>{founderStory.map((paragraph, index)=><p key={index}>{paragraph}</p>)}<blockquote className="founder-philosophy"><span>FOUNDER PHILOSOPHY</span><p>Technology matters most when it solves a meaningful problem and creates lasting value.</p></blockquote><div className="about-links"><a href={site.mediaKitPath}>Founder profile &amp; media kit <ArrowUpRight size={15}/></a><a href={site.executiveProfilePath} download="Samarth-Kandekar-Executive-Profile.docx">Download Executive Profile <ArrowUpRight size={15}/></a></div></div></div>
    </section>

    <TechnologyLandscape/>
    <OperatingMindset/>

    <section className="ventures-section" id="ventures">
      <Eyebrow index="04">COMPANIES &amp; INITIATIVES</Eyebrow>
      <div className="ventures-heading"><h2>High-conviction ventures.<br/><em>Zero-to-one execution.</em></h2><p>VelCura Health is my flagship healthcare technology venture. AdFlow OS is a separate exploration of AI-assisted campaign operations.</p></div>
      <article className="velcura-feature" id="velcura">
        <div className="velcura-heading"><div><span className="venture-index">01 / FLAGSHIP VENTURE</span><div className="velcura-title-row"><span className="velcura-logo"><Image src="/images/velcura-health-logo.png" alt="" aria-hidden="true" width={569} height={439} sizes="(max-width: 760px) 46px, 82px"/></span><h3>VelCura <em>Health</em></h3></div><p>{ventures[0].intro}</p><small className="venture-stage-note">{ventures[0].detail}</small></div><a className="external-link" href={ventures[0].url} target="_blank" rel="noreferrer">Venture overview <ArrowUpRight size={16}/></a></div>
        <VelCuraShowcase/>
      </article>
      <AdflowStudy/>
    </section>

    <section className="contact-section" id="contact">
      <Eyebrow index="05">STRATEGIC CONVERSATIONS</Eyebrow>
      <div className="contact-layout"><div className="contact-intro"><h2>High-conviction discussions and <em>strategic ventures.</em></h2><p>Open to serious dialogues with founders, healthcare operators, clinical partners, and venture investors focused on applied AI deployment and enterprise expansion.</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={17}/></a><div className="contact-socials">{site.socials.filter(s => s.published).map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}<ArrowUpRight size={13}/></a>)}<a href={site.mediaKitPath}>Media kit<ArrowUpRight size={13}/></a></div></div><div className="contact-form-wrap"><div className="form-title"><span>01—04 / DIRECT MESSAGE</span><p>What would you like to discuss?</p></div><ContactForm/></div></div>
    </section>
  </main><footer className="site-footer"><a className="footer-brand" href="#home" aria-label="Samarth Kandekar, return to top"><span className="signature-mark" aria-hidden="true"/></a><span>© {new Date().getFullYear()} SAMARTH KANDEKAR</span><span>INDIA · BUILDING GLOBALLY</span></footer></>;
}
