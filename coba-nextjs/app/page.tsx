// pages/index.tsx
import Layout from '../app/components/layout';
import styles from '../app/page.module.css';
import dynamic from 'next/dynamic';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

// Menggunakan dynamic import untuk ScrollProgress agar hanya di-render di client side
const ScrollProgress = dynamic(() => import('../components/ScrollProgress'), { ssr: false });

const HomePage = () => {
  return (
    <Layout>
      <div>
      <ScrollProgress />
        <h1 id="aboutme">About Me</h1>

        {/* Section 1: Warna Hitam */}
        <section className={styles.section}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <div className={styles.halfWidth}>
                    <div className={styles.svg}>
                      <svg width="500px" height="150px" viewBox="0 0 500 150">
                        <text x="0" y="100">Welcome</text>
                      </svg>
                      <div className={styles.justifyText}>
                        <div className={styles.noBold}>
                          <h3>
                          <p>&nbsp;&nbsp;&nbsp;Hello! My name is Muhammad Dwiki Putra, a web developer and junior programmer. I have a great interest in developing creative solutions through programming. Currently, I focus on developing web applications using technologies such as HTML, CSS, JavaScript, and am actively learning about NextJS.</p>
                          <p>&nbsp;&nbsp;&nbsp;As a junior, I love learning new things and continue to explore effective ways to solve problems. I am enthusiastic about working in a team, collaborating, and learning from professionals in the field to continue developing my skills. Thank you, and I am ready to help you with challenging digital projects!</p>                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <div className={styles.halfWidth}>
                    <img src='/computer-bg.png' alt="computer" className={styles.image} />
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </section>

        {/* Section 2: Warna Abu-Abu */}
        <h1 id="pl">Programming language</h1>
<section className={`${styles.section} ${styles.centerAlign} ${styles.sectionWhite}`}>
  <div className={styles.tableContainer}>
    <table className={styles.responsiveTable}>
      <thead>
        <tr>
          <th colSpan={4} className={styles.tableHeader}>
            <h2>Programming Language and Frameworks Used</h2>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr className={styles.tableRow}>
          <td className={styles.tableCell}><img src='/js.png' alt="JavaScript" className={styles.imagelogo} /></td>
          <td className={styles.tableCell}><img src='/bootstrap.png' alt="Bootstrap" className={styles.imagelogo} /></td>
          <td className={styles.tableCell}><img src='/php.png' alt="PHP" className={styles.imagelogo} /></td>
          <td className={styles.tableCell}><img src='/css.png' alt="CSS" className={styles.imagelogo} /></td>
        </tr>
        <tr className={styles.tableRow}>
          <td className={styles.tableCell}>JavaScript</td>
          <td className={styles.tableCell}>Bootstrap</td>
          <td className={styles.tableCell}>PHP</td>
          <td className={styles.tableCell}>CSS</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


        <h2 id="social-media"></h2>

        {/* Section 3: Warna Putih */}
        <section className={`${styles.section} ${styles.centerAlign} ${styles.sectionSocial}`}>
  <h2>Find Me on Social Media</h2>
  <div className={styles.socialLinks}>
    <a href="https://www.linkedin.com/in/muhammad-dwiki-putra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className={styles.socialIcon} />
    </a>
    <a href="https://github.com/dwikiputra18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub className={styles.socialIcon} />
    </a>
    <a href="https://twitter.com/dwikiputra18" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter className={styles.socialIcon} />
    </a>
    <a href="https://www.facebook.com/khiekrenz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook className={styles.socialIcon} />
    </a>
  </div>
</section>
      </div>
    </Layout>
  );
};

export default HomePage;
