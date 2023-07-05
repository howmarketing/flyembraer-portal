import Link from "next/link"

import { HamburguerMenu } from "components/Icons/HamburguerMenu"
import { Popover } from "components/Popover"
import Text from "components/Text"

import { StyledArrow, StyledContent, StyledTrigger } from "./styles"

type HelpHamburguerMenuProps = {
	color?: "light" | "dark"
}

export const HelpHamburguerMenu = ({ color }: HelpHamburguerMenuProps) => {
	return (
		<Popover>
			<StyledTrigger color={color}>
				<HamburguerMenu width="24px" height="24px" />
			</StyledTrigger>
			<StyledContent
				color={color}
				align="center"
				collisionPadding={color === "light" ? 180 : 10}
				arrow={<StyledArrow color={color} />}
			>
				<Link href="/contact-us">
					<Text
						as="a"
						weight="medium"
						size="sm"
						color={color === "light" ? "brand-secondary" : "white"}
						css={{ lineHeight: "14px" }}
					>
						Contact Us
					</Text>
				</Link>
			</StyledContent>
		</Popover>
	)
}
