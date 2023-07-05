import { Card } from "components/Card"
import { Flex } from "components/Flex"
import { AngleRight } from "components/Icons/AngleRight"
import { Download } from "components/Icons/Download"
import { Settings } from "components/Icons/Settings"
import Text from "components/Text"

export const LastAccessed = () => {
  return (
    <Flex css={{ gap: "100px" }}>
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
          Last access
        </Text>
        <Flex
          css={{
            flexDirection: "column",
            gap: "16px",
            "@largeMobile": { flexWrap: "wrap" },
            "@web": {
              gap: "25px"
            }
          }}
        >
          <Card
            title="Net Dimension Academy"
            link="https://idp.qas.flyembraer.com/saml/idp/res?id=/Common/NETDIMENSION_ACADEMY"
            iconLeft={<Settings width="30" height="30" />}
            iconRight={<AngleRight width="9" height="15" />}
          />
          <Card
            title="HEROKU - Eparts"
            link="https://idp.qas.flyembraer.com/saml/idp/res?id=/Common/HEROKU-Eparts"
            iconLeft={<Settings width="30" height="30" />}
            iconRight={<AngleRight width="9" height="15" />}
          />
          <Card
            title="Download Center"
            link={process.env.NEXT_PUBLIC_DC_APP_URL}
            iconLeft={<Download width="24" height="25" />}
            iconRight={<AngleRight width="9" height="15" />}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
