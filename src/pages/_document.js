import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>


    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css"/>

    <link rel="stylesheet" href="assets/css/styles.css"/>

    <link rel="stylesheet" 
             href=
"https://unpkg.com/purecss@2.0.6/build/pure-min.css"
             integrity=
"sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" 
             crossorigin="anonymous"/>
      </Head>
      <body>
        <Main />
        
        <NextScript />
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      </body>
    </Html>
  )
}
