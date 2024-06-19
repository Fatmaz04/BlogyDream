import styles from "../styles/Footer.module.css";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>About This Blog</h2>
          <p>
            This blog shares insights on various topics including technology,
            lifestyle, and more.
          </p>
          <p>
          &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </p>
        </div>
        <div className={styles.footerSection}>
          <h2>Follow Us</h2>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </footer>
    </>
  );
}
