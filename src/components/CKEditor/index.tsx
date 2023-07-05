import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"

import { useEffect, useState } from "react"

import * as S from "./styles"

declare global {
	interface Window {
		editor: ClassicEditor
	}
}

type CKEtidorProps = {
	initialContent?: string
	getContent?: (content: string) => void
	label?: string
	error?: string
}

const CKEtidor = ({ initialContent = "", getContent, error, label }: CKEtidorProps) => {
	const [content, setContent] = useState(initialContent)

	useEffect(() => {
		if (initialContent) {
			setContent(initialContent)
		}
	}, [initialContent])

	return (
		<S.Wrapper>
			<S.Label>{label}</S.Label>
			{error && <S.Error>{error}</S.Error>}
			<CKEditor
				editor={ClassicEditor as any}
				config={{
					toolbar: [
						"heading",
						"|",
						"bold",
						"italic",
						"link",
						"bulletedList",
						"numberedList",
						"|",
						"blockQuote",
						"|",
						"undo",
						"redo",
					],
					link: {
						addTargetToExternalLinks: true,
					},
				}}
				data={content}
				watchdogConfig={{ crashNumberLimit: 10 }}
				onReady={(editor: any) => {
					window.editor = editor
				}}
				onChange={(event, editor: any) => {
					const data = editor.getData()
					setContent(data)
					getContent?.(data)
				}}
			/>
		</S.Wrapper>
	)
}

export default CKEtidor
