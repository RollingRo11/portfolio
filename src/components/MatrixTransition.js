import React, { useEffect, useRef } from 'react';

const MatrixTransition = ({ isTransitioning, headerHeight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isTransitioning) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const fontSize = 20;
    const columns = canvas.width / fontSize;
    
    // Initialize drops with random negative values to stagger their start
    const drops = Array(Math.floor(columns)).fill(null).map(() => 
      -Math.floor(Math.random() * 100)
    );
    
    ctx.font = `${fontSize}px 'JetBrains Mono'`;
    
    let frameCount = 0;
    const maxFrames = 300;
    
    const matrix = () => {
      // Slower fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff9c';
      drops.forEach((y, i) => {
        // Only draw if y is positive (after initial delay)
        if (y > 0) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          const x = i * fontSize;
          // Don't draw in header area
          if (y * fontSize > headerHeight) {
            ctx.fillText(text, x, y * fontSize);
          }
        }
        
        // Reset drop to top when it hits bottom
        if (y * fontSize > canvas.height) {
          drops[i] = 0;
        }
        
        // Slower drop speed
        drops[i] += 0.5;
      });

      frameCount++;
      
      if (frameCount < maxFrames) {
        requestAnimationFrame(matrix);
      }
    };

    const animation = requestAnimationFrame(matrix);
    
    return () => cancelAnimationFrame(animation);
  }, [isTransitioning, headerHeight]);

  return (
    <div 
      className={`matrix-container ${isTransitioning ? 'active' : ''}`}
      style={{ 
        top: `${headerHeight}px`,
        height: `calc(100vh - ${headerHeight}px)`
      }}
    >
      <canvas 
        ref={canvasRef}
        className="matrix-transition"
      />
    </div>
  );
};

export default MatrixTransition; 