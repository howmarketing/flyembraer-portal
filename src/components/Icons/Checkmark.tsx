import { SVGProps } from "react"

interface CheckMarkProps {
	title?: string
	titleId?: string
	color?: string
}

const CheckMark = ({ title, titleId, color = "#005AAF", ...props }: SVGProps<SVGSVGElement> & CheckMarkProps) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 36 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		color={color}
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M28.5 19.2502C28.5 18.4222 29.172 17.7502 30 17.7502C30.828 17.7502 31.5 18.4222 31.5 19.2502V27.5992C31.5 29.7502 29.7495 31.5007 27.6 31.5007H8.4C6.2505 31.5007 4.5 29.7502 4.5 27.5992V8.40073C4.5 6.24973 6.2505 4.50073 8.4 4.50073H22.7505C23.5785 4.50073 24.2505 5.17123 24.2505 6.00073C24.2505 6.82873 23.5785 7.50073 22.7505 7.50073H8.4C7.9035 7.50073 7.5 7.90423 7.5 8.40073V27.5992C7.5 28.0957 7.9035 28.5007 8.4 28.5007H27.6C28.0965 28.5007 28.5 28.0957 28.5 27.5992V19.2502ZM13.9644 16.4197C14.5644 15.8467 15.5124 15.8707 16.0854 16.4692L18.3429 18.8362L27.4224 9.45673C27.9969 8.86273 28.9464 8.84473 29.5434 9.42223C30.1389 9.99823 30.1539 10.9477 29.5779 11.5432L19.4124 22.0432C19.1304 22.3357 18.7419 22.5007 18.3354 22.5007H18.3294C17.9214 22.4992 17.5314 22.3312 17.2494 22.0357L13.9149 18.5407C13.3419 17.9407 13.3659 16.9912 13.9644 16.4197Z"
			fill="#005AAF"
		/>

		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M28.5 19.2502C28.5 18.4222 29.172 17.7502 30 17.7502C30.828 17.7502 31.5 18.4222 31.5 19.2502V27.5992C31.5 29.7502 29.7495 31.5007 27.6 31.5007H8.4C6.2505 31.5007 4.5 29.7502 4.5 27.5992V8.40073C4.5 6.24973 6.2505 4.50073 8.4 4.50073H22.7505C23.5785 4.50073 24.2505 5.17123 24.2505 6.00073C24.2505 6.82873 23.5785 7.50073 22.7505 7.50073H8.4C7.9035 7.50073 7.5 7.90423 7.5 8.40073V27.5992C7.5 28.0957 7.9035 28.5007 8.4 28.5007H27.6C28.0965 28.5007 28.5 28.0957 28.5 27.5992V19.2502ZM13.9644 16.4197C14.5644 15.8467 15.5124 15.8707 16.0854 16.4692L18.3429 18.8362L27.4224 9.45673C27.9969 8.86273 28.9464 8.84473 29.5434 9.42223C30.1389 9.99823 30.1539 10.9477 29.5779 11.5432L19.4124 22.0432C19.1304 22.3357 18.7419 22.5007 18.3354 22.5007H18.3294C17.9214 22.4992 17.5314 22.3312 17.2494 22.0357L13.9149 18.5407C13.3419 17.9407 13.3659 16.9912 13.9644 16.4197Z"
			fill="white"
		/>

		<g mask="url(#mask0_2658_118752)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M28.5 19.2502C28.5 18.4222 29.172 17.7502 30 17.7502C30.828 17.7502 31.5 18.4222 31.5 19.2502V27.5992C31.5 29.7502 29.7495 31.5007 27.6 31.5007H8.4C6.2505 31.5007 4.5 29.7502 4.5 27.5992V8.40073C4.5 6.24973 6.2505 4.50073 8.4 4.50073H22.7505C23.5785 4.50073 24.2505 5.17123 24.2505 6.00073C24.2505 6.82873 23.5785 7.50073 22.7505 7.50073H8.4C7.9035 7.50073 7.5 7.90423 7.5 8.40073V27.5992C7.5 28.0957 7.9035 28.5007 8.4 28.5007H27.6C28.0965 28.5007 28.5 28.0957 28.5 27.5992V19.2502ZM13.9644 16.4197C14.5644 15.8467 15.5124 15.8707 16.0854 16.4692L18.3429 18.8362L27.4224 9.45673C27.9969 8.86273 28.9464 8.84473 29.5434 9.42223C30.1389 9.99823 30.1539 10.9477 29.5779 11.5432L19.4124 22.0432C19.1304 22.3357 18.7419 22.5007 18.3354 22.5007H18.3294C17.9214 22.4992 17.5314 22.3312 17.2494 22.0357L13.9149 18.5407C13.3419 17.9407 13.3659 16.9912 13.9644 16.4197Z"
				fill="#005AAF"
			/>
		</g>
	</svg>
)
export default CheckMark

//stuff