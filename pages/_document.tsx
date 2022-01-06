import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
        <body className="loading">
          <NextScript />
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument
