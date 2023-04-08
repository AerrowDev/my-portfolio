import Header from '@/Components/nav'
import Head from 'next/head'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
import Contactme from '@/Components/contact';

const ContactPage = () => {
    return (
        <>
        <Head>
        <title>AerrowDev &#124; Contactme</title>
         </Head>
          <main>
          <Header/>
        <Contactme/>
          </main> 
           <Footer />
         
      </>
    )
}
export default ContactPage;