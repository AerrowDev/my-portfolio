import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
import { useEffect, useRef } from 'react';
import CountUp from 'countup.js';
const Aboutsection2 = () =>{
    

  
    return (
      
    <section class="about section" id="about">
        <h2 class="section__title">About Me </h2>
        <span class="section__subtitle">My Introduction</span>

        <div class="about__container container grid">
            <img src="assets/img/2x2 23 - final.jpg" alt="" class="about__img"/>
            <div class="about__data">
                <p class="about__description">
                I am an experienced web developer and graphic designer with a passion for creating visually appealing and functional websites and designs. 
                I have expertise in HTML, CSS, JavaScript, and the Adobe Creative Suite, and have expanded my skills to include several popular frameworks such as Laravel, Next.js, and React. 
                I have successfully completed various projects using these frameworks and I bring projects from concept to completion with my technical and creative abilities.
                 My goal is to deliver high-quality work that meets the needs of clients and exceeds their expectations.
                </p>
                <div class="about__info">
                    <div>
                        <span class="about__info-title" >01</span>
                        <span class="about__info-name" >Year/s <br/> experience</span>
                    </div>

                    <div>
                        <span class="about__info-title" >05</span>
                        <span class="about__info-name">Completed <br/> Project</span>
                    </div>

                    <div>
                        <span class="about__info-title" >02</span>
                        <span class="about__info-name">Companies <br/> worked</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a download="" href="assets/pdf/AaronPrellegera-CV.pdf" class="button button--flex">
                       Download Resume <i class="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Aboutsection2;