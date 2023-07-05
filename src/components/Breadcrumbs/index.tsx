import React, { ReactNode, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { StyledItem, StyledList } from "./styles"

function convertBreadcrumb(title: string) {
	const transformedTitle = title.split(/[?#]/)[0].replaceAll("-", " ")

	// decode for utf-8 characters and return ascii.
	return decodeURI(transformedTitle).toUpperCase()
}

type BreadcrumbItemProps = {
	children: ReactNode
	isCurrentPath?: boolean
	href?: string
}

const BreadcrumbItem = ({ children, isCurrentPath = false, href }: BreadcrumbItemProps) => {
	return (
		<StyledItem isCurrentPath={isCurrentPath}>
			{href ? (
				<Link href={href}>
					<a>{children}</a>
				</Link>
			) : (
				<strong>{children}</strong>
			)}
		</StyledItem>
	)
}

type Breadcrumb = {
	breadcrumb: string
	href: string
}

export const Breadcrumbs = () => {
	const router = useRouter()
	const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null)

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split("/")
			linkPath.shift()

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: "/" + linkPath.slice(0, i + 1).join("/"),
				}
			})

			setBreadcrumbs(pathArray)
		}
	}, [router])

	if (!breadcrumbs || breadcrumbs.length < 2) {
		return null
	}

	return (
		<nav aria-label="Breadcrumbs">
			<StyledList>
				{breadcrumbs.length >= 1 &&
					breadcrumbs.map((breadcrumb, index) => {
						if (!breadcrumb || breadcrumb.breadcrumb.length === 0) {
							return
						}
						const isCurrentPath = index === breadcrumbs.length - 1
						return (
							<BreadcrumbItem
								key={breadcrumb.href}
								isCurrentPath={isCurrentPath}
								href={isCurrentPath ? undefined : breadcrumb.href}
							>
								{convertBreadcrumb(breadcrumb.breadcrumb)}
							</BreadcrumbItem>
						)
					})}
			</StyledList>
		</nav>
	)
}
