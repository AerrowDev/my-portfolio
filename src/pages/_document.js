import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
      <link rel="stylesheet" href="/assets/css/styles.css"/>
      <link rel="preload" href="/assets/js/preloader.js" as="script" />
      </Head>
      <body>
      <div id="preloader">
        <div class="preloader-logo">
          <img src="/assets/img/favicon.png"  width= "1000" height="80" alt="pre-loader"/>
        </div>
      </div>
        <Main />
        
        <NextScript />
       
      </body>
    </Html>
  )
}
