import Image from 'next/image';
import Link from 'next/link';
import {navMenu} from '/src/utilities/header'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  function isActive(pathname) {
    return router.pathname === pathname;
  }

  return (
    
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="https://www.linkedin.com/in/aaron-prellegera-5ba681211" target="_blank"
                            class="home__social-icon">
                            <i class="uil uil-linkedin-alt "></i>
                        </Link>

                        <Link href="https://web.facebook.com/AerrowDevPH" target="_blank" class="home__social-icon">
                          <i class="uil uil-facebook-f"></i>
                        </Link>

                        <Link href="https://github.com/AerrowDev" target="_blank" class="home__social-icon">
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
              <Link href="#skills" className={`nav__link ${isActive('/#skills') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#services" className={`nav__link ${isActive('/#services') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#portfolio" className={`nav__link ${isActive('/#portfolio') ? 'active-link' : ''}`}style={{ textDecoration: 'none' }}>
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