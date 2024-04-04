// import Head from "next/head";
import Footer from "@/Components/footer";
import "bootstrap/dist/css/bootstrap.css";
import PortfolioPages from "/src/Components/Portfolio";
import { baseUrl } from "@/utils/constant";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Home &#124; Aaron Prellegera &#58; Portfolio",
  description:
    "Aspiring Web Developer crafting engaging digital experiences. Proficient in HTML, CSS, JavaScript. Collaborating with designers, clients, and developers to create stunning websites. Explore my portfolio for examples.",
  keywords:
    "front-end developer, web developer, portfolio, react developer, nextjs developer, javascript developer, html developer, css developer, portfolio website",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Aaron Prellegera" }],
};
export default function PortfolioPage() {
  return (
    <>
    
      <main>
        <PortfolioPages />
      </main>
    </>
  );
}
