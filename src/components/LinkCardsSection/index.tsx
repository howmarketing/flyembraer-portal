import { Card } from "components/Card"

import Text from "components/Text"

import { styled } from "../../../stitches.config"

export type Card = {
	cardText: string
	cardUrl: string
}

type LinkCardsSectionProps = {
	cards: Card[]
}

export const LinkCardsSection = ({ cards }: LinkCardsSectionProps) => (
	<Wrapper>
		<Text weight="medium" size="lg" color={"gray200"}>
			Links
		</Text>
		<Cards>
			{cards.map(({ cardText, cardUrl }) => (
				<Card key={cardText} title={cardText} link={cardUrl} />
			))}
		</Cards>
	</Wrapper>
)

const Wrapper = styled("section", {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
})

const Cards = styled("div", {
	width: "100%",
	height: "auto",
	display: "flex",
	flexWrap: "wrap",
	gap: "2rem",
})
