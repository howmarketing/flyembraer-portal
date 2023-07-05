import dynamic from "next/dynamic"

import type { NextPage } from "next"
import type { AppProps } from "next/app"

import { ReactElement } from "react"

import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { queryClient } from "services/queryClient"

import "../styles/global.css"

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page)

	return getLayout(
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
})
