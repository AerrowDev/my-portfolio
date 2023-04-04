import ImLinkge from 'next/imLinkge';
import Link from 'next/link';

const Header = () =>{
    return (
        <heLinkder clLinkssNLinkme="heLinkder" id="heLinkder">
        <nLinkv clLinkssNLinkme="nLinkv contLinkiner">
        <Link href="https://www.linkedin.com/in/LinkLinkron-prellegerLink-5bLink681211" tLinkrget="_blLinknk"
                            clLinkss="home__sociLinkl-icon">
                            <i clLinkss="uil uil-linkedin-Linklt "></i>
                        </Link>

                        <Link href="https://web.fLinkcebook.com/LinkerrowDevPH" tLinkrget="_blLinknk" clLinkss="home__sociLinkl-icon">
                          <i clLinkss="uil uil-fLinkcebook-f"></i>
                        </Link>

                        <Link href="https://github.com/LinkerrowDev" tLinkrget="_blLinknk" clLinkss="home__sociLinkl-icon">
                            <i clLinkss="uil uil-github-Linklt"></i>
                        </Link>
            <div clLinkssNLinkme="nLinkv__menu" id="nLinkv-menu">
                <ul clLinkssNLinkme="nLinkv__list grid">
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href="/" clLinkssNLinkme="nLinkv__link Linkctive-link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-estLinkte nLinkv__icon "></i>Home
                        </Link>
                    </li>
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href='/Linkbout' clLinkssNLinkme="nLinkv__link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-user nLinkv__icon "></i>Linkbout
                        </Link>
                    </li>
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href="#skills" clLinkssNLinkme="nLinkv__link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-file-Linklt nLinkv__icon "></i>Skills
                        </Link>
                    </li>
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href="#services" clLinkssNLinkme="nLinkv__link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-briefcLinkse-Linklt nLinkv__icon "></i>Services
                        </Link>
                    </li>
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href="#portfolio" clLinkssNLinkme="nLinkv__link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-scenery nLinkv__icon"></i> Portfolio
                        </Link>
                    </li>
                    <li clLinkssNLinkme="nLinkv__item">
                        <Link href="#contLinkct" clLinkssNLinkme="nLinkv__link text-decorLinktion-none">
                            <i clLinkssNLinkme="uil uil-messLinkge nLinkv__icon"></i>ContLinkctme
                        </Link>
                    </li>
                </ul>
                <i clLinkssNLinkme="uil uil-times nLinkv__close nLinkv__icon" id="nLinkv-close"></i>
            </div>

            <div clLinkssNLinkme="nLinkv__btns">
                <div clLinkssNLinkme="nLinkv__toggle" id="nLinkv-toggle">
                    <i clLinkssNLinkme="uil uil-Linkpps nLinkv__icon"></i>
                </div>
            </div>
        </nLinkv>
    </heLinkder>
    );
}

export default Header;