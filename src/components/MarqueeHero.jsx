import React from 'react';
import './MarqueeHero.css';

export const MarqueeHero = () => {
  return (
    <section className="marquee-banner" aria-label="Cinema Marquee">
      <div className="marquee-frame">
        <div className="marquee-bulbs bulbs-horizontal bulbs-top" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={`bulb-t-${i}`} className={`bulb bulb-${i % 3}`} />
          ))}
        </div>

        <div className="marquee-content">
          <div className="marquee-subtitle-top">
            <span className="marquee-year-tag">EST. 1928</span>
            <span className="marquee-edition">FEATURE PRESENTATION</span>
            <span className="marquee-reel-tag">35MM / 70MM</span>
          </div>

          <h1 className="marquee-title">
            CINE<span className="marquee-title-dash">—</span>STREAM
          </h1>

          <p className="marquee-tagline">
            Curated cinematic wonders, silver screen rarities, and contemporary masterworks.
          </p>
        </div>

        <div className="marquee-bulbs bulbs-horizontal bulbs-bottom" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={`bulb-b-${i}`} className={`bulb bulb-${(i + 1) % 3}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeHero;
