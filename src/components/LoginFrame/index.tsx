import Link from "next/link"
import { useRouter } from "next/router"

import { useEffect, useMemo, useState } from "react"

import { useScrollBlock } from "hooks/useBlockScroll"

import { styled } from "../../../stitches.config"

const F5_IDP_URL = process.env.NEXT_PUBLIC_IDP_URL

export const LoginFrame = () => {
	const router = useRouter()
	const [blockScroll, allowScroll] = useScrollBlock()

	const [otpFlow, setOtpFlow] = useState(false)
	const [showAlreadyLoggedIn, setShowAlreadyLoggedIn] = useState(false)

	const f5Messages = useMemo(
		() => ({
			"f5apm:allow": () => {
				allowScroll()
				router.push("/home")
			},
			"f5apm:already_loggedin": () => setShowAlreadyLoggedIn(true),
			"f5apm:otp_flow": () => {
				setOtpFlow(true)
				blockScroll()
			},
			"f5apm:back_button": () => router.reload(),
			"f5apm:forgot_password": () => router.push("/forgot-password"),
			"f5apm:error": () => router.reload(),
			"f5apm:deny": () => router.reload(),
		}),
		[allowScroll, blockScroll, router]
	)

	useEffect(() => {
		function receiveMessage(event: MessageEvent<unknown>) {
			const { origin } = event
			const data = event.data as keyof typeof f5Messages

			if (origin === F5_IDP_URL) {
				f5Messages[data]()
			}
		}

		window.addEventListener("message", receiveMessage)

		return () => {
			window.removeEventListener("message", receiveMessage)
		}
	}, [f5Messages])

	return (
		<StyledWrapper otpFlow={otpFlow}>
			<StyledIframe
				src={`https://sonarqube.dev.flyembraer.com/login`}
				otpFlow={otpFlow}
				frameBorder="0"
				scrolling="no"
			/>

			{showAlreadyLoggedIn ? (
				<StyledIframe as="div">
					<StyledBox>
						Alredy logged? &nbsp;
						<Link href="/home">
							<a>Get In</a>
						</Link>
					</StyledBox>
				</StyledIframe>
			) : null}
		</StyledWrapper>
	)
}

const StyledWrapper = styled("div", {
	width: "100vw",
	height: "512px",
	position: "absolute",
	top: "0",
	right: "0",
	zIndex: "0",
	overflow: "hidden",

	"@maxLargeMobile": {
		width: "358px",
		right: "-25px",
	},

	variants: {
		otpFlow: {
			true: {
				height: "100vh",
				overflow: "hidden",
				top: "-55px",

				"&::after": {
					content: "",
					position: "absolute",
					width: "100vw",
					height: "100vh",
					backdropFilter: "blur(6px)",
				},
			},
		},
	},
})

const StyledIframe = styled("iframe", {
	width: "394px",
	height: "100%",
	position: "absolute",
	top: "0",
	right: "-5px",
	zIndex: 1,

	variants: {
		otpFlow: {
			true: {
				width: "405px",
				height: "363px",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				border: "1px solid #A3B5BF",
				borderRadius: "0.5rem",
			},
		},
	},
})

const StyledBox = styled("div", {
	padding: "1rem 3rem",
})
