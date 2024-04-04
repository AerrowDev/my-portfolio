import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect } from "react";
import { Portfolio } from "../../data/portfolio";
const PortfolioPages = () => {
    useEffect(() => {
        Portfolio.forEach((item, index) => {
            const modal = document.getElementById(`myModal${index + 1}`);
            const img = document.getElementById(`myImg${index + 1}`);
            const modalImg = document.getElementById(`img01-${index + 1}`);
            const captionText = document.getElementById(`caption${index + 1}`);
            const span = document.getElementsByClassName("close")[index];

            img.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            };

            span.onclick = function () {
                modal.style.display = "none";
            };
        });
    }, []);
    return (
        <section class="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent work</span>
            <div class="portfolio__container container swiper-container">
                <div className="container">
                    <div className="row">
                        {Portfolio.map((item, index) => (
                            <div className="col-lg-3 col-md-6 mb-3" key={index}>
                                <div className="portfolio__content grid swiper-slide">
                                    <Image
                                        id={`myImg${index + 1}`}
                                        src={item.img}
                                        width={200}
                                        height={250}
                                        alt={item.alt}
                                        className="portfolio__img"
                                    />

                                    <div
                                        id={`myModal${index + 1}`}
                                        className="modal"
                                    >
                                        <span className="close">&times;</span>
                                        <Image
                                            className="modal-content"
                                            id={`img01-${index + 1}`}
                                            alt={item.alt}
                                        />
                                        <div
                                            className="captions-alt"
                                            id={`caption${index + 1}`}
                                        ></div>
                                    </div>

                                    <div className="portfolio__data">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="pt-3">
                                                        <h3 className="portfolio__title">
                                                            Tool used:
                                                        </h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {" "}
                                                        <ul className="stacks d-flex gap-2 p-0 flex-wrap">
                                                            {item.tools.map(
                                                                (item, idx) => (
                                                                    <li
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="list-none p-0"
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2">
                                                        <Link
                                                            href={item.link}
                                                            className="button button--flex button--smal portfolio__button mt-2"
                                                            target="_blank"
                                                        >
                                                            Demo
                                                            <i className="uil uil-arrow-right button__icon"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPages;
