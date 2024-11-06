// components/ScrollProgress.js
'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Cek apakah kita berada di klien
    if (typeof window !== 'undefined') {
      const updateScrollProgress = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const windowScroll = scrollTop / (scrollHeight - clientHeight);
        setScrollPosition(windowScroll * 100);
      };

      window.addEventListener('scroll', updateScrollProgress);
      return () => window.removeEventListener('scroll', updateScrollProgress);
    }
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${scrollPosition}%` }}></div>
    </div>
  );
};

export default ScrollProgress;
