import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';
const PortfolioPages = () =>{
  
    return (
       
        <section class="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div class="portfolio__container container swiper-container">
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image src="/assets/img/mp1.png" width={200} height={250} alt="project" class="portfolio__img " />
                        <div class="portfolio__data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="pt-3">
                                            <h3 class="portfolio__title">Tool used:</h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            HTML, CSS, Bootstrap, JS, Git, & Github.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-2">
                                            <a href="https://aerrowdev.github.io/MiniProject01/" class="button button--flex button--smal portfolio__button mt-2" target="_blank">
                                                Demo
                                                <i class="uil uil-arrow-right button__icon"></i>
                                            </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image src="/assets/img/mp2.png" width={200} height={250} alt="project"  class="portfolio__img"/>
                        <div class="portfolio__data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="pt-3">
                                            <h3 class="portfolio__title">Tool used: </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>
                                     HTML, CSS, Bootstrap, JS, Formsubmit API, Git,  & Github.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-2">
                                            <a href="https://aerrowdev.github.io/Mini-Project-II/" class="button button--flex button--smal portfolio__button mt-2" target="_blank">
                                                Demo
                                                <i class="uil uil-arrow-right button__icon"></i>
                                            </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-3'>
                   <div class="portfolio__content grid swiper-slide">
                        <Image src="/assets/img/personal-project1.png" width={200} height={250} alt="project"  class="portfolio__img"/>

                        <div class="portfolio__data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="pt-3">
                                            <h3 class="portfolio__title">Tool used:</h3>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>
                                          Laravel framework, Vue.js and SQLite.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-2">
                                            <a href="#" class="button button--flex button--smal portfolio__button isDisabled mt-2"  title="Under construction" target="_blank">
                                                Demo
                                                <i class="uil uil-arrow-right button__icon"></i>
                                            </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image src="/assets/img/capstone.png" width={200} height={250} alt="project"  class="portfolio__img"/>
                        <div class="portfolio__data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="pt-3">
                                            <h3 class="portfolio__title">Tool used:</h3>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        HTML, CSS Bootstrap, JS, and Github.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-2">
                                            <a href="http://www.gamecom.store/home" class="button button--flex button--smal portfolio__button mt-2" target="_blank">
                                                Demo
                                                <i class="uil uil-arrow-right button__icon"></i>
                                            </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
    </section>


    );
}

export default PortfolioPages;