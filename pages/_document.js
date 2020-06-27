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
                    <meta property="og:image" content="http://edinburghbeethoven2020.org/images/home-banner.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1366" />
                    <meta property="og:image:height" content="584" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170882566-1"></script>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-170882566-1');
              `,
                    }}
                />
            </Html>
        )
    }
}

export default MyDocument