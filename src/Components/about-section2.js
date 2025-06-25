import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Imagenav from "/src/Components/logo-nav";
import { useEffect, useRef } from "react";
import CountUp from "countup.js";
const Aboutsection2 = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me </h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid " style={{placeItems: "center"}}>
                {/* <img
                    src="assets/img/2x2 23 - final.jpg"
                    alt=""
                    className="about__img"
                /> */}
                <div className="about__data">
                    <p className="about__description">
                    I'm a Web Developer and Software Test Engineer with experience in dynamic and
static websites focused on accessibility, performance, and SEO. I’ve worked
closely with backend developers, UI/UX teams, and QA to ensure high-quality
deliverables across web platforms. My background includes developing
responsive front-ends, managing CMS systems, performing software testing, and
contributing to live streaming and branding/blog projects. I'm passionate about
clean code, quality assurance, and continuous growth.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">02</span>
                            <span className="about__info-name">
                                Year/s <br /> experience
                            </span>
                        </div>

                        <div>
                            <span className="about__info-title">15</span>
                            <span className="about__info-name">
                                Completed <br /> Project
                            </span>
                        </div>

                        <div>
                            <span className="about__info-title">03</span>
                            <span className="about__info-name">
                                Companies <br /> worked
                            </span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a
                            download=""
                            href="/assets/pdf/CV_Prellegera-AaronD.pdf"
                            className="button button--flex"
                        >
                            Download Resume{" "}
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsection2;
