import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Preloader from "/src/Components/Preloader";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      
      <Component {...pageProps} />
    </>
  )
}
