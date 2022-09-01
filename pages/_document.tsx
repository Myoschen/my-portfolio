import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      data-theme="default"
      style={{ scrollBehavior: 'smooth', scrollPaddingTop: '120px' }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <body className="font-raleway">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
