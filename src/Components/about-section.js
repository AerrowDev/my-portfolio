import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
import Welcome from "src/components/Welcome"
const Aboutsection = () =>{
    return (
        <section class="home section" id="home">

        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                   
                    
                </div>
               <Welcome  class="home__img"/>

                <div class="home__data">
                <p class=" home__welcome text-muted text-uppercase "> Let&apos;s collaborate and bring our ideas to life.</p>
                    <h1 class="home__title">Hi, I&apos;am Aaron
                    </h1>
                    <h3 class="home__subtitle">Web Developer</h3>
                    <p class="home__description"> As a web developer, I&apos;m passionate about building beautiful and functional websites that provide a great user experience.
                     I specialize in using Next.js, a powerful framework for building React-based web applications.</p>
                    <a download="" href="assets/pdf/AaronPrellegera-CV.pdf" class="button button--flex me-4">
                        Resume<i class="uil uil-message button__icon"></i>
                    </a>
                    <a href="#contact" class="text-dark button--flex">
                        Contact Me
                    </a>
                    <div class="my-5">
                      <a  href="https://m.me/ore.wa.haruhiro" target="_blank"
                            class="home__social-icon px-3">
                          <i class="uil uil-facebook-messenger-alt"></i>
                        </a>

                        <a href="https://wa.me/message/HMLDVC5ST6J2G1" target="_blank" class="home__social-icon px-3">
                        <i class="uil uil-whatsapp"></i>
                        </a>

                        <a href="https://join.skype.com/invite/q7YWQejcIEuq" target="_blank" class="home__social-icon px-3">
                        <i class="uil uil-skype-alt"></i>
                        </a>
                    </div>
                </div>
                
            </div>
           
        </div>


    </section>
    );
}

export default Aboutsection;