import { useRouter } from "next/router"

import { ReactNode, useEffect, useRef, useState } from "react"

import * as PopoverPrimitive from "@radix-ui/react-popover"

import { MediaMatch } from "components/MediaMatch"

// import { useAuth } from "hooks/useAuth"

import * as S from "./styles"
// import { postTokenRevoke } from "api/auth/postTokenRevoke"

type AvatarProps = {
	imageUrl?: string
}

const Content = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<PopoverPrimitive.Portal>
			<S.StyledContent sideOffset={5} {...props}>
				{children}
				<S.StyledArrow />
			</S.StyledContent>
		</PopoverPrimitive.Portal>
	)
}

const Avatar = ({ imageUrl = "/img/profile-image.png" }: AvatarProps) => {
	const router = useRouter()
	// const { token, logOut } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<any>(null)

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [ref])

	return (
		<Popover open={isOpen}>
			<PopoverTrigger asChild>
				<S.ButtonWrapper
					aria-label="Profile avatar"
					onClick={() => {
						setIsOpen(true)
					}}
				>
					<S.StyledImage src={imageUrl} alt="Profile image" width="36" height="36" />
				</S.ButtonWrapper>
			</PopoverTrigger>

			<PopoverContent>
				<div ref={ref}>
					<S.StyledBox>
						<S.StyledItem
							onClick={() => {
								setIsOpen(false)
								router.push("/my-profile")
							}}
						>
							View my profile
						</S.StyledItem>

						<MediaMatch lessThan="tablet" asChild>
							<S.StyledItem>Help</S.StyledItem>
						</MediaMatch>

						<S.StyledItem
							onClick={() => {
								setIsOpen(false)
								// logOut()
								// postTokenRevoke(token)
							}}
						>
							Log out
						</S.StyledItem>
					</S.StyledBox>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default Avatar

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverContent = Content
