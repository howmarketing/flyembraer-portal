import { ReactNode, useEffect, useRef, useState } from "react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "components/Collapsible"
import { AngleRight } from "components/Icons/AngleRight"

import * as S from "./styles"

export type CardProps = {
	title: string | ReactNode
	iconLeft?: ReactNode
	iconRight?: ReactNode
	children?: ReactNode
	link?: string
	collapsible?: boolean
	full?: boolean
}

export const Card = ({ title, iconLeft, iconRight, children, link, collapsible = false, full = false }: CardProps) => {
	const [open, setOpen] = useState(false)
	const [wrapperSize, setWrapperSize] = useState(0)
	const headerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (headerRef.current?.clientWidth) {
			setWrapperSize(headerRef.current?.clientWidth)
		}
	}, [headerRef.current?.clientWidth])

	if (collapsible) {
		return (
			<Collapsible asChild open={open} onOpenChange={setOpen}>
				<S.Wrapper css={{ "--card-size": `${full ? "100%" : "fit-content"}` }}>
					<CollapsibleTrigger asChild>
						<S.HeaderContainer isCliclable ref={headerRef}>
							{iconLeft && <S.IconWrapper>{iconLeft}</S.IconWrapper>}
							<S.CardTitle>{title}</S.CardTitle>
							<S.IconWrapper css={{ marginLeft: "auto" }}>
								<AngleRight width="9" height="15" />
							</S.IconWrapper>
						</S.HeaderContainer>
					</CollapsibleTrigger>
					<CollapsibleContent asChild>
						{children && (
							<S.BodyContainer css={{ "--wrapper-size": `${wrapperSize}px` ?? "300px" }}>
								{children}
							</S.BodyContainer>
						)}
					</CollapsibleContent>
				</S.Wrapper>
			</Collapsible>
		)
	}

	return (
		<S.Wrapper css={{ "--card-size": `${full ? "100%" : "fit-content"}` }}>
			<S.HeaderContainer as={link ? "a" : "div"} href={link && link} isCliclable={!!link}>
				{iconLeft && <S.IconWrapper>{iconLeft}</S.IconWrapper>}
				<S.CardTitle>{title}</S.CardTitle>
				{iconRight && <S.IconWrapper css={{ marginLeft: "auto" }}>{iconRight}</S.IconWrapper>}
			</S.HeaderContainer>
			{children && <S.BodyContainer>{children}</S.BodyContainer>}
		</S.Wrapper>
	)
}
