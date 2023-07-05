import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

import { Upload } from "components/Icons/Upload"
import Text from "components/Text"

import { styled } from "../../../stitches.config"

const Dropzone = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onDrop = useCallback((acceptedFiles: any) => {
		console.log(acceptedFiles)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: true,
	})

	return (
		<StyledDiv {...getRootProps()}>
			<input {...getInputProps()} />
			<Upload />
			<Text as="p" css={{ mt: "10px" }}>
				Drag and drop your file here
			</Text>
			<Text as="h2" css={{ m: "10px" }}>
				or
			</Text>
			<Button>BROWSE YOUR FILES</Button>
		</StyledDiv>
	)
}

const StyledDiv = styled("div", {
	boxSizing: "border-box",
	borderRadius: "5px",
	border: "1px dashed #005AAF",
	maxWidth: "530px",
	width: "100%",
	height: "200px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",

	"& p": {
		color: "#5E5E5E",
		fontSize: "24px",
		lineHeight: "30px",
	},

	"& h2": {
		color: "#5E5E5E",
	},
})

const Button = styled("button", {
	color: "#005AAF",
	backgroundColor: "White",
	fontSize: "14px",
	padding: " 15px 15px",
	border: "1px solid #005AAF",
	borderRadius: "5px",
	cursor: "pointer",
	noClick: "true",
})
export default Dropzone
