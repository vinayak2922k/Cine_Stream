import React from 'react';
import './SectionHeader.css';

export const SectionHeader = ({ title, count, subtitle }) => {
  const formattedCount =
    count !== undefined && count !== null
      ? `${String(count).padStart(3, '0')} TITLES`
      : null;

  return (
    <div className="cinema-section-header">
      <div className="header-text-group">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      <div className="section-rule" aria-hidden="true" />

      {formattedCount && (
        <span className="section-counter" aria-label={`${count} titles available`}>
          {formattedCount}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
