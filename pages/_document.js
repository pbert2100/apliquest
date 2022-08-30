import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png" />
            <link rel="icon" href="/icon-512x512.png" />
            <meta name="theme-color" content="#080808" />

            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name="keywords" content="" />
            <meta name='apple-mobile-web-app-title' content='Apliquest' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />

            <link rel='apple-touch-icon' sizes='192x192' href='/icon-192x192.png' />
            <link rel='apple-touch-icon' sizes='256x256' href='/icon-256x256.png' />
            <link rel='apple-touch-icon' sizes='384x384' href='/icon-384x384.png' />
            <link rel='apple-touch-icon' sizes='512x512' href='/icon-512x512.png' />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://apliquest.vercel.app' />
            <meta name='twitter:title' content='Apliquest' />
            <meta name='twitter:description' content='!' />

            <meta property='og:type' content='website' />
            <meta property='og:title' content='Apliquest' />
            <meta property='og:description' content='!' />
            <meta property='og:site_name' content='Apliquest' />
            <meta property='og:url' content='https://apliquest.vercel.app' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;