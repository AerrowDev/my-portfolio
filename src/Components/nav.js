import Link from 'next/link';
import {Navimenu} from '/src/utilities/header'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  function isActive(pathname) {
    return router.pathname === pathname;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Navimenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

      if (navToggle) {
        navToggle.addEventListener('click', () => {
          Navimenu.classList.add('show-menu');
        });
      }

      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener('click', () => {
          Navimenu.classList.remove('show-menu');
        });
      }

      /*==================== REMOVE MENU MOBILE ====================*/
      const navLink = document.querySelectorAll('.nav__link');

      function linkAction() {
        const Navimenu = document.getElementById('nav-menu');
        //When we click on each nav__link, we remove the show-menu class
        Navimenu.classList.remove('show-menu');
      }

      navLink.forEach((n) => n.addEventListener('click', linkAction));
    }
  }, []);

  return (
    
    <header className="header" id="header">
      <nav className="nav container">
          <Link href="https://www.linkedin.com/in/aaron-prellegera-5ba681211" target="_blank"
                className="home__social-icon">
                <i class="uil uil-linkedin-alt "></i>
          </Link>

          <Link href="https://web.facebook.com/AerrowDevPH" target="_blank" className="home__social-icon">
            <i class="uil uil-facebook-f"></i>
          </Link>

          <Link href="https://github.com/AerrowDev" target="_blank" className="home__social-icon">
              <i class="uil uil-github-alt"></i>
          </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid ">
            <li className="nav__item">
              <Link href="/" className={`nav__link ${isActive('/') ? 'active-link' : ''} ` }style={{ textDecoration: 'none' }}>
                <i className="uil uil-estate nav__icon "></i>Home
              </Link>
            </li>
            <li className="nav__item ">
              <Link href="/about" className={`nav__link ${isActive('/about') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-user nav__icon"></i>About
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/Skills" className={`nav__link ${isActive('/Skills') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/portfolio" className={`nav__link ${isActive('/portfolio') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#contact" className={`nav__link ${isActive('/#contact') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-message nav__icon"></i>Contactme
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close nav__icon" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;