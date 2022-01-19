import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="h-100 bg-stone-800 text-teal-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument