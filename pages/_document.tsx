import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import Link from '../components/link';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const page = ctx.renderPage();

		return {...page};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>

					<meta name="description" content="Personal website of Ryan Aulia, software engineer, currently based in Jakarta, Indonesia."/>
					<meta property="og:title" content="Ryan Aulia"/>
					<meta property="og:description" content="Personal website of Ryan Aulia, software engineer, currently based in Jakarta, Indonesia."/>
					<meta property="og:image" content="/favicon.svg"/>
					<meta property="og:image:alt" content="Personal website of Ryan Aulia"/>
					<meta property="og:locale" content="en_US"/>
					<meta property="og:type" content="website"/>
					<meta property="og:url" content="https://aulianza.id"/>
					<meta name="twitter:card" content="summary_large_image"/>
					<link rel="canonical" href="https://aulianza.id"/>

					<link rel="icon" href="/favicon.ico"/>
					<link rel="icon" href="/favicon.png" type="image/svg+xml"/>
					<link rel="apple-touch-icon" href="/favicon.png"/>
					<link rel="manifest" href="/manifest.webmanifest" />

					<link
						rel="preload"
						href="/public/fonts/iAWriterQuattroV.woff2"
						crossOrigin="anonymous"
						as="font"
					/>
					<link
						rel="preload"
						href="/public/fonts/iAWriterQuattroV-Italic.woff2"
						crossOrigin="anonymous"
						as="font"
					/>
				</Head>
				<body className="bg-gray-900 text-gray-200 relative h-full min-h-screen">
					<Main/>
					<NextScript />
					<footer className="text-right text-xs text-gray-400 absolute bottom-2 right-4">
						<p>&copy; {new Date().getFullYear()} Ryan Aulia &mdash; <Link href="/legal" text="Legal"/></p>
					</footer>
				</body>
			</Html>
		);
	}
}
