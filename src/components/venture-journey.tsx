import { ventureJourney } from '@/data/operating-mindset';
import { ChevronDown } from 'lucide-react';

export function VentureJourney() {
  return <section className="venture-journey" aria-labelledby="venture-journey-title">
    <div className="journey-heading">
      <div><span className="operating-kicker">A WORKING PRODUCT JOURNEY</span><h3 id="venture-journey-title">From opportunity<br/><em>to venture.</em></h3></div>
      <p>VelCura Health, mapped from problem focus through future validation. Product screens are illustrative concepts; no validation results or customer traction are implied.</p>
    </div>
    <ol className="journey-grid">{ventureJourney.map(step => <li className="journey-step" key={step.number}>
      <div className="journey-marker"><span>{step.number}</span><i aria-hidden="true"/></div>
      <h4>{step.title}</h4><p>{step.copy}</p><span className="journey-status">{step.status}</span>
    </li>)}</ol>
    <div className="journey-mobile-list">{ventureJourney.map(step => <details className="journey-mobile-step" key={step.number}>
      <summary><span className="journey-mobile-marker">{step.number}</span><span className="journey-mobile-copy"><strong>{step.title}</strong><small>{step.status}</small></span><ChevronDown size={18}/></summary>
      <p>{step.copy}</p>
    </details>)}</div>
  </section>;
}
