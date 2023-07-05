import { Box } from "components/Box"
import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { Clock } from "components/Icons/Clock"
import { Pin } from "components/Icons/Pin"
import Text from "components/Text"

export const Events = () => {
  return (
    <Box
      css={{
        "@web": { minWidth: "380px", maxWidth: "380px" },
        "@laptop": {}
      }}
    >
      <Card
        full
        title={
          <Flex css={{ justifyContent: "space-between", alignItems: "center", gap: "80px" }}>
            <Text
              as="a"
              css={{
                fontWeight: "$light",
                fontSize: "20px",
                lineHeight: "30px",
                color: "$brand"
              }}
            >
              Events
            </Text>

            {/* <Text
              as="a"
              css={{
                color: "#686868",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: "$medium",
                textDecoration: "underline"
              }}
            >
              See full events calendar
            </Text> */}
          </Flex>
        }
        iconLeft={<Clock width="30" height="30" />}
      >
        <Flex css={{ padding: "22px", gap: "18px", flexDirection: "column" }}>
          <Flex css={{ gap: "1rem", flexDirection: "column" }}>
            {Array.from(Array(3).keys()).map((key) => (
              <Flex key={key} css={{ gap: "8px", flexDirection: "column" }}>
                <Text
                  css={{
                    color: "#202020",
                    fontWeight: "$bold",
                    fontSize: "16px",
                    lineHeight: "19px"
                  }}
                >
                  NBAA - BACE
                </Text>
                <Flex
                  css={{
                    flexDirection: "column",
                    "@web": {
                      flexDirection: "row",
                      gap: "20px"
                    }
                  }}
                >
                  <Flex
                    css={{
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "8px",
                      "@web": {
                        marginBottom: "unset"
                      }
                    }}
                  >
                    <Clock width={20} height={20} />
                    <Text css={{ color: "#686868", fontSize: "14px", lineHeight: "1rem" }}>October 14-21 - 2022</Text>
                  </Flex>
                  <Flex css={{ gap: "10px", alignItems: "center" }}>
                    <Pin width={20} height={20} />
                    <Text css={{ color: "#686868", fontSize: "14px", lineHeight: "1rem" }}>Las Vegas - Nevada</Text>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
