import {
    Divider,
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
import { useState } from 'react'
import { EndActionButtonContainer } from '../../layouts/location/Location.styles'
import ReusableButton from '../../components/common/button/ReusableButton'

export type FormFieldValues = {
    venueTitle: string
    altName?: string
    address: string
    city: string
    country?: string
    state: string
    postal: string
    parkingInfo: string
}

function Home(): JSX.Element {
    const [locations, setLocations] = useState<FormFieldValues[]>([])

    // Add a new empty form
    const addNewLocation = () => {
        setLocations((prev) => [
            ...prev,
            {
                venueTitle: '',
                altName: '',
                address: '',
                city: '',
                country: '',
                state: '',
                postal: '',
                parkingInfo: ''
            }
        ])
    }

    // Copy an existing form
    const copyLocation = (index: number) => {
        setLocations((prev) => {
            const locationToCopy = { ...prev[index] }
            const newLocations = [...prev]
            newLocations.splice(index + 1, 0, locationToCopy)
            return newLocations
        })
    }

    return (
        <HomeWrapper>
            <TopHeaderSection>
                <LocationsHeaderLabelWrapper>
                    <HeaderText>Locations</HeaderText>
                    <IconInfoWrapper>
                        <IconInfo fill="#464549" stroke="#464549" />
                    </IconInfoWrapper>
                </LocationsHeaderLabelWrapper>

                <Button onClick={addNewLocation} icon={<IconPlus fill="#464549" stroke="#464549" />}>
                    Add New Location
                </Button>
            </TopHeaderSection>
            <LocationsContainer>
                {locations.map((location, index) => (
                    <Location key={index} {...location} />
                ))}
            </LocationsContainer>
            <EndActionButtonContainer>
                <ReusableButton>Cancel</ReusableButton>
                <ReusableButton backgroundColor="purple" color="white" type="submit">
                    Save
                </ReusableButton>
            </EndActionButtonContainer>
        </HomeWrapper>
    )
}

export default Home
