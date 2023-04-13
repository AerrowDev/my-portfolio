import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';
const Contactme = () =>{
  
    return (
       
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div>
                <div className="contact__information">
                    <i className="uil uil-phone contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">+63977-616-2529</span>
                    </div>
                </div>
                <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">sgaeprellegera@gmail.com</span> <br/>
                         <span className="contact__subtitle">prellegeraaaron@yahoo.com</span>
                    </div>
                </div>
                <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">Inamnan Grande, Guinobatan Albay</span>
                    </div>
                </div>
            </div>

            <form className="contact__form grid" action="/https://formsubmit.co/32f5e4f007b23de315ce19cec259e5ea" method="post">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                     <label for="" className="contact__label">Name</label> 
                     <input type="text" className="contact__input" name="name" id="name" required/>
                    </div>
                    <div className="contact__content">
                        <label for="" className="contact__label">Email</label> 
                        <input type="email" className="contact__input" name="email" id="email" required/>
                       </div>
                </div>
                    <div className="contact__content">
                        <label for="" className="contact__label">Subject</label> 
                        <input type="text" className="contact__input" name="subject" id="subject" required/>
                   </div>
                   <div className="contact__content">
                        <label for="" className="contact__label">Message</label> 
                        <textarea cols="0" rows="7" className="contact__input" name="message" id="message" required></textarea>
                   </div>
                    <div>
                        <button className="button button--flex"> Send Message  <i className="uil uil-message button__icon"></i> </button>
                    </div>
                    <input type="hidden" name="_next" value="https://www.aaronprellegera.cf/"/>
                    <input type="hidden" name="_captcha" value="false"/>
            </form>
            </div>
       
        </section>

    );
}

export default Contactme;