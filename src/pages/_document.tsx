import Document, { Head, Html, Main, NextScript } from "next/document"

import { getCssText } from "../../stitches.config"

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-regular.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-500.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-500.woff2"
						as="font"
						type="font/woff2"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-700.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/roboto-v30-latin-700.woff2"
						as="font"
						type="font/woff2"
						crossOrigin=""
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
