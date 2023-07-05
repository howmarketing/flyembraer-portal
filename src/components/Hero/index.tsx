import Image from "next/future/image"

import { parseCookies, setCookie } from "nookies"

import { cloneElement, ComponentPropsWithoutRef, memo, useEffect, useState } from "react"

import { Flex } from "components/Flex"

import { shuffleArray } from "utils/shuffleArray"

import { agriculturalImages, commercialImages, defenseImages, executiveImages } from "./mock"

import { styled } from "../../../stitches.config"

type HeroProps = ComponentPropsWithoutRef<typeof Wrapper>

export const Hero = memo((css: HeroProps) => {
	const { heroImgOrder } = parseCookies()

	const [counter, setCounter] = useState(Number(heroImgOrder) ?? 0)

	const commercialImage = (
		<Image
			src={shuffleArray([...commercialImages])[0]}
			alt="Image of a commercial airplane"
			quality={40}
			priority={true}
		/>
	)

	const executiveImage = (
		<Image
			src={shuffleArray([...executiveImages])[0]}
			alt="Image of an executive airplane"
			quality={40}
			priority={true}
		/>
	)

	const defenseImage = (
		<Image
			src={shuffleArray([...defenseImages])[0]}
			alt="Image of a military airplane"
			quality={40}
			priority={true}
		/>
	)

	const agriculturalImage = (
		<Image
			src={shuffleArray([...agriculturalImages])[0]}
			alt="Image of an agricultural airplane"
			quality={40}
			priority={true}
		/>
	)

	const images = [commercialImage, executiveImage, defenseImage, agriculturalImage]

	useEffect(() => {
		if (heroImgOrder !== undefined && Number(heroImgOrder) >= images.length) {
			setCounter(0)
		}
	}, [heroImgOrder, setCounter, images.length])

	if (!heroImgOrder) {
		setCookie(null, "heroImgOrder", "0")
	} else {
		setCookie(null, "heroImgOrder", `${(Number(heroImgOrder) + 1) % images.length}`)
	}

	const displayedImages = images.slice(counter).concat(images.slice(0, counter))

	return <Wrapper {...css}>{displayedImages.map((image, index) => cloneElement(image, { key: index }))}</Wrapper>
})

Hero.displayName = "Hero"

const Wrapper = styled(Flex, {
	position: "relative",
	width: "100%",
	height: "512px",
	userSelect: "none",

	"& > img": {
		position: "relative",
		width: "32.5%",
		objectFit: "cover",
	},

	"& > img:first-child": {
		clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
	},

	"& > img:nth-child(2)": {
		clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)",
		marginLeft: "-10%",
	},

	"& > img:nth-child(3)": {
		clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)",
		marginLeft: "-10%",
	},

	"& > img:nth-child(4)": {
		clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
		marginLeft: "-10%",
	},
})
