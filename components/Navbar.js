import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import imgPath from "../Images/1.png";
import imgPathDark from "../Images/2.png";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/theme.util";

export default function Navbar() {
  const [theme, setTheme] = useState();

  const maybeTheme = () => {
    const themeLocalStorage = localStorage.getItem("theme");
    const themeSystem = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return themeLocalStorage ?? themeSystem;
  };

  useEffect(() => {
    if (!theme) return setTheme(maybeTheme());

    document.querySelector(":root").dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show !== navbarBackground) {
        setNavbarBackground(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navbarBackground]);

  return (
    <>
    <nav className={navbarBackground ? `${styles.navbar} ${styles.navbarScrolled}` : styles.navbar}>
      <ul className={styles.NavUl}>
        <li className={styles.NavLi}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.NavLi}>
          <Link href="/Create">Create</Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      </nav>
      <Image
        id="lightimg"
        src={imgPath}
        width={1550}
        height={300}
        alt="Blog Logo"
        className={theme === "dark" ? styles.hide : styles.img}
      />
      <Image
        id="darkimg"
        src={imgPathDark}
        style={{marginTop:"50px"}}
        width={1550}
        height={300}
        alt="Blog Logo"
        className={theme === "light" ? styles.hide : styles.img}
      />
    </>
  );
}
