import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
import { useEffect } from 'react';
const Aboutqualification = () =>{
    useEffect(() => {
        const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]');
    
        tabs.forEach((tab) => {
          tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
    
            tabContents.forEach((tabContent) => {
              tabContent.classList.remove('qualification__active');
            });
            target.classList.add('qualification__active');
    
            tabs.forEach((tab) => {
              tab.classList.remove('qualification__active');
            });
            tab.classList.add('qualification__active');
          });
        });
      }, []);
    

    return (
        <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex qualification__active" data-target='#education'>
                    <i className="uil uil-graduation-cap qualification__icon "></i>
                    Education
                </div>
                <div className="qualification__button button--flex" data-target="#work">
                    <i className="uil uil-bag-alt qualification__icon "></i>
                    Work
                </div>
            </div>

            <div className="qualification__sections">
           
                <div className="qualification__content qualification__active" data-content id="education">
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information and Communication Technology</h3>
                            <span className="qualification__subtitle">Marcial O. Rañola Memorial School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2016 &ndash; 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div> </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Information Technology (Animation)</h3>
                            <span className="qualification__subtitle">Bicol University Polangui Campus</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 &ndash; 2022
                            </div>
                        </div>
                    </div>
                  
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">Full-Stack Web Development</h3>
                            <span className="qualification__subtitle">KodeGo</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 &ndash; 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>

                        </div>
                    </div>
                </div>

              
                <div className="qualification__content " data-content id="work">
                    
                  
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Immersion</h3>
                            <span className="qualification__subtitle">LGU Guinobatan (Treasurer&apos;s Office)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Jan 15 &ndash; Jan 26
                            </div>
                        </div>

                    </div>
                  
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Graphic Designer</h3>
                                <span className="qualification__subtitle">Freelance
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 &ndash; present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>

                        </div>

                        {/* <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022-Present
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
        </section>
    );
}

export default Aboutqualification;