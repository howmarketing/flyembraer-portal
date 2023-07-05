import { useContext } from "react"

import Avatar from "components/Avatar"
import { Flex } from "components/Flex"
import { Filter } from "components/Icons/Filter"
import { MediaMatch } from "components/MediaMatch"
import Text from "components/Text"

import { CustomizeHomeContext } from "contexts/CustomizeHomeContext"

// import { useAuth } from "hooks/useAuth"

export const UserDetailsBar = () => {
  // const { userFullName } = useAuth()
  const { customizationActive, handleSetCustomizationActive } = useContext(CustomizeHomeContext)

  return (
    <Flex
      css={{
        "@tablet": { alignItems: "center", justifyContent: "space-between" }
      }}
    >
      <Flex
        css={{
          flexDirection: "column",
          "@tablet": { flexDirection: "row", alignItems: "center", gap: "24px" }
        }}
      >
        <Flex css={{ gap: "1rem" }}>
          <Avatar />
          <Text
            css={{
              color: "#5E5E5E",
              fontSize: "20px",
              lineHeight: "32px",
              fontWeight: "300",
              "@tablet": { fontSize: "32px" }
            }}
          >
            Welcome Guest
            {/* {`Welcome ${userFullName ?? "Guest"}`} */}
          </Text>
        </Flex>
      </Flex>
      <MediaMatch greaterThan="web" asChild>
        <Flex
          as="button"
          css={{
            gap: "12px",
            p: "10px 1rem",
            bg: "$white",
            border: "1px solid #005AAF",
            br: "20px",
            transition: "0.15s",
            "&:not(:disabled):hover": {
              bg: "#e6e6e6"
            },
            "&:disabled": {
              filter: "brightness(0.85)",
              pointerEvents: "none",
              userSelect: "none"
            }
          }}
          disabled={customizationActive}
        >
          <Filter />
          <Text
            weight={"medium"}
            size={"sm"}
            color={"brand-primary"}
            css={{ textDecoration: "underline", lineHeight: "24px" }}
            onClick={() => handleSetCustomizationActive(!customizationActive)}
          >
            Customize home page
          </Text>
        </Flex>
      </MediaMatch>
    </Flex>
  )
}
