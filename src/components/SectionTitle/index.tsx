import * as S from "./styles"

type SectionTitleProps = {
	title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => (
	<S.Wrapper>
		<S.Title>{title}</S.Title>
	</S.Wrapper>
)

export default SectionTitle
