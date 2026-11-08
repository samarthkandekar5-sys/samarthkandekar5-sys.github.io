'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { technologyFocus } from '@/data/site';

export function TechnologyLandscape() {
  const [selectedId, setSelectedId] = useState(technologyFocus[0].id);
  const [connectors, setConnectors] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const selected = technologyFocus.find(item => item.id === selectedId) ?? technologyFocus[0];

  useLayoutEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const mapRect = map.getBoundingClientRect();
        const core = map.querySelector<HTMLElement>('.map-core');
        if (!core || !mapRect.width || !mapRect.height) return;
        const coreRect = core.getBoundingClientRect();
        const centerX = coreRect.left + coreRect.width / 2;
        const centerY = coreRect.top + coreRect.height / 2;
        const next = Array.from(map.querySelectorAll<HTMLButtonElement>('.map-node')).map(node => {
          const rect = node.getBoundingClientRect();
          return {
            x1: ((centerX - mapRect.left) / mapRect.width) * 1000,
            y1: ((centerY - mapRect.top) / mapRect.height) * 1000,
            x2: ((rect.left + rect.width / 2 - mapRect.left) / mapRect.width) * 1000,
            y2: ((rect.top + rect.height / 2 - mapRect.top) / mapRect.height) * 1000,
          };
        });
        setConnectors(next);
      });
    };

    measure();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    observer?.observe(map);
    map.querySelectorAll('.map-node, .map-core').forEach(node => observer?.observe(node));
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return <section className="technology-section" id="technology">
    <div className="section-overline"><span>02</span><i/> STRATEGIC FOCUS · APPLIED AI · VENTURE ARCHITECTURE</div>
    <div className="technology-heading" data-reveal><p>Technology as a<br/><em>foundation for ventures.</em></p><span>Core architectural pillars I deploy across companies—operating at the intersection of applied AI, full-stack systems, and disciplined B2B distribution.</span></div>
    <div className="technology-layout">
      <div className="technology-map" aria-label="Interactive technology landscape" ref={mapRef}>
        <svg className="map-lines" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">{connectors.map((line, index) => <line key={technologyFocus[index].id} {...line}/>)}</svg>
        <div className="map-core"><span>AI</span><small>ENGINEERED TO<br/>SCALE</small></div>
        {technologyFocus.map((item, index) => <button key={item.id} className={`map-node map-node-${index + 1} ${selectedId === item.id ? 'is-active' : ''}`} onClick={() => setSelectedId(item.id)} aria-pressed={selectedId === item.id}>
          <i/><small>0{index + 1}</small><span>{item.shortName}</span>
        </button>)}
        <div className="map-label">PRODUCTION SYSTEMS &amp; CORE CAPABILITIES</div>
      </div>
      <div className="technology-detail" aria-live="polite">
        <span className="tech-index">{String(technologyFocus.findIndex(item => item.id === selectedId) + 1).padStart(2, '0')} / {String(technologyFocus.length).padStart(2, '0')}</span>
        <h3>{selected.name}</h3><p className="tech-descriptor">{selected.descriptor}</p><p className="tech-body">{selected.detail}</p>
        <a href="#ventures" className="quiet-link">Explore Live Ventures <ArrowDownRight size={16}/></a>
      </div>
    </div>
    <div className="technology-foot"><span>PROBLEM → PRODUCT</span><span>HUMAN-CENTERED SYSTEMS</span><span>RESPONSIBLE AUTOMATION</span></div>
  </section>;
}
