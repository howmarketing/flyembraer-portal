import Image from "next/image"
import Link from "next/link"
import { styled } from "../../../stitches.config"

type ArticleCardProps = {
	title: string
	body: string
	imgSrc?: string
	imgAlt?: string
	linkUrl: string
}

export const ArticleCard = ({ title, body, imgSrc, imgAlt, linkUrl }: ArticleCardProps) => {
	return (
		<CardWrapper>
			{imgSrc ? (
				<ImagePlaceHolder>
					<Image src={imgSrc} alt={imgAlt} layout="fill" />
				</ImagePlaceHolder>
			) : (
				<ImagePlaceHolder />
			)}
			<Title>{title}</Title>
			<Body>{body}</Body>
			<Link href={linkUrl}>
				<StyledLink>See more</StyledLink>
			</Link>
		</CardWrapper>
	)
}

const CardWrapper = styled("article", {
	width: "300px",
	height: "auto",
	display: "flex",
	flexDirection: "column",
})

const ImagePlaceHolder = styled("div", {
	width: "100%",
	height: "170px",
	position: "relative",
	mb: "$16",
	borderRadius: "8px",
	backgroundColor: "#DEDEDE",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)",
	"& img": {
		borderRadius: "8px",
	},
})

const Title = styled("h2", {
	fontWeight: "500",
	fontSize: "20px",
	lineHeight: "32px",
	color: "#5E5E5E",
})

const Body = styled("p", {
	fontWeight: "400",
	fontSize: "20px",
	lineHeight: "32px",
	color: "#5E5E5E",
})

const StyledLink = styled("a", {
	fontWeight: "500",
	fontSize: "20px",
	lineHeight: "32px",
	color: "#5E5E5E",
	textDecoration: "underline",
	alignSelf: "flex-end",
})
