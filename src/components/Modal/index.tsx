/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import FocusTrap from "focus-trap-react"
import { AnimatePresence, PanInfo, useAnimation } from "framer-motion"
import { useCallback, useEffect, useRef } from "react"
import * as S from "./styles"

export type ModalProps = {
	children: React.ReactNode
	showModal: boolean
	setShowModal: (status: boolean) => void
	closeWithX?: boolean
}

const Modal = ({ children, setShowModal, showModal, closeWithX }: ModalProps) => {
	const mobileModalRef = useRef<HTMLDivElement>(null)
	const desktopModalRef = useRef(null)

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape" && !closeWithX) {
			setShowModal(false)
		}
	}, [])

	const closeModal = useCallback(
		(closeWithX?: boolean) => {
			if (closeWithX) {
				return
			}

			setShowModal(false)
		},
		[setShowModal]
	)

	const controls = useAnimation()
	const transitionProps = { type: "spring", stiffness: 500, damping: 30 }

	async function handleDragEnd(_: any, info: PanInfo) {
		const offset = info.offset.y
		const velocity = info.velocity.y
		const height = mobileModalRef.current?.getBoundingClientRect().height as number

		if (offset > height / 2 || velocity > 800) {
			await controls.start({ y: "100%", transition: transitionProps })
			closeModal()
		} else {
			controls.start({ y: 0, transition: transitionProps })
		}
	}

	useEffect(() => {
		if (showModal) {
			controls.start({
				y: 0,
				transition: transitionProps,
			})

			document.body.style.overflow = "hidden"

			return () => {
				document.body.style.overflow = "unset"
			}
		}
	}, [showModal])

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown)

		return () => document.removeEventListener("keydown", onKeyDown)
	}, [onKeyDown])

	return (
		<AnimatePresence>
			{showModal && (
				<FocusTrap focusTrapOptions={{ initialFocus: false }}>
					<S.Wrapper>
						<S.Mobile
							ref={mobileModalRef}
							key="mobile-modal"
							initial={{ y: "100%" }}
							animate={controls}
							exit={{ y: "100%" }}
							transition={transitionProps}
							drag="y"
							dragDirectionLock
							onDragEnd={handleDragEnd}
							dragElastic={{ top: 0, bottom: 1 }}
							dragConstraints={{ top: 0, bottom: 0 }}
						>
							{children}
						</S.Mobile>

						<S.Desktop
							ref={desktopModalRef}
							key="desktop-modal"
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.95 }}
							onMouseDown={(e) => {
								if (desktopModalRef.current === e.target) {
									closeModal(closeWithX)
								}
							}}
						>
							{children}
						</S.Desktop>

						<S.Overlay
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => closeModal(closeWithX)}
						/>
					</S.Wrapper>
				</FocusTrap>
			)}
		</AnimatePresence>
	)
}

export default Modal
