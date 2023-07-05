import {
  cloneElement,
  ComponentType,
  createElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from "react"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { produce } from "immer"

import { Flex } from "components/Flex"

import { CustomizeHomeContext } from "contexts/CustomizeHomeContext"

import { Events } from "../DraggableBlocks/Events"
import { Favorites } from "../DraggableBlocks/Favorites"
import { LastAccessed } from "../DraggableBlocks/LastAccessed"
import { DraggableContent } from "../DraggableBlocks/DraggableContent"
import Button from "components/Button"
import { useLocalStorage } from "hooks/useLocalStorage"
import Text from "components/Text"

const COMPONENTS_LIBRARY = {
  lastAccessed: <LastAccessed />,
  events: <Events />,
  favorites: <Favorites />
}

type CustomBlocksStorageType = {
  id: number
  visible: boolean
  componentName: keyof typeof COMPONENTS_LIBRARY
  component: ReactElement | null
}[]

const INITIAL_CONTENTS: CustomBlocksStorageType = [
  {
    id: 1,
    visible: true,
    componentName: "lastAccessed",
    component: null
  },
  {
    id: 2,
    visible: true,
    componentName: "events",
    component: null
  },
  {
    id: 3,
    visible: true,
    componentName: "favorites",
    component: null
  }
]

export const HomeDashboard = () => {
  const getComponentByName = (list: CustomBlocksStorageType): CustomBlocksStorageType => {
    // It will fill the "component" key with the component match by the object literal
    return list.map((content) => ({
      ...content,
      component: COMPONENTS_LIBRARY[content.componentName]
    }))
  }

  const [get, set] = useLocalStorage("FLY_HOME-CUSTOM-BLOCKS", JSON.stringify(INITIAL_CONTENTS))

  const [dashboardContents, setDashboardContents] = useState(getComponentByName(JSON.parse(get)))

  const { customizationActive, handleSetCustomizationActive } = useContext(CustomizeHomeContext)

  function moveItem(from: number, to: number) {
    setDashboardContents(
      produce(dashboardContents, (draft) => {
        const draggedItem = dashboardContents[from]

        draft.splice(from, 1)
        draft.splice(to, 0, draggedItem)
      })
    )
  }

  function handleChangeBlockVisibility(item: number, visibility: boolean) {
    setDashboardContents(
      produce(dashboardContents, (draft) => {
        const index = draft.findIndex((content) => content.id === item)
        if (index !== -1) {
          draft[index].visible = visibility
        }
      })
    )
  }

  function handleSaveCustomization() {
    set(() => JSON.stringify(getComponentByName(dashboardContents)))
    handleSetCustomizationActive(false)
  }

  function handleCancelCustomization() {
    handleSetCustomizationActive(false)
    setDashboardContents(getComponentByName(JSON.parse(get)))
  }

  return (
    <Flex css={{ flexDirection: "column" }}>
      {customizationActive ? (
        <Flex css={{ flexDirection: "column", gap: "24px" }}>
          <Flex css={{ justifyContent: "space-between" }}>
            <Text as="h2" weight="thin" size="xxl" color="brand-primary" css={{ lineHeight: "3rem" }}>
              Customize your home page
            </Text>
            <Flex css={{ gap: "1rem" }}>
              <Button onClick={handleSaveCustomization}>Save</Button>
              <Button
                variant={"tertiary"}
                onClick={handleCancelCustomization}
                css={{ color: "$brand-primary", fontWeight: "$medium" }}
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
          <Text as="h2" weight="thin" size="xxl" color="brand-primary" css={{ lineHeight: "3rem" }}>
            Drag and drop blocks to reorder
          </Text>
        </Flex>
      ) : null}

      <DndProvider backend={HTML5Backend}>
        <Flex css={{ flexWrap: "wrap", columnGap: "100px", rowGap: "64px" }}>
          {dashboardContents.map(({ id, component, visible }, index) => {
            if (customizationActive) {
              return (
                <DraggableContent
                  key={id}
                  type="BLOCK"
                  id={id}
                  index={index}
                  moveItem={moveItem}
                  visible={visible}
                  handleChangeBlockVisibility={handleChangeBlockVisibility}
                >
                  {component}
                </DraggableContent>
              )
            } else {
              if (visible) {
                return (
                  <DraggableContent
                    key={id}
                    type="BLOCK"
                    id={id}
                    index={index}
                    moveItem={moveItem}
                    visible={visible}
                    handleChangeBlockVisibility={handleChangeBlockVisibility}
                  >
                    {component}
                  </DraggableContent>
                )
              } else {
                return null
              }
            }
          })}
        </Flex>
      </DndProvider>
    </Flex>
  )
}
