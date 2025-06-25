import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Imagenav from "/src/Components/logo-nav";
import Welcome from "src/Components/welcome";
const Aboutsection = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social"></div>
                    <Welcome className="home__img" />

                    <div className="home__data">
                        <p className=" home__welcome text-muted text-uppercase ">
                            {" "}
                            Let&apos;s collaborate and bring our ideas to life.
                        </p>
                        <h1 className="home__title">Hi, I&apos;am Aaron </h1>
                        <h3 className="home__subtitle">Web Developer / QA Engineer </h3>
                        <p className="home__description">
                        I'm a Web Developer and Software Test Engineer with experience in dynamic and
                        static websites focused on accessibility, performance, and SEO.
                        </p>
                        <Link
                            download
                            href="/assets/pdf/CV_Prellegera-AaronD.pdf"
                            className="button button--flex me-4"
                        >
                            Download Resume
                            <i className="uil uil-download-alt button__icon"></i>
                        </Link>
                        <Link
                            href="contact/"
                            className="text-dark button--flex"
                        >
                            Contact Me
                        </Link>
                        <div className="my-5">
                            <Link
                                href="https://m.me/ore.wa.haruhiro"
                                target="_blank"
                                className="home__social-icon px-3"
                            >
                                <i className="uil uil-facebook-messenger-alt"></i>
                            </Link>

                            <Link
                                href="https://wa.me/message/HMLDVC5ST6J2G1"
                                target="_blank"
                                className="home__social-icon px-3"
                            >
                                <i className="uil uil-whatsapp"></i>
                            </Link>

                            <Link
                                href="https://join.skype.com/invite/q7YWQejcIEuq"
                                target="_blank"
                                className="home__social-icon px-3"
                            >
                                <i className="uil uil-skype-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsection;
