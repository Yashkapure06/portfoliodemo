import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>

            <title>Yash Kapure - Portfolio</title>

            <link rel="stylesheet" href="css/bootstrap.min.css"/>
            <link rel="stylesheet" href="css/unicons.css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/owl.theme.default.min.css"/>

            <link rel="stylesheet" href="css/tooplate-style.css"/>
            
        </Head>
        <body>
          <Main />
          <NextScript />
                            
            <script async src="js/jquery-3.3.1.min.js"></script>
            <script async src="js/popper.min.js"></script>
            <script async src="js/bootstrap.min.js"></script>
            <script async src="js/Headroom.js"></script>
            <script async src="js/jQuery.headroom.js"></script>
            <script async src="js/owl.carousel.min.js"></script>
            <script async src="js/smoothscroll.js"></script>
            <script async src="js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument