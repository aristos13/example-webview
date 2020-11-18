/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { fetcher } from '../util/util';

import '../styles/index.css';

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webviews</title>
        <meta name="apple-mobile-web-app-title" content="Moveo AI | Webviews" />
        <meta name="application-name" content="Moveo AI | Webviews" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
