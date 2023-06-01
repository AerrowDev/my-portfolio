import Header from '@/Components/nav'
import Head from 'next/head'
import Footer from '@/Components/footer';
import 'bootstrap/dist/css/bootstrap.css'
import SkillsPage from '/src/Components/Skills'
const SkillPage = () => {
    return (
        <>
        <Head>
        <title>AerrowDev &#124; Skills</title>
         <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
         </Head>
          <main>
          <Header/>
       <SkillsPage/>
          </main>
           <Footer />
      </>
    )
}
export default SkillPage;
