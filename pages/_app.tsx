import { AppProps } from "next/app";
import Head from "next/head";

import NextNProgress from "nextjs-progressbar";

import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{/* progress bar on change in router */}
			<NextNProgress
				color="#24292F"
				startPosition={0.0}
				stopDelayMs={0}
				// height={3}
				// showOnShallow={true}
			/>

			<Head>
				<title>Default Title</title>
				<link rel="icon" href="/favicon.ico" />

				{/* meta tags */}
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<Navbar />

			<main id="main-content">
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default App;
