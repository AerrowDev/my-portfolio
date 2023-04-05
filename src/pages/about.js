import Header from '@/Components/nav'
import Head from 'next/head'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
import Aboutsection2 from '/src/Components/about-section2'
const AboutUsPage = () => {
    return (
        <>
        <Head>
        <title>AerrowDev &#124; About</title>
         </Head>
          <main>
          
          <Header/>
       <Aboutsection2/>
          </main>
           <Footer />
      </>
    )
}
export default AboutUsPage;