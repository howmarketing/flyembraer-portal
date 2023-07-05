import Image from "next/future/image"

import { Flex } from "components/Flex"

import { styled } from "../../../stitches.config"

export const AirplaneBackground = () => (
	<Wrapper>
		<Image src="/img/Plane_2.png" alt="Image of an executive airplane" quality={25} priority={true} />
		<Image src="/img/Plane_3.png" alt="Image of a military airplane" quality={25} priority={true} />
	</Wrapper>
)

const Wrapper = styled(Flex, {
	position: "fixed",
	top: "0",
	zIndex: "-1",
	width: "100%",
	height: "100%",

	"&::after": {
		content: "",
		position: "absolute",
		width: "100%",
		height: "100%",
		backdropFilter: "blur(6.5px)",
	},

	"& > img": {
		objectFit: "cover",
	},

	"& > img:first-child": {
		width: "60%",
		clipPath: "polygon(0px 0px, 100% 0px, 85% 100%, 0px 100%)",
	},

	"& > img:last-child": {
		width: "50%",
		marginLeft: "-10%",
		clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
	},
})
