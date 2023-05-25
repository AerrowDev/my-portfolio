import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Preloader from "/src/Components/Preloader";
import MessengerChat from '/src/Components/MessengerChat';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <MessengerChat />
      <Component {...pageProps} />
    </>
  )
}
