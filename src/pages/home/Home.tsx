import { HeaderText, HeaderWrapper, HomeWrapper, IconInfoWrapper } from './Home.styles'
import IconInfo from '../../assets/icons/info.svg?react'

/**
 * HOME COMPONENT
 *
 * This component serves as the primary entry point for the application (excluding index.tsx or App.tsx).
 *
 * The App.tsx file is designed to include only this component as its main content.
 * While the original design does not involve routing or multiple pages, this setup
 * separates the primary UI logic from the App.tsx file, adhering to cleaner architectural
 * principles (in my opinion). Makes things tidier, and future scalability is preserved if
 * additional routes or page components were to be added later.
 *
 * @function Home
 * @returns {JSX.Element}
 */
function Home(): JSX.Element {
    return (
        <HomeWrapper>
            <HeaderWrapper>
                <HeaderText>Locations</HeaderText>
                <IconInfoWrapper>
                    <IconInfo fill="#464549" stroke="#464549" />
                </IconInfoWrapper>
            </HeaderWrapper>
        </HomeWrapper>
    )
}

export default Home
