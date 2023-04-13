import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';
const PortfolioPages = () =>{
    useEffect(() => {
       // Get the modal
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    var modal3 = document.getElementById('myModal3');
    var modal4 = document.getElementById('myModal4');
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById('myImg1');
    var modalImg1 = document.getElementById("img01-1");
    var captionText1 = document.getElementById("caption1");
    img1.onclick = function(){
      modal1.style.display = "block";
      modalImg1.src = this.src;
      captionText1.innerHTML = this.alt;
    }
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img2 = document.getElementById('myImg2');
    var modalImg2 = document.getElementById("img01-2");
    var captionText2 = document.getElementById("caption2");
    img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
      captionText2.innerHTML = this.alt;
    }

  
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img3 = document.getElementById('myImg3');
    var modalImg3 = document.getElementById("img01-3");
    var captionText3 = document.getElementById("caption3");
    img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
      captionText3.innerHTML = this.alt;
    }
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img4 = document.getElementById('myImg4');
    var modalImg4 = document.getElementById("img01-4");
    var captionText4 = document.getElementById("caption4");
    img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
      captionText4.innerHTML = this.alt;
    }

  
   // Get the <span> elements that close the modals
    var span1 = document.getElementsByClassName("close")[0];
    span1.onclick = function() { 
    modal1.style.display = "none";
    }
   // Get the <span> elements that close the modals
    var span2 = document.getElementsByClassName("close")[1];
    span2.onclick = function() { 
    modal2.style.display = "none";
    }
   // Get the <span> elements that close the modals
    var span3 = document.getElementsByClassName("close")[2];
    span3.onclick = function() { 
    modal3.style.display = "none";
    }
   // Get the <span> elements that close the modals
    var span4 = document.getElementsByClassName("close")[3];
    span4.onclick = function() { 
    modal4.style.display = "none";
    }

      }, []);
    return (
       
        <section class="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div class="portfolio__container container swiper-container">
              <div className='container'>
                <div className='row'>
                    {/* Portfolio 1 */}
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image id ="myImg1" src="/assets/img/mp1.png" width={200} height={250} alt="Resort - Spring Ruin (Business Website)" className="portfolio__img " />
                        
                        <div id="myModal1" class="modal">
                        <span class="close">&times;</span>
                        <img class="modal-content" id="img01-1"/>
                        <div className='captions-alt' id="caption1"></div>
                        </div>
    
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
                    {/* End of Portfolio 1 */}

                      {/*  Portfolio 2 */}
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image id = "myImg2" src="/assets/img/mp2.png" alt="Pet Shop - Happy Pets(Business Website)" width={200} height={250}  className="portfolio__img"/>

                        <div id="myModal2" class="modal">
                        <span class="close">&times;</span>
                        <img class="modal-content" id="img01-2"/>
                        <div  className='captions-alt' id="caption2"></div>
                        </div>
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
                    {/* End of Portfolio 2 */}

                    {/* Portfolio 3 */}
                    <div className='col-lg-3 col-md-6 mb-3'>
                   <div class="portfolio__content grid swiper-slide">
                        <Image id ="myImg3" src="/assets/img/personal-project1.png" width={200} height={250} alt=" GameCom - (Forum Website)" class="portfolio__img"/>
                        
                        <div id="myModal3" class="modal">
                        <span class="close">&times;</span>
                        <img class="modal-content" id="img01-3"/>
                        <div className='captions-alt' id="caption3"></div>
                        </div>
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
                     {/* End of Portfolio 3 */}

                     {/*  Portfolio 4 */}
                    <div className='col-lg-3 col-md-6 mb-3'>
                    <div class="portfolio__content grid swiper-slide">
                        <Image id ="myImg4" src="/assets/img/capstone.png" width={200} height={250} alt="Capstone - GameCom -  (Forum Website)"  class="portfolio__img"/>
                            <div id="myModal4" class="modal">
                            <span class="close">&times;</span>
                            <img class="modal-content" id="img01-4"/>
                            <div className='captions-alt' id="caption4"></div>
                            </div>
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
                      {/* End of Portfolio 3 */}
                </div>
              </div>
        </div>
    </section>


    );
}

export default PortfolioPages;