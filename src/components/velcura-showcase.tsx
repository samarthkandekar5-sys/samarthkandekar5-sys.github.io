'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, ChevronDown, Circle, Clock3, FileText, HeartPulse, ShieldCheck, UserRound } from 'lucide-react';
import { ventures } from '@/data/site';
import { VentureJourney } from '@/components/venture-journey';

const velcura = ventures.find(item => item.id === 'velcura')!;

export function VelCuraShowcase() {
  const [activeId, setActiveId] = useState<'patient' | 'clinic'>('patient');
  const active = velcura.productDirections!.find(item => item.id === activeId)!;
  const isPatient = activeId === 'patient';
  const workflow = isPatient
    ? ['Patient', 'AI-assisted intake', 'Safety checks', 'Registered clinician', 'Follow-up']
    : ['Patient intake', 'Structured history', 'AI-generated summary', 'Doctor review', 'Digital visit record'];

  return <div className="velcura-showcase">
    <div className="velcura-showcase-top">
      <div><span className="concept-status"><i/> FLAGSHIP VENTURE · PRODUCT CONCEPTS IN DEVELOPMENT</span><h3>One care journey.<br/><em>Two connected views.</em></h3></div>
      <p>Illustrative patient and clinic workflows in development; no live clinical deployment is represented.</p>
    </div>
    <div className="product-switch" role="tablist" aria-label="VelCura product directions">
      {velcura.productDirections!.map((direction, index) => <button key={direction.id} role="tab" id={`tab-${direction.id}`} tabIndex={activeId === direction.id ? 0 : -1} aria-selected={activeId === direction.id} aria-controls="velcura-product-panel" onClick={() => setActiveId(direction.id)} onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          const nextId = direction.id === 'patient' ? 'clinic' : 'patient';
          setActiveId(nextId);
          document.getElementById(`tab-${nextId}`)?.focus();
        }
      }}><span>0{index + 1}</span>{direction.name}<i>{activeId === direction.id ? 'VIEWING' : 'OPEN'}</i></button>)}
    </div>
    <div className="product-stage" id="velcura-product-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
      <div className="product-screen-wrap">
        <div className={`product-screen ${isPatient ? 'patient-screen' : 'clinic-screen'}`}>
          <div className="screen-top"><div className="screen-brand"><Image src="/images/velcura-health-logo.png" alt="" aria-hidden="true" width={569} height={439} sizes="28px"/><span>VELCURA<small>SPREADING WELLNESS</small></span></div><span className="screen-mode">{isPatient ? 'PATIENT PLATFORM' : 'CLINIC INTELLIGENCE'}</span><span className="screen-avatar">{isPatient ? <UserRound size={17}/> : 'DR'}</span></div>
          {isPatient ? <div className="screen-patient-content">
            <div className="screen-greeting"><span className="screen-kicker">A CALMER START TO CARE</span><h4>Let&apos;s understand<br/>what&apos;s happening.</h4><p>Share a little about what you need. Your care team can review the information you choose to provide.</p></div>
            <div className="intake-card"><div className="intake-card-top"><span><Circle size={7} fill="currentColor"/> INITIAL INTAKE</span><span>STEP 01 / 03</span></div><div className="intake-progress"><i/></div><label>WHAT WOULD YOU LIKE SUPPORT WITH?</label><div className="intake-options"><span><HeartPulse size={17}/> I&apos;m feeling unwell <ArrowRight size={14}/></span><span><FileText size={17}/> Share health history <ArrowRight size={14}/></span><span><Clock3 size={17}/> Continue my care <ArrowRight size={14}/></span></div><div className="screen-privacy"><ShieldCheck size={15}/> Safety-first flow · clinician access when appropriate</div></div>
          </div> : <div className="screen-clinic-content">
            <aside className="clinic-rail"><b>WORKSPACE</b><span className="rail-active"><FileText size={15}/> Intake queue</span><span><UserRound size={15}/> Patient records</span><span><Clock3 size={15}/> Follow-ups</span><small>CLINIC TEAM</small><span><Circle size={8}/> Settings</span></aside>
            <div className="clinic-main"><div className="clinic-heading"><div><span className="screen-kicker">PATIENT INTAKE · FOR REVIEW</span><h4>Structured context.<br/>Ready for a conversation.</h4></div><span className="review-badge"><ShieldCheck size={14}/> Clinician review</span></div><div className="clinic-fields"><div><small>REASON FOR VISIT</small><p>Patient-provided information</p><Check size={14}/></div><div><small>HEALTH HISTORY</small><p>Structured intake responses</p><Check size={14}/></div><div><small>AI-ASSISTED SUMMARY</small><p>Draft summary prepared for the doctor to review before the visit.</p><span className="ai-pill">REVIEW REQUIRED</span></div></div><div className="clinic-foot"><span>NOT FOR AUTONOMOUS DIAGNOSIS</span><span>SUMMARY · DRAFT</span></div></div>
          </div>}
        </div>
        <div className="screen-caption"><span>CLINICAL WORKFLOW</span><span>{active.eyebrow}</span></div>
      </div>
      <div className="product-info"><span className="product-eyebrow">{active.eyebrow}</span><h4>{active.name}</h4><p>{active.description}</p><ul>{active.features.map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul></div>
      <details className="product-more-mobile"><summary>More product capabilities <ChevronDown size={17}/></summary><ul>{active.features.slice(3).map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul></details>
    </div>
    <div className="care-flow" aria-label={`${active.name} workflow`}><span className="care-flow-label">{isPatient ? 'PATIENT WORKFLOW' : 'CLINIC WORKFLOW'}</span><div className="care-flow-steps">{workflow.map((step, index) => <span key={step} className="care-flow-step"><i>{String(index + 1).padStart(2, '0')}</i><b>{step}</b>{index < workflow.length - 1 && <em aria-hidden="true"/>}</span>)}</div></div>
    <p className="safety-disclosure"><ShieldCheck size={17}/><span>Product concepts are being designed around medical data governance and clinician review; they do not represent autonomous diagnosis or prescribing.</span></p>
    <div className="cofounder-line"><span>BUILDING VELCURA HEALTH</span><strong>Samarth Kandekar <i>Founder &amp; CEO</i></strong><strong>Ravikumar Khanna <i>Founder &amp; COO · International business</i></strong></div>
    <VentureJourney/>
  </div>;
}
