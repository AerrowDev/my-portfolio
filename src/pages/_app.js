import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Preloader from "/src/Components/Preloader";
import Mainlayout from '@/Components/layout/main-layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <Mainlayout>
      <Component {...pageProps} />
      </Mainlayout>
    </>
  )
}
