    import Image from 'next/image';
    import styles from '@/styles/Home.module.css'
    import Link from 'next/link';
    import 'bootstrap/dist/css/bootstrap.css'
    import Imagenav from '/src/Components/logo-nav'
    import { useEffect } from "react";

    const SkillsPage = () =>{
     useEffect(() => {
    const SPEED = 40;
    const skillNumbers = document.querySelectorAll(".skills__number");

    skillNumbers.forEach((number) => {
      const limit = parseInt(number.innerHTML, 10);
      let count = 0;
        
      const interval = setInterval(() => {
        count++;
        number.textContent = `${count}%`;

        if (count === limit) {
          clearInterval(interval);
        }
      }, SPEED);
    });
  }, []);


        return (
        
            <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My technical level</span>

            <div class="skills__container container grid">
                <div>
                
                    <div class="skills__content skills__open">
                        <div class="skills__header">
                            <i class="uil uil-brackets-curly skills__icon"></i>
                            
                            <div>
                                <h1 class="skills__title">Web developer</h1>
                                <span class="skills__subtitle">More than 1 year</span>
                            </div>
                        
                        </div>
                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">HTML</h3>
                                    <span class="skills__number">90%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">CSS</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Bootstrap</h3>
                                    <span class="skills__number">75%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__bootstrap"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Javascript</h3>
                                    <span class="skills__number">30%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__js"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">React.JS</h3>
                                    <span class="skills__number">45%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__react-js"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Next.JS</h3>
                                    <span class="skills__number">45%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__next-js"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Laravel Framework</h3>
                                    <span class="skills__number">30%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__laravel"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">PHP</h3>
                                    <span class="skills__number">30%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__php"></span>
                                </div>
                            </div>

                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Github</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__github"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                
                    <div class="skills__content">
                        <div class="skills__header">
                            <i class="uil uil-icons skills__icon"></i>
                            <div>
                                <h1 class="skills__title">Graphic Designer</h1>
                                <span class="skills__subtitle">More than 2 years</span>
                            </div>
                        
                        </div>
                        <div class="skills__list grid">
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Adobe Photoshop</h3>
                                    <span class="skills__number">85%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__photoshop"></span>
                                </div>
                            </div>



                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Illustrator</h3>
                                    <span class="skills__number">50%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__illustrator"></span>
                                </div>
                            </div>



                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Figma</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__figma"></span>
                                </div>
                            </div>



                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">After Effects</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__aftereffects"></span>
                                </div>
                            </div>



                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Premiere</h3>
                                    <span class="skills__number">70%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__premiere"></span>
                                </div>
                            </div>


                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Canva</h3>
                                    <span class="skills__number">80%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__aftereffects"></span>
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__titles">
                                    <h3 class="skills__name">Blender</h3>
                                    <span class="skills__number">35%</span>
                                </div>
                                <div class="skills__bar">
                                    <span class="skills__percentage skills__modelling"></span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                </div>

        
        </section>


        );
    }

    export default SkillsPage;