import React from 'react';
import { useInView } from '../hooks/useInView';

function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact">
      <div 
        ref={ref}
        className={`content-container stagger-animation ${isVisible ? 'is-visible' : ''}`}
      >
        <h2>Contact Me</h2>
        <p>Email: rohan.kathuria@live.com</p>
        <p>Phone: (832) 920-4070</p>
        <p><a href="https://www.linkedin.com/in/rohanekathuria" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/RollingRo11" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </section>
  );
}

export default Contact;
