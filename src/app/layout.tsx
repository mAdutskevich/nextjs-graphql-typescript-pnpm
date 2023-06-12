// import localFont from 'next/font/local';
import { AuthProvider } from '@/components/templates/AuthProvider';
import StyledComponentsRegistry from './styledRegistry';
// Fonts can be added in at least 3 different ways:
// 1) via gloval.css. Easy.
// https://nextjs.org/docs/app/building-your-application/optimizing#static-assets
// The cons: haven't found yet
import './global.css';

// 2) declare fonts via localFont
// const roboto = localFont({
//     src: [
//         {
//             path: '../themes/fonts/Roboto400.woff2',
//             weight: '400',
//             style: 'normal',
//         },
//         {
//             path: '../themes/fonts/Roboto700.woff2',
//             weight: '700',
//             style: 'normal',
//         }
//     ]
// });
// The cons: font-family is with hashes, not with normal 'Roboto, sans-serif'

// 3) Via ThemeProvider and public folder.
// The cons: the font flashes 3 times

export const metadata = {
    title: 'NextJS GraphQL App',
    description: 'M.Adutskevich test NextJS GraphQL app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/* // 2) add fonts via fonts.className */}
            {/* <body suppressHydrationWarning={true} className={roboto.className}> */}
            <body suppressHydrationWarning={true}>
                <StyledComponentsRegistry>
                    <AuthProvider>{children}</AuthProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
