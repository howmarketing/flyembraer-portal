import Image from "next/image"
import Link from "next/link"

import { HelpPopoverButton } from "components/HelpPopoverButton"
import { MediaMatch } from "components/MediaMatch"

import { StyledNav, StyledAction, StyledCreateButton, StyledBox } from "./styles"

export const NavbarDefault = () => {
	return (
		<StyledNav>
			<StyledBox>
				<Link href="/home">
					<a>
						<Image
							src="/img/FlyEmbraer_Logo.svg"
							alt="FlyEmbraer logo"
							width={120}
							height={30}
							quality={100}
						/>
					</a>
				</Link>
			</StyledBox>

			<StyledAction>
				<MediaMatch greaterThan="tablet" asChild>
					<HelpPopoverButton color="light" />
				</MediaMatch>

				<Link href="/register">
					<StyledCreateButton>Create account</StyledCreateButton>
				</Link>
			</StyledAction>
		</StyledNav>
	)
}
