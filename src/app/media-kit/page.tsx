import Link from 'next/link';
import { site, ventures } from '@/data/site';

export default function MediaKit() {
  return <main className="media-kit">
    <Link className="media-back" href="/">← Back to site</Link>
    <p className="eyebrow"><i/> MEDIA KIT · {site.location.toUpperCase()}</p>
    <h1>{site.name}<br/><span>{site.designation}</span></h1>
    <section className="media-section"><p className="section-label"><span>01</span><span className="label-line"/><span>FOUNDER INTRODUCTION</span></p><p className="media-lead">{site.founderProfile}</p><p>{site.biography}</p></section>
    <section className="media-section"><p className="section-label"><span>02</span><span className="label-line"/><span>VENTURE OVERVIEW</span></p>{ventures.map(v=><article className="media-venture" key={v.id}><h2>{v.name}</h2><p>{v.role} · {v.type}</p><p>{v.intro}</p><small>{v.status}</small>{v.detail && <p className="media-venture-stage">{v.detail}</p>}</article>)}</section>
    <section className="media-section"><p className="section-label"><span>03</span><span className="label-line"/><span>AREAS OF INTEREST</span></p><p>Artificial intelligence, healthcare technology, digital products, business development and technology experimentation.</p></section>
    <section className="media-section"><p className="section-label"><span>04</span><span className="label-line"/><span>VERIFIED PROFILE LINKS &amp; CONTACT</span></p>{site.email ? <p><a href={`mailto:${site.email}`}>{site.email}</a></p> : <p>Professional email: to be confirmed.</p>}{site.socials.filter(s => s.published && s.href).map(s=><p key={s.label}><a href={s.href}>{s.label}</a></p>)}<p>Unpublished profile links are intentionally omitted until confirmed.</p></section>
  </main>;
}
