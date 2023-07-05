export const breakpointsValue = {
  mobile: 360,
  mediumMobile: 420,
  largeMobile: 560,
  tablet: 768,
  web: 900,
  wideWeb: 980,
  laptop: 1280,
  desktop: 1440,
  wide: 1680
}

export const media = {
  mobile: `(min-width: ${breakpointsValue.mobile}px)`,
  mediumMobile: `(min-width: ${breakpointsValue.mediumMobile}px)`,
  largeMobile: `(min-width: ${breakpointsValue.largeMobile}px)`,
  maxLargeMobile: `(max-width: ${breakpointsValue.largeMobile}px)`,
  tablet: `(min-width: ${breakpointsValue.tablet}px)`,
  maxWeb: `(max-width: ${breakpointsValue.web}px)`,
  web: `(min-width: ${breakpointsValue.web}px)`,
  wideWeb: `(min-width: ${breakpointsValue.wideWeb}px)`,
  laptop: `(min-width: ${breakpointsValue.laptop}px)`,
  maxLaptop: `(max-width: ${breakpointsValue.laptop}px)`,
  desktop: `(min-width: ${breakpointsValue.desktop}px)`,
  maxDesktop: `(max-width: ${breakpointsValue.desktop}px)`,
  wide: `(min-width: ${breakpointsValue.wide}px)`,
  maxWide: `(max-width: ${breakpointsValue.wide}px)`
}
