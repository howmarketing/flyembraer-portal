import Image from "next/image"
import Link from "next/link"

import Avatar from "components/Avatar"
import { HelpPopoverButton } from "components/HelpPopoverButton"
import { Bell } from "components/Icons/Bell"
import { HamburguerMenu } from "components/Icons/HamburguerMenu"
import { HamburguerMenuClose } from "components/Icons/HamburgueMenuClose"
import { MediaMatch } from "components/MediaMatch"

// import { useAuth } from "hooks/useAuth"

import { StyledNav, StyledAction, StyledMenuButton, StyledCreateButton, StyledButton, StyledBox } from "./styles"
import { useGetProfile } from "api/profile/getProfile"

type NavbarProps = {
	sidebarOpened?: boolean
	handleToggleSidebar?: (toggle: boolean) => void
}

export const Navbar = ({ handleToggleSidebar, sidebarOpened }: NavbarProps) => {
	// const { token } = useAuth()

	return (
		<StyledNav>
			<StyledBox>
				<MediaMatch lessThan="web" asChild>
					<StyledMenuButton onClick={() => handleToggleSidebar && handleToggleSidebar(!sidebarOpened)}>
						{sidebarOpened ? (
							<HamburguerMenuClose width="24" fill={"#FFFFFF"} />
						) : (
							<HamburguerMenu width="24" fill={"#FFFFFF"} />
						)}
					</StyledMenuButton>
				</MediaMatch>

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

				{/* Disabled until dev team create feats for this */}
				{/* <StyledButton>Login as </StyledButton>
            <Bell width="21" fill={"#FFFFFF"} /> */}
				<Avatar />
			</StyledAction>
		</StyledNav>
	)
}
