import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import type {AppProps} from 'next/app'

import {CacheProvider} from '@emotion/react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {ToastContainer} from 'react-toastify';

import createEmotionCache from '../utility/createEmotionCache';
import theme from '@/styles/theme';
import {EmotionCache} from "@emotion/cache";

import AppProvider from "@/context/app";


const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({Component, emotionCache = clientSideEmotionCache, pageProps}: MyAppProps) {
    return <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppProvider>
                <Component {...pageProps} />
                <ToastContainer theme="colored" limit={3}/>
            </AppProvider>
        </ThemeProvider>
    </CacheProvider>
}
