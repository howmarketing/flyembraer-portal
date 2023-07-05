import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Settings } from "components/Icons/Settings"
import Text from "components/Text"

export const Favorites = () => {
  return (
    <Flex
      css={{
        flexDirection: "column",
        gap: "16px"
      }}
    >
      <Text
        css={{
          color: "#5E5E5E",
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "300",
          "@web": {
            fontSize: "20px",
            fontWeight: "500"
          }
        }}
      >
        Favorites
      </Text>
      <Flex
        css={{
          flexDirection: "column",
          gap: "16px",
          "@largeMobile": { flexWrap: "wrap" },
          "@web": {
            gap: "24px"
          }
        }}
      >
        <Card title="Flight Operations - Conference" iconLeft={<Settings width="30" height="30" />} />
        <Card title="Download Center" iconLeft={<Settings width="30" height="30" />} />
        <Card title="Flight Operations - Conference" iconLeft={<Settings width="30" height="30" />} />
      </Flex>
    </Flex>
  )
}
