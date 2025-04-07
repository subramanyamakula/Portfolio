import React, { useState } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png";

export const Download = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        backgroundImage: `url(${colorSharp})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '100px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="download-btn-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: 'relative' }}
      >
        {/* Download Button */}
        <a href="/A V Subramanyam.pdf" download style={{ textDecoration: 'none' }}>
          <button
            className="resume-btn"
            style={{
              backgroundColor: 'black',
              color: 'white',
              border: '2px solid white',
              borderRadius: '20px',
              padding: '14px 28px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <FaDownload /> Download Resume
          </button>
        </a>

        {/* View Resume Button (appears only on hover) */}
      <div>
          <a
            href="/A V Subramanyam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, 10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              textDecoration: 'none',
              zIndex: 1,
              whiteSpace: 'nowrap'
            }}
          >
            <FaEye /> View Resume
          </a>
          </div>
        
      </div>
    </section>
  );
};
