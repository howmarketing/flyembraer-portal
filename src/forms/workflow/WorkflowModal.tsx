import { styled } from "../../../stitches.config"
import { Reject } from "components/Icons/Reject"

type modalProps = {
  onClose: any
  title?: string
  children?: any
}

export default function WorkflowModal({ onClose, title, children }: modalProps) {
  return (
    <StyledModalOverlay>
      <SytledModal>
        <StyledModalHeader>
          <div></div>
          <StyledTitle>Task {title}</StyledTitle>

          <StyledButton onClick={onClose}>
            <Reject fill={"#333333"} width={26} height={26} />
          </StyledButton>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </SytledModal>
    </StyledModalOverlay>
  )
}

const StyledModalOverlay = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "888",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignitems: "center",
  backgroundColor: "#00000085"
})

const SytledModal = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "640px",
  maxWidth: "80%",
  height: "360px",
  maxHeight: "80%",
  padding: "1rem",
  border: "1px solid #CCCCCC",
  borderRadius: "4px",
  lineHeight: "1.2",
  boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
  backgroundColor: "#FFFFFF"
})

const StyledModalHeader = styled("div", {
  marginBottom: "2rem",
  display: "grid",
  gridTemplateColumns: "30px 1fr 30px",
  alignItems: "center",
  gap: "1rem"
})

const StyledTitle = styled("h4", {
  justifySelf: "center"
})

const StyledButton = styled("button", {
  border: "none",
  borderRadius: "50%",
  backgroundColor: "transparent"
})

const StyledModalBody = styled("div", {
  display: "grid"
})
