import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
const Aboutsection = () =>{
    return (
        <section class="home section" id="home">

            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
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
                    </div>
                    
                    <div class="home__data">
                        <h1 class="home__title">Hi, I&apos;am Aaron
                        </h1>
                        <h3 class="home__subtitle">Web Developer &#124; Graphic Designer</h3>
                        <p class="home__description"> a web developer and graphic designer with a passion for
                            creating visually appealing and functional websites and designs.</p>
                        <a href="#contact" class="button button--flex">
                            Contact Me<i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span class="home__scroll-name">Scroll down</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
                
            </div>


        </section>
    );
}

export default Aboutsection;