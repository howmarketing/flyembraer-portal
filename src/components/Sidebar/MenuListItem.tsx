import Link from "next/link"
import { useRouter } from "next/router"

import { Menu } from "types/Menu"
import { AccordionContent, AccordionItem, AccordionTrigger } from "components/Accordion"
import { ListItem } from "./styles"
import { Spinner } from "components/Spinner"
import { House } from "components/Icons/House"
import { At } from "components/Icons/At"

export const MenuListItem = ({ id, subMenus, name, link }: Menu) => {
	const router = useRouter()

	const baseRoute = id ? id >= 0 : false

	if (!baseRoute && link) {
		return (
			<Link href={link}>
				<a>
					<ListItem style={router.pathname === link ? { backgroundColor: "#005AAF", color: "#FFFFFF" } : {}}>
						{link === "/home" ? (
							<>
								<House width={20} height={20} fill={router.pathname === link ? "#FFFFFF" : "#005AAF"} />
								&nbsp;&nbsp;
							</>
						) : null}
						{name}
					</ListItem>
				</a>
			</Link>
		)
	}

	return subMenus && link ? (
		<AccordionItem value={id ? id.toString() : ""} asChild>
			<li>
				<AccordionTrigger asChild onClick={() => router.push(link)}>
					<ListItem style={router.pathname === link ? { backgroundColor: "#005AAF", color: "#FFFFFF" } : {}}>
						{name === "administration" ? (
							<>
								<At width={20} height={20} fill={router.pathname === link ? "#FFFFFF" : "#005AAF"} />
								&nbsp;&nbsp;
							</>
						) : null}
						{name}
					</ListItem>
				</AccordionTrigger>
				<AccordionContent asChild>
					<li>
						{subMenus.map(
							(subMenu) =>
								subMenu && (
									<Link key={subMenu.id} href={subMenu.link || ""}>
										<a>
											<ListItem
												style={
													router.pathname === subMenu.link
														? {
																backgroundColor: "#005AAF",
																color: "#FFFFFF",
																lineHeight: "1rem",
																paddingLeft: "3rem",
														  }
														: { lineHeight: "1rem", color: "#778CA2", paddingLeft: "3rem" }
												}
											>
												{subMenu.name}
											</ListItem>
										</a>
									</Link>
								)
						)}
					</li>
				</AccordionContent>
			</li>
		</AccordionItem>
	) : (
		<Spinner width={8} height={8} />
	)
}
