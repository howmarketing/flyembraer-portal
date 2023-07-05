import { styled } from "../../../stitches.config"
import { AircraftInformation, AirportManuals } from "components/AircraftDocumentsTabs"
import { Flex } from "components/Flex"
import Text from "components/Text"
import { MediaMatch } from "components/MediaMatch"
import { useGetPublickLinks } from "api/public-links"

export const AircraftInformationSection = () => {
	const { data } = useGetPublickLinks()

	return (
		<Wrapper id="aircraft-information">
			<StyledBox>
				<MediaMatch greaterThan="tablet" asChild>
					<Flex css={{ flexDirection: "column", gap: "0.5rem" }}>
						<StyledText weight="thin" size="xxl" color="white" css={{ pl: "8px" }}>
							AIRCRAFT INFORMATION
						</StyledText>
						<AircraftInformation noDocs={data?.noDocs} />
					</Flex>
				</MediaMatch>

				<Flex css={{ flexDirection: "column", gap: "0.5rem" }}>
					<StyledText weight="thin" size="xxl" color="white" css={{ pl: "8px" }}>
						AIRPORT AND FIREFIGHTING MANUALS
					</StyledText>
					<AirportManuals docs={data?.docs} />
				</Flex>
			</StyledBox>
		</Wrapper>
	)
}

const Wrapper = styled(Flex, {
	height: "100%",
	minHeight: "calc(100vh - 512px)",
	background: "$brand-gradient",
})

const StyledBox = styled("div", {
	maxWidth: "1920px",
	margin: "3rem 1rem 1rem 1rem",
	display: "grid",
	gridTemplateRows: "auto 1fr",
	gap: "3rem",

	"@web": {
		margin: "5rem 3.75rem 4.5rem 3.75rem",
	},

	"@wide": {
		margin: "6rem",
		gap: "5rem",
	},
})

const StyledText = styled(Text, {
	fontSize: "clamp(1.5rem, 2vw, 2.25rem) ",
})
