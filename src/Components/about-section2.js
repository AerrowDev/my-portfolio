import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
const Aboutsection2 = () =>{
    return (
      
        <section class="about section" id="about">
        <h2 class="section__title">About Me </h2>
        <span class="section__subtitle">My Introduction</span>

        <div class="about__container container grid">
     
            <div class="about__data">
                <p class="about__description">
                    I am a web developer and graphic designer with a passion for creating visually appealing and
                    functional websites and designs. My skills include HTML, CSS, JavaScript, and Adobe Creative
                    Suite. I bring projects from concept to completion with my technical and creative abilities.
                </p>
                <div class="about__info">
                    <div>
                        <span class="about__info-title">1</span>
                        <span class="about__info-name">Year&apos;  experience</span>
                    </div>

                    <div>
                        <span class="about__info-title">15</span>
                        <span class="about__info-name">Completed  Project</span>
                    </div>

                    <div>
                        <span class="about__info-title">2</span>
                        <span class="about__info-name">Companies worked</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a download="" href="assets/pdf/Aaron-Cv (2).pdf" class="button button--flex">
                        Download CV <i class="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>

    </section>

    );
}

export default Aboutsection2;