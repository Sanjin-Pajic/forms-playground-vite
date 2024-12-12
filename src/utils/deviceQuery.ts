import deviceSize from './deviceSize'

const deviceQuery = {
    mobileS: `@media (min-width: ${deviceSize.mobileS}px)`,
    mobileM: `@media (min-width: ${deviceSize.mobileM}px)`,
    mobileL: `@media (min-width: ${deviceSize.mobileL}px)`,
    tablet: `@media (min-width: ${deviceSize.tablet}px)`,
    laptop: `@media (min-width: ${deviceSize.laptop}px)`,
    laptopL: `@media (min-width: ${deviceSize.laptopL}px)`,
    desktop: `@media (min-width: ${deviceSize.desktop}px)`,
    desktopL: `@media (min-width: ${deviceSize.desktopL}px)`
} as const

export default deviceQuery
