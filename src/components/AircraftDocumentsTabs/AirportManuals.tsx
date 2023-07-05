import { useCallback } from "react"

import { ArrowUp } from "components/Icons/ArrowUp"

import {
	StyledTabs,
	StyledTabsList,
	StyledTrigger,
	StyledTabsContent,
	StyledList,
	StyledLink,
	StyledText,
} from "./styles"
import { DocsNoDocsLinkDTO } from "types/PublicLinkDTO"
import Text from "components/Text"
import { Download } from "components/Icons/Download"

type AirportManualsProps = {
	docs?: DocsNoDocsLinkDTO[]
}

export const AirportManuals = ({ docs }: AirportManualsProps) => {
	const getAlfrescoLinkByCode = useCallback((code?: string) => {
		if (!code) {
			return
		}
		return `${process.env.NEXT_PUBLIC_DC_API_URL}/shared-links/${code}/content`
	}, [])

	return (
		<StyledTabs>
			<StyledTabsList>
				<StyledTrigger value="Airport Planning Manual">
					<StyledText>
						Airport Planning <ArrowUp />
					</StyledText>
				</StyledTrigger>
				<StyledTrigger value="Fire Fighting Information">
					<StyledText>
						Fire Fighting Information <ArrowUp />
					</StyledText>
				</StyledTrigger>
				<StyledTrigger value="Ground Operation Guide">
					<StyledText>
						Ground Operation <ArrowUp />
					</StyledText>
				</StyledTrigger>
			</StyledTabsList>

			{docs &&
				docs?.map(({ menu, portais }) => {
					const hasMultiplePortals = portais ? portais.length - 1 === 0 : false

					return (
						<StyledTabsContent value={menu ?? ""} key={menu}>
							{!hasMultiplePortals && <div data-divisor></div>}

							{portais &&
								portais.map(({ portal, links }, index) => (
									<StyledList key={menu} css={{ order: index }}>
										{!hasMultiplePortals && (
											<Text
												weight="medium"
												size="md"
												color="brand-primary"
												css={{ lineHeight: "2rem", textAlign: "center" }}
											>
												{portal === "FlyEmbraer" ? "Commercial" : "Executive"}
											</Text>
										)}
										{links &&
											links.map(({ code, name }) => (
												<li key={code}>
													<StyledLink href={getAlfrescoLinkByCode(code)} target="_blank">
														<Download width="22" height="23" /> {name}
													</StyledLink>
												</li>
											))}
									</StyledList>
								))}
						</StyledTabsContent>
					)
				})}
		</StyledTabs>
	)
}
