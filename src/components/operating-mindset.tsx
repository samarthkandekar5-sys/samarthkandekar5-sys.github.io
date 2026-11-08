'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { decisionJournal, operatingAreas } from '@/data/operating-mindset';
import { businessModel, competitorLandscape, customerSegments, marketAnalysisTabs, marketSizing, marketSources, unitEconomicsToValidate } from '@/data/market-analysis';

export function OperatingMindset() {
  const [activeLens, setActiveLens] = useState<(typeof marketAnalysisTabs)[number]['id']>('sizing');
  const selectedIndex = marketAnalysisTabs.findIndex(lens => lens.id === activeLens);

  return <section className="operating-section" id="operating-mindset">
    <div className="section-overline"><span>03</span><i/> BUSINESS · MARKET · STRATEGY</div>
    <div className="operating-heading" data-reveal>
      <div><span className="operating-kicker">A FOUNDER&apos;S FIELD NOTES · ACTIVE EXPLORATION</span><h2>The founder&apos;s<br/><em>operating mindset.</em></h2></div>
      <div className="operating-heading-note"><p>Building companies requires more than technology. It requires understanding problems, markets, people, economics and execution.</p><small>Areas of focus and active exploration—not a list of claimed results.</small></div>
    </div>

    <div className="operating-areas">
      {operatingAreas.map((area, index) => <article className="operating-card" key={area.id}>
        <div className="operating-card-top"><span>0{index + 1}</span><i aria-hidden="true"/></div>
        <h3>{area.title}</h3><p>{area.note}</p>
        <ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      </article>)}
    </div>
    <div className="operating-mobile-areas" aria-label="Business and strategy focus areas">
      {operatingAreas.map((area, index) => <details className="operating-mobile-card" key={area.id}>
        <summary><span className="operating-mobile-number">0{index + 1}</span><span className="operating-mobile-copy"><strong>{area.title}</strong><span>{area.note}</span></span><ChevronDown size={18}/></summary>
        <ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      </details>)}
    </div>

    <div className="market-canvas">
      <div className="market-intro"><span className="operating-kicker">A RESEARCH FRAMEWORK · VELCURA HEALTH</span><h3>Market analysis,<br/><em>with assumptions in view.</em></h3><p>No official dollar TAM source identified for this precise category. Ranges below are founder inputs; the linked report is broad-market context only.</p></div>
      <div className="market-workspace">
        <div className="market-tabs" role="group" aria-label="Market analysis lens">
          {marketAnalysisTabs.map(lens => <button key={lens.id} type="button" aria-pressed={activeLens === lens.id} onClick={() => setActiveLens(lens.id)}>{lens.label}<ArrowUpRight size={13}/></button>)}
        </div>
        <div className="market-panel" aria-live="polite" key={activeLens}>
          <div className="market-panel-heading"><span>0{selectedIndex + 1} / 04</span><h4>{marketAnalysisTabs[selectedIndex].label}</h4></div>
          {activeLens === 'sizing' && <div className="sizing-content">
            {marketSizing.map(region => <article className="sizing-row" key={region.area}>
              <div className="sizing-primary"><span className={`evidence-label evidence-${region.kind}`}>{region.kind}</span><h5>{region.area}</h5><strong>{region.value}</strong></div>
              <div className="sizing-basis"><span>{region.facts.map(fact => <i className="sizing-fact" key={fact}>{fact}</i>)}</span><span>{region.assumptions.map(assumption => <i className="sizing-assumption-chip" key={assumption}>{assumption}</i>)}</span></div>
              {region.source && <a className="sizing-source" href={marketSources[region.source].href} target="_blank" rel="noreferrer">Source · {marketSources[region.source].label}<ArrowUpRight size={11}/></a>}
              <details className="mobile-evidence">
                <summary>Assumptions &amp; sources <ChevronDown size={16}/></summary>
                <div>{region.facts.map(fact => <p className="evidence-copy" key={fact}>{fact}</p>)}{region.assumptions.map(assumption => <p className="evidence-copy" key={assumption}>{assumption}</p>)}{region.source && <a href={marketSources[region.source].href} target="_blank" rel="noreferrer">Open market context source <ArrowUpRight size={13}/></a>}</div>
              </details>
            </article>)}
            <p className="sizing-footnote">Market ranges are unverified hypotheses; the revenue target is not achieved revenue.</p>
          </div>}

          {activeLens === 'segments' && <div className="segment-content">
            <p className="market-tab-lead">Separate who uses the product from who approves and pays for it.</p>
            <div className="segment-groups">
              <div className="segment-group"><div className="segment-group-title"><span>01</span><h5>Potential paying customers</h5></div>
                {customerSegments.buyers.map(segment => <div className="segment-row" key={segment.name}><strong>{segment.name}</strong><span>{segment.fit}</span></div>)}
              </div>
              <div className="segment-group segment-users"><div className="segment-group-title"><span>02</span><h5>Product users</h5></div>
                {customerSegments.users.map((user, index) => <div className="segment-row" key={user}><strong>{user}</strong><span>User · 0{index + 1}</span></div>)}
              </div>
            </div>
            <p className="market-tab-caveat"><i/> {customerSegments.note}</p>
          </div>}

          {activeLens === 'competition' && <div className="competitor-content">
            <p className="market-tab-lead">Vendor-described product scope from official pages · reviewed 04 Nov 2026.</p>
            <p className="mobile-competitor-takeaway">Compare workflow coverage first. VelCura&apos;s connected patient and clinic flows, safety-first intake, and clinician-reviewed summaries remain differentiation hypotheses to validate.</p>
            <div className="competitor-list competitor-desktop-list" role="list">
              {competitorLandscape.map(item => <article className="competitor-row" key={item.name} role="listitem">
                <div className="competitor-name"><h5>{item.name}</h5><span>{item.category}</span><a href={item.href} target="_blank" rel="noreferrer">{item.source}<ArrowUpRight size={11}/></a></div>
                <div className="competitor-target"><small>Target</small><p>{item.target}</p></div>
                <div className="competitor-coverage"><p><small>Core</small>{item.capabilities}</p><p><small>VelCura overlap</small>{item.overlap}</p></div>
              </article>)}
            </div>
            <div className="mobile-competitor-list">
              {competitorLandscape.map(item => <article className="mobile-competitor-card" key={item.name}>
                <div className="mobile-competitor-top"><div><h5>{item.name}</h5><span>{item.category}</span></div><span className="competitor-target-label">{item.target}</span></div>
                <details><summary>Capabilities &amp; overlap <ChevronDown size={16}/></summary><p><strong>Core:</strong> {item.capabilities}</p><p><strong>VelCura overlap:</strong> {item.overlap}</p><a href={item.href} target="_blank" rel="noreferrer">{item.source}<ArrowUpRight size={13}/></a></details>
              </article>)}
            </div>
            <div className="differentiation-note competitor-desktop-note"><span>DIFFERENTIATION TO TEST</span><p>Connected patient + clinic workflows · clinician-reviewed AI summaries · safety-first intake. Comparative advantage is not established.</p></div>
          </div>}

          {activeLens === 'model' && <div className="business-model-content">
            <p className="market-tab-lead">Proposed revenue paths and prices to test—not current pricing or confirmed demand.</p>
            <div className="business-model-list">{businessModel.map(model => <article className="business-model-row" key={model.name}>
              <div><h5>{model.name}</h5><span>{model.source}</span></div><strong>{model.price}</strong><p><small>Potential payer</small>{model.payer}</p>
            </article>)}</div>
            <div className="economics-note"><span>UNIT ECONOMICS · UNVALIDATED</span><div>{unitEconomicsToValidate.map(item => <span key={item}>{item}</span>)}</div><p>All pricing, payer, cost, acquisition, and unit-economics assumptions require customer and delivery validation.</p></div>
            <div className="mobile-business-model-list">{businessModel.map(model => <article className="mobile-business-model-card" key={model.name}>
              <div><h5>{model.name}</h5><strong>{model.price}</strong></div><p><b>Potential payer</b>{model.payer}</p><details><summary>Model assumptions <ChevronDown size={16}/></summary><p>{model.source}. Proposed model; pricing and demand require validation.</p></details>
            </article>)}
              <details className="mobile-unit-economics"><summary>Unit economics to validate <ChevronDown size={16}/></summary><ul>{unitEconomicsToValidate.map(item => <li key={item}>{item}</li>)}</ul><p>All pricing, payer, cost, acquisition, and unit-economics assumptions require customer and delivery validation.</p></details>
            </div>
          </div>}
        </div>
      </div>
    </div>

    <div className="decision-journal" id="decision-journal">
      <div className="journal-heading"><div><span className="operating-kicker">A LIVING STRATEGY JOURNAL</span><h3>Decisions behind<br/><em>the build.</em></h3></div><p>Questions, options, and current hypotheses. These notes describe thinking in progress—not claimed outcomes.</p></div>
      <div className="journal-list">{decisionJournal.map((entry, index) => <details className="journal-entry" key={entry.id}>
        <summary><span className="journal-number">0{index + 1}</span><span className="journal-title">{entry.title}</span><ChevronDown size={17}/></summary>
        <div className="journal-content">
          <div><span>The question</span><p>{entry.question}</p></div>
          <div><span>Options considered</span><p>{entry.options}</p></div>
          <div><span>Strategic reasoning</span><p>{entry.reasoning}</p></div>
          <div><span>Current hypothesis</span><p>{entry.hypothesis}</p></div>
          <div><span>Still to validate</span><p>{entry.validation}</p></div>
        </div>
      </details>)}</div>
    </div>

    <a className="operating-next" href="#ventures">See the venture in context <ArrowDownRight size={16}/></a>
  </section>;
}
