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
         <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
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
