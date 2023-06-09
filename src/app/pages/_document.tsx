// import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//     static async getInitialProps(ctx: DocumentContext) {
//         const sheet = new ServerStyleSheet(); // Create an instance of ServerStyleSheet
//         const originalRenderPage = ctx.renderPage;

//         try {
//             ctx.renderPage = () =>
//                 originalRenderPage({
//                     enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />), // gets the styles from all the components inside <App>
//                 });

//             const initialProps = await Document.getInitialProps(ctx);

//             return {
//                 ...initialProps,
//                 styles: (
//                     <>
//                         {initialProps.styles}
//                         {/* insert the collected styles to the html document*/}
//                         {sheet.getStyleElement()}
//                     </>
//                 ),
//             };
//         } finally {
//             sheet.seal();
//         }
//     }

//     render() {
//         return (
//             <Html>
//                 <Head>
//                     {/* <link
//                         rel="preload"
//                         href="./fonts/Roboto400.woff2"
//                         as="font"
//                         type="font/woff2"
//                         crossOrigin=""
//                     />
//                     <link
//                         rel="preload"
//                         href="./fonts/Roboto400.woff"
//                         as="font"
//                         type="font/woff2"
//                         crossOrigin=""
//                     />
//                     <link
//                         rel="preload"
//                         href="./fonts/Roboto700.woff2"
//                         as="font"
//                         type="font/woff2"
//                         crossOrigin=""
//                     />
//                     <link
//                         rel="preload"
//                         href="./fonts/Roboto700.woff"
//                         as="font"
//                         type="font/woff2"
//                         crossOrigin=""
//                     /> */}
//                     <style
//                         dangerouslySetInnerHTML={{
//                             __html: `
//                                 </style>
//                                     <link
//                                         rel="preload"
//                                         href="./fonts/Roboto400.woff2"
//                                         as="font"
//                                         type="font/woff2"
//                                         crossOrigin=""
//                                     />
//                                     <link
//                                         rel="preload"
//                                         href="./fonts/Roboto400.woff"
//                                         as="font"
//                                         type="font/woff2"
//                                         crossOrigin=""
//                                     />
//                                     <link
//                                         rel="preload"
//                                         href="./fonts/Roboto700.woff2"
//                                         as="font"
//                                         type="font/woff2"
//                                         crossOrigin=""
//                                     />
//                                     <link
//                                         rel="preload"
//                                         href="./fonts/Roboto700.woff"
//                                         as="font"
//                                         type="font/woff2"
//                                         crossOrigin=""
//                                     />
//                                 <style>`,
//                         }}
//                     ></style>
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         );
//     }
// }
