import React, { useEffect, useState } from 'react';
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Lightbox = ({ items, index, onClose, onIndex }) => {
  const [zoom, setZoom] = useState(false);
  const open = index !== null;

  useEffect(() => {
    setZoom(false);
  }, [index]);

  useEffect(() => {
    if (!open) return undefined;
    const go = (d) => onIndex((index + d + items.length) % items.length);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, items.length, onClose, onIndex]);

  if (!open) return null;
  const item = items[index];
  const go = (d) => onIndex((index + d + items.length) % items.length);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <button type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Close">
        <LuX />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
          >
            <LuChevronLeft />
          </button>
          <button
            type="button"
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
          >
            <LuChevronRight />
          </button>
        </>
      )}
      <div className={`lb-stage ${zoom ? 'zoomed' : ''}`} onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} onClick={() => setZoom((z) => !z)} />
      </div>
      <p className="lb-caption" onClick={(e) => e.stopPropagation()}>
        {item.caption} <span>· click image to {zoom ? 'fit' : 'zoom'}</span>
      </p>
    </div>
  );
};

export default Lightbox;
