import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { FooterSimple } from '@/components/FooterSimple/FooterSimple';
import '@mantine/carousel/styles.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={{ ...theme, primaryColor: 'myPrimary' }}>
            <Head>
                <title>Jacky Yao | jckyy.com</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <HeaderSimple />
            <Component {...pageProps} />
            <FooterSimple />
        </MantineProvider>
    );
}
