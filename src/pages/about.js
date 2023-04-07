import Header from '@/Components/nav'
import Head from 'next/head'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
import Aboutsection2 from '/src/Components/about-section2'
import Aboutqualification from '@/Components/about-qualificationjs';
const AboutUsPage = () => {
    return (
        <>
        <Head>
        <title>AerrowDev &#124; About</title>
         </Head>
          <main>
          
          <Header/>
       <Aboutsection2/>
       <Aboutqualification/>
          </main>
           <Footer />
           <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      </>
    )
}
export default AboutUsPage;