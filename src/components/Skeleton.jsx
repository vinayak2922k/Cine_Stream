import React from 'react';
import './Skeleton.css';

export const SkeletonCard = () => {
  return (
    <div className="skeleton-stub" aria-hidden="true">
      <div className="skeleton-poster skeleton-shimmer" />

      <div className="skeleton-perforation">
        <span className="skeleton-notch skeleton-notch-left" />
        <span className="skeleton-notch skeleton-notch-right" />
      </div>

      <div className="skeleton-body">
        <div className="skeleton-line skeleton-title skeleton-shimmer" />
        <div className="skeleton-meta">
          <div className="skeleton-line skeleton-year skeleton-shimmer" />
          <div className="skeleton-badge skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 8 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ))}
    </div>
  );
};

export default SkeletonCard;
