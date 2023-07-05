import Link from "next/link"

import { ArrowDown } from "components/Icons/ArrowDown"
import { Popover } from "components/Popover"
import Text from "components/Text"

import { StyledArrow, StyledContent, StyledTrigger } from "./styles"

type HelpPopoverButtonProps = {
	color?: "light" | "dark"
}

export const HelpPopoverButton = ({ color }: HelpPopoverButtonProps) => {
	return (
		<Popover>
			<StyledTrigger color={color}>
				<Text
					weight={"medium"}
					size={"sm"}
					color={color === "light" ? "white" : "gray300"}
					css={{ lineHeight: "24px", display: "inline-flex", gap: "6px", alignItems: "center" }}
				>
					<>
						Help
						<ArrowDown width="8.33px" height="5px" />
					</>
				</Text>
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

				<Link href="/guides">
					<Text
						as="a"
						weight="medium"
						size="sm"
						color={color === "light" ? "brand-secondary" : "white"}
						css={{ lineHeight: "14px" }}
					>
						Guides
					</Text>
				</Link>
			</StyledContent>
		</Popover>
	)
}
