import { ReactNode, useContext, useRef } from "react"

import { useDrag, useDrop } from "react-dnd"

import { EyeOffOutline } from "components/Icons/EyeOffOutline"
import { EyeOutline } from "components/Icons/EyeOutline"
import { CustomizeHomeContext } from "contexts/CustomizeHomeContext"

import { styled } from "../../../../stitches.config"

type DraggableContentProps = {
  children: ReactNode
  type: string
  id: number
  index: number
  visible: boolean
  moveItem?: (from: number, to: number) => void
  handleChangeBlockVisibility: (item: number, visibility: boolean) => void
}

type DraggedItem = {
  index: number
}

export const DraggableContent = ({
  children,
  type,
  id,
  index,
  visible,
  moveItem,
  handleChangeBlockVisibility
}: DraggableContentProps) => {
  const ref = useRef(null)

  const { customizationActive } = useContext(CustomizeHomeContext)

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type,
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
      canDrag: customizationActive
    }),
    [customizationActive]
  )

  const [, dropRef] = useDrop<DraggedItem>({
    accept: type,
    hover(item) {
      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex) {
        return
      }

      moveItem ? moveItem(draggedIndex, targetIndex) : null

      item.index = targetIndex
    }
  })

  dragRef(dropRef(ref))

  return (
    <Wrapper isDragging={isDragging} customizationActive={customizationActive} visible={visible}>
      {customizationActive ? (
        <>
          {visible ? (
            <VisibilityButton onClick={() => handleChangeBlockVisibility(id, false)}>
              <EyeOutline width="22" height="18" />
            </VisibilityButton>
          ) : (
            <VisibilityButton onClick={() => handleChangeBlockVisibility(id, true)}>
              <EyeOffOutline width="22" height="18" />
            </VisibilityButton>
          )}
        </>
      ) : null}
      <div ref={ref}>{children}</div>
    </Wrapper>
  )
}

const Wrapper = styled("div", {
  position: "relative",

  variants: {
    isDragging: {
      true: {
        width: "380px",
        border: "2px dashed black",
        background: "transparent",

        "& :nth-child(2) > *": {
          opacity: 0
        }
      }
    },
    customizationActive: {
      true: {
        padding: "1rem",
        border: "2px dashed black",
        cursor: "grab",
        "& :nth-child(2) > button, a": {
          pointerEvents: "none"
        }
      }
    },
    visible: {
      true: {
        opacity: 1
      },
      false: {
        color: "Gray",
        "& :nth-child(2) > *": {
          opacity: 0.8
        }
      }
    }
  }
})

const VisibilityButton = styled("button", {
  all: "unset",
  appearance: "none",

  width: "2rem",
  height: "2rem",
  br: "4px",
  bg: "$white",
  border: "0.5px solid lightGrey",

  display: "grid",
  placeContent: "center",

  position: "absolute",
  top: 4,
  right: 4,

  transition: "0.15s",

  zIndex: "10",

  "&:hover": {
    bg: "#e6e6e6",
    transition: "0.15s"
  }
})
