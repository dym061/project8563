import '@/styles/globals.css'
import Prevent from "./prevent";

import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
		  <Head>
		    <title>Creatift - Imported Furniture &amp; Decor Items</title> 
		    <meta name="robots" content="noindex"/>
		  </Head>
		  <Prevent />
		  <Component {...pageProps} />
		</>
		);
	}