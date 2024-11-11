import React, { useState, useEffect, useRef } from 'react';

function TerminalLine({ content, className = '', typingSpeed = 50 }) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // For header components, start animation immediately
    if (className.includes('terminal-name') || className.includes('nav-links')) {
      setShouldAnimate(true);
      hasAnimated.current = true;
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setShouldAnimate(true);
            hasAnimated.current = true;
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }
  }, [className]);

  useEffect(() => {
    if (shouldAnimate) {
      let currentText = '';
      const contentToType = typeof content === 'string' ? content : content.props?.children || '';
      const textContent = Array.isArray(contentToType) 
        ? contentToType.map(child => typeof child === 'string' ? child : '').join('') 
        : contentToType;
      
      let currentIndex = 0;
      const typeWriter = setInterval(() => {
        if (currentIndex < textContent.length) {
          currentText += textContent[currentIndex];
          setDisplayedContent(currentText);
          currentIndex++;
        } else {
          clearInterval(typeWriter);
          if (typeof content === 'object') {
            setDisplayedContent(content); // Set full JSX content after typing
          }
        }
      }, typingSpeed);

      return () => clearInterval(typeWriter);
    }
  }, [shouldAnimate, content, typingSpeed]);

  return (
    <div ref={elementRef} className={`terminal-line ${className}`}>
      {displayedContent}
    </div>
  );
}

export default TerminalLine; 