import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600&display=swap' rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=League+Spartan:wght@400;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
