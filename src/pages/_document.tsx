import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import createEmotionCache from '../utility/createEmotionCache';
import theme from "../styles/theme"
import createEmotionServer from '@emotion/server/types/create-instance';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    {/* PWA primary color */}
                    <meta charSet="UTF-8"/>

                    <meta name="theme-color" content={theme.palette.primary.main}/>
                    <meta property="title" content="Pierre | Centro Profesional"/>
                    <meta property="og:title" content="Pierre | Centro Profesional"/>
                    <meta property="og:url" content="https://pierre.com"/>
                    <meta property="og:site_name" content="Pierre | Centro Profesional"/>
                    <meta property="og:locale" content="es"/>
                    <meta property="og:locale:alternate" content="es_AR"/>
                    <meta name='author' content='Pierre'  />
                    <meta name="keywords" content="Centro Profesional" 
                    />
                    <meta name="description" property="og:description"
                          content="Pierre | Centro Profesional"/>
                    <meta property="og:image" content="/favicon.png"/>

                    <meta
                        property="og:description"
                        content="Centro Profesional"
                        />
                    <meta
                        property="og:image"
                        content="/favicon.png"
                    />

                    <link rel="shortcut icon" href="/favicon.png"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                          referrerPolicy="no-referrer" crossOrigin='anonymous'/>




                    {(this.props as any).emotionStyleTags}

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const {extractCriticalToChunks} = createEmotionServer(cache);

    /* eslint-disable */
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    //@ts-ignore
                    return <App emotionCache={cache} {...props} />;
                },
        });
    /* eslint-enable */

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: style.css}}
        />
    ));

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags,
        ],
    };
};