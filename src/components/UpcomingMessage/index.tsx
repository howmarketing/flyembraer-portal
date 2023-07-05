import SectionTitle from "components/SectionTitle"
import { formatDate } from "utils/format-date"
import Actions from "./Actions"
import * as S from "./styles"

type Message = {
	id: string
	title: string
	startDate: string
	endDate: string
	recipients: string
}

type UpcomingMessageProps = {
	messages: Message[]
}

const UpcomingMessage = ({ messages }: UpcomingMessageProps) => (
	<S.Wrapper>
		<SectionTitle title="Upcoming Messages" />

		<S.Header>
			<S.WrapperTitle>
				<S.Title>Title</S.Title>
			</S.WrapperTitle>
			<S.WrapperDate>
				<S.Title>Start date</S.Title>
			</S.WrapperDate>
			<S.WrapperDate>
				<S.Title>End date</S.Title>
			</S.WrapperDate>
			<S.WrapperRecipients>
				<S.Title>Selected recipients</S.Title>
			</S.WrapperRecipients>
		</S.Header>

		{messages.map(({ endDate, id, recipients, startDate, title }) => {
			const startDateFormatted = formatDate(new Date(startDate), {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			})

			const startDateHoursFormatted = formatDate(new Date(startDate), {
				hour: "numeric",
				minute: "numeric",
			}).replace(":", "h")

			const endDateFormatted = formatDate(new Date(endDate), {
				day: "numeric",
				month: "numeric",
				year: "numeric",
			})

			return (
				<S.Card key={id}>
					<S.WrapperData>
						<S.WrapperTitle>
							<S.Text>{title}</S.Text>
						</S.WrapperTitle>
						<S.WrapperDate>
							<S.Text>{startDateFormatted}</S.Text>
							<S.Text>{startDateHoursFormatted}</S.Text>
						</S.WrapperDate>
						<S.WrapperDate>
							<S.Text>{endDateFormatted}</S.Text>
						</S.WrapperDate>
						<S.WrapperRecipients>
							<S.Text>{recipients}</S.Text>
						</S.WrapperRecipients>
					</S.WrapperData>

					<Actions />
				</S.Card>
			)
		})}
	</S.Wrapper>
)

export default UpcomingMessage
