import { useState, useEffect } from "react";
import css from '../styles/theme.util.module.css';
import Script from 'next/script';

export default function SetTheme() {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

      if (theme === 'dark') {
        document.getElementById('darkimg').classList.add('navbar_hide__I1J1x');
        document.getElementById('lightimg').classList.remove('navbar_hide__I1J1x');
      } else {
        document.getElementById('darkimg').classList.remove('navbar_hide__I1J1x');
        document.getElementById('lightimg').classList.add('navbar_hide__I1J1x');
      }
  };

  const buttonIcon = () => {
    switch (theme) {
      case 'dark':
        return (<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" /></svg>);
      case 'light':
        return (<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z" /></svg>);
    }
  };

  const maybeTheme = () => {
    const themeLocalStorage = localStorage.getItem('theme');
    const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return themeLocalStorage ?? themeSystem;
  };

  useEffect(() => {
    const initialTheme = theme ?? maybeTheme();

    if (initialTheme === 'dark') {
        document.getElementById('darkimg').classList.remove('navbar_hide__I1J1x');
        document.getElementById('lightimg').classList.add('navbar_hide__I1J1x');
      } else {
        document.getElementById('darkimg').classList.add('navbar_hide__I1J1x');
        document.getElementById('lightimg').classList.remove('navbar_hide__I1J1x');
      }
      console.log("onload");

    document.querySelector(':root').dataset.theme = initialTheme;
    localStorage.setItem('theme', initialTheme);
    setTheme(initialTheme);

    const useSetTheme = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)');
    watchSysTheme.addEventListener('change', useSetTheme);

    return () => {
      watchSysTheme.removeEventListener('change', useSetTheme);
    };
  }, [theme]);

  return (
    <>
      <Script id="theme.util.jsx" strategy="beforeInteractive">
        {`
          let themeLocalStorage = localStorage.getItem('theme');
          let themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem;
        `}
      </Script>
      <button key="themeToggle" onClick={toggleTheme} data-theme={theme} className={css.toggle}>{buttonIcon(theme)}</button>
    </>
  );
}
