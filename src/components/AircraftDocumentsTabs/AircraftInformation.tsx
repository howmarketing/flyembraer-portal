import { ArrowUp } from "components/Icons/ArrowUp"
import { ExternalLink } from "components/Icons/ExternalLink"
import { TabsList } from "components/Tabs"

import type { DocsNoDocsLinkDTO } from "types/PublicLinkDTO"

import { StyledLink, StyledList, StyledTabs, StyledTabsContent, StyledTrigger, StyledText } from "./styles"
import { styled } from "../../../stitches.config"

type AircraftInformationProps = {
	noDocs?: DocsNoDocsLinkDTO[]
}

export const AircraftInformation = ({ noDocs }: AircraftInformationProps) => (
	<StyledTabs>
		<TabsList>
			<StyledTrigger value="Commercial Aviation">
				<StyledText>
					Commercial Aviation <ArrowUp />
				</StyledText>
			</StyledTrigger>
			<StyledTrigger value="Executive Aviation">
				<StyledText>
					Executive Aviation <ArrowUp />
				</StyledText>
			</StyledTrigger>
			<StyledTrigger value="Military and Defence">
				<StyledText>
					Military and Defense <ArrowUp />
				</StyledText>
			</StyledTrigger>
			<StyledTrigger value="Agricultural">
				<StyledText>
					Agricultural <ArrowUp />
				</StyledText>
			</StyledTrigger>
		</TabsList>
		{noDocs &&
			noDocs?.map(({ menu, portais }) => (
				<StyledTabsContent value={menu ?? ""} key={menu}>
					{portais &&
						portais.map(({ links }) => (
							<StyledList key={menu}>
								{links &&
									links.map(({ code, name }) => (
										<li key={code}>
											<StyledLink href={code} target="_blank">
												<ExternalLink /> {name}
											</StyledLink>
										</li>
									))}
							</StyledList>
						))}
				</StyledTabsContent>
			))}
	</StyledTabs>
)
