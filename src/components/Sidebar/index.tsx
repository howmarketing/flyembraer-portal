import { useEffect } from "react"

import { useGetMenu } from "api/menu/GetMenu"

import { Accordion } from "components/Accordion"
import { Flex } from "components/Flex"

// import { useAuth } from "hooks/useAuth"
import { useScrollBlock } from "hooks/useBlockScroll"
import { useGetBreakpoint } from "hooks/useGetBreakpoint"

import type { Menu } from "types/Menu"

import { MenuListItem } from "./MenuListItem"
import { MenuList, StyledNav, Wrapper } from "./styles"

type SidebarProps = {
	sidebarOpened: boolean
	handleToggleSidebar: (toggle: boolean) => void
}

export const Sidebar = ({ sidebarOpened, handleToggleSidebar }: SidebarProps) => {
	// const { userName } = useAuth()

	const isTablet = useGetBreakpoint("web")

	const [blockScroll, allowScroll] = useScrollBlock()

	// const { data: menus, refetch } = useGetMenu(userName, {
	//   enabled: false
	// })

	// useEffect(() => {
	//   if (userName) {
	//     refetch()
	//     return
	//   }
	// }, [userName, refetch])

	useEffect(() => {
		if (sidebarOpened && !isTablet) {
			blockScroll()
		} else {
			allowScroll()
		}
	}, [sidebarOpened, allowScroll, blockScroll, isTablet])

	const FIXED_MENU: Menu[] = [
		{
			id: -99,
			name: "home page",
			link: "/home",
		},
		{
			id: 100,
			name: "administration",
			link: "/admin",
			subMenus: [
				{
					id: 101,
					name: "portal",
					link: "/admin/portal",
					additionalSubMenus: [
						{ id: 1, name: "Market", link: "/admin/portal/market-type" },
						{ id: 2, name: "Aircraft", link: "/admin/portal/aircraft" },
						{ id: 3, name: "Application", link: "/admin/portal/application" },
						{ id: 4, name: "Job function", link: "/admin/portal/job-function" },
						{ id: 5, name: "Category", link: "/admin/portal/category" },
						{ id: 6, name: "Association", link: "/admin/portal/association" },
						{ id: 6, name: "Company", link: "/admin/portal/company-type" },
					],
				},
				{
					id: 102,
					name: "company",
					link: "/admin/company-update",
				},
				{
					id: 103,
					name: "user",
					link: "/admin/user-management",
				},
				{
					id: 104,
					name: "workflow",
					link: "/admin/workflow",
				},
				{
					id: 105,
					name: "message center messages",
					link: "/admin/message-center",
				},
				{
					id: 106,
					name: "message center templates",
					link: "/admin/message-center/manage-templates",
				},
				{
					id: 107,
					name: "page admin",
					link: "/admin/page-admin",
				},
			],
		},
		{
			id: -98,
			name: "download center",
			link: `${process.env.NEXT_PUBLIC_DC_APP_URL}`,
		},
		{
			id: -97,
			name: "support center",
			link: "/support-center",
		},
		{
			id: -96,
			name: "flight operations",
			link: "/flight-operations",
		},
		{
			id: -95,
			name: "leasing company",
			link: "/leasing-company",
		},
		{
			id: -94,
			name: "maintenance",
			link: "/maintenance",
		},
		{
			id: -93,
			name: "warranty",
			link: "/warranty",
		},
		{
			id: -92,
			name: "training",
			link: "/training",
		},
		{
			id: -91,
			name: "service solutions",
			link: "/service-solutions",
		},
		{
			id: -90,
			name: "news and events",
			link: "/news-events",
		},
	]

	// const FULL_MENU = FIXED_MENU.concat(menus ?? [])
	const FULL_MENU = FIXED_MENU

	return (
		<div>
			{sidebarOpened && !isTablet ? (
				<Flex
					css={{
						width: "100vw",
						height: "100vh",
						background: "black",
						zIndex: 10,
						position: "absolute",
						opacity: "0.4",
					}}
					onClick={() => handleToggleSidebar(false)}
				/>
			) : null}
			<Wrapper siderbarOpened={sidebarOpened} css={{ zIndex: 20, position: "relative" }}>
				<StyledNav>
					<Accordion type="single" collapsible asChild>
						<MenuList>
							{FULL_MENU && FULL_MENU.map((menu) => <MenuListItem key={menu.id} {...menu} />)}
						</MenuList>
					</Accordion>
				</StyledNav>
			</Wrapper>
		</div>
	)
}
