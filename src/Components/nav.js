import Image from 'next/image';
import Link from 'next/link';
import {navMenu} from '/src/utilities/header'
const Header = () =>{
    return (
        <header className="header" id="header">
        <nav className="nav container">
        <a href="https://www.linkedin.com/in/aaron-prellegera-5ba681211" target="_blank"
                            class="home__social-icon">
                            <i class="uil uil-linkedin-alt "></i>
                        </a>

                        <a href="https://web.facebook.com/AerrowDevPH" target="_blank" class="home__social-icon">
                          <i class="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://github.com/AerrowDev" target="_blank" class="home__social-icon">
                            <i class="uil uil-github-alt"></i>
                        </a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="/" className="nav__link active-link text-decoration-none">
                            <i className="uil uil-estate nav__icon "></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href='/about' className="nav__link text-decoration-none">
                            <i className="uil uil-user nav__icon "></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link text-decoration-none">
                            <i className="uil uil-file-alt nav__icon "></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link text-decoration-none">
                            <i className="uil uil-briefcase-alt nav__icon "></i>Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link text-decoration-none">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link text-decoration-none">
                            <i className="uil uil-message nav__icon"></i>Contactme
                        </a>
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