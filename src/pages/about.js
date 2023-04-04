import Header from '@/Components/nav'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
const AboutUsPage = () => {
    return (
        <>
          <main>
          
          <Header/>
          <section class="about section" id="about">
            <h2 class="section__title">About Me </h2>
            <span class="section__subtitle">My Introduction</span>

            <div class="about__container container grid">
                <img src="assets/img/2x2 23 - final.jpg" alt="" class="about__img"/>
                <div class="about__data">
                    <p class="about__description">
                        I am a web developer and graphic designer with a passion for creating visually appealing and
                        functional websites and designs. My skills include HTML, CSS, JavaScript, and Adobe Creative
                        Suite. I bring projects from concept to completion with my technical and creative abilities.
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">01+</span>
                            <span class="about__info-name">Year/s <br/> experience</span>
                        </div>

                        <div>
                            <span class="about__info-title">15+</span>
                            <span class="about__info-name">Completed <br/> Project</span>
                        </div>

                        <div>
                            <span class="about__info-title">02+</span>
                            <span class="about__info-name">Companies <br/> worked</span>
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

          </main>
           <Footer />
      </>
    )
}
export default AboutUsPage;