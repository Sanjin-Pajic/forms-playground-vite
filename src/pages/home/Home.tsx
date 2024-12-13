import {
    HeaderText,
    HomeWrapper,
    IconInfoWrapper,
    LocationsContainer,
    LocationsHeaderLabelWrapper,
    TopHeaderSection
} from './Home.styles'
import IconInfo from '../../assets/icons/info.svg?react'
import Location from '../../layouts/location/Location'
import Button from '../../components/common/button/ReusableButton'
import IconPlus from '../../assets/icons/plus.svg?react'

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
 * @function     Home
 * @returns {JSX.Element}
 */
function Home(): JSX.Element {
    const locations: LocationProps[] = [
        {
            title: '',
            altName: '',
            address: '',
            city: '',
            country: '',
            state: '',
            postalCode: '',
            parkingFee: false,
            parkingInfo: ''
        },
        {
            title: '',
            altName: '',
            address: '',
            city: '',
            country: '',
            state: '',
            postalCode: '',
            parkingFee: false,
            parkingInfo: ''
        },
        {
            title: '',
            altName: '',
            address: '',
            city: '',
            country: '',
            state: '',
            postalCode: '',
            parkingFee: false,
            parkingInfo: ''
        }
    ]

    return (
        <HomeWrapper>
            <TopHeaderSection>
                <LocationsHeaderLabelWrapper>
                    <HeaderText>Locations</HeaderText>
                    <IconInfoWrapper>
                        <IconInfo fill="#464549" stroke="#464549" />
                    </IconInfoWrapper>
                </LocationsHeaderLabelWrapper>

                <Button icon={<IconPlus fill="#464549" stroke="#464549" />}>Add New Location</Button>
            </TopHeaderSection>
            <LocationsContainer>
                {locations.map(() => (
                    <Location />
                ))}
            </LocationsContainer>
        </HomeWrapper>
    )
}

interface LocationProps {
    title?: string
    altName?: string
    address?: string
    city?: string
    country?: string
    state?: string
    postalCode?: string
    parkingFee?: boolean
    parkingInfo: string
}

export default Home
