import Header from '@/Components/nav'
import Head from 'next/head'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
import PortfolioPages from '/src/Components/Portfolio'
const PortfolioPage = () => {
    return (
        <>
        <Head>
        <title>AerrowDev &#124; Portfolio</title>
        <script src="/assets/js/swiper-bundle.min.js"></script>
         </Head>
          <main>
          <Header/>
        <PortfolioPages/>
          </main> 
           <Footer />
           <script src="/assets/js/swiper-bundle.min.js"></script>
      </>
    )
}
export default PortfolioPage;