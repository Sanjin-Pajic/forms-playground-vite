import { JSX, createRef, useRef, useState } from 'react'
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
import { EndActionButtonContainer } from '../../layouts/location/Location.styles'
import ReusableButton from '../../components/common/button/ReusableButton'
import { LocationFormFieldDefaults } from '../../layouts/location/helpers'

export type LocationFormFieldValues = {
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
    const [locationForms, setLocationForms] = useState<{ id: string; values: LocationFormFieldValues }[]>([])

    // TODO: properly type this later
    const locationFormRefs = useRef<Record<string, React.RefObject<any>>>({})

    return (
        <HomeWrapper>
            <TopHeaderSection>
                <LocationsHeaderLabelWrapper>
                    <HeaderText>Locations</HeaderText>
                    <IconInfoWrapper>
                        <IconInfo fill="#464549" stroke="#464549" />
                    </IconInfoWrapper>
                </LocationsHeaderLabelWrapper>

                <Button icon={<IconPlus fill="#464549" stroke="#464549" />} onClick={addNewLocationForm}>
                    Add New Location
                </Button>
            </TopHeaderSection>
            <LocationsContainer>
                {locationForms.map((location) => (
                    <Location
                        {...location.values}
                        key={location.id}
                        ref={locationFormRefs.current[location.id]}
                        addNewLocationForm={addNewLocationForm}
                    />
                ))}
            </LocationsContainer>
            <EndActionButtonContainer>
                <ReusableButton>Cancel</ReusableButton>
                <ReusableButton backgroundColor="purple" color="white" type="submit" onClick={submitAllForms}>
                    Save
                </ReusableButton>
            </EndActionButtonContainer>
        </HomeWrapper>
    )

    // ===============

    function addNewLocationForm(values?: LocationFormFieldValues) {
        const id = crypto.randomUUID()
        setLocationForms((prev) => [...prev, { id, values: values ? { ...values } : { ...LocationFormFieldDefaults } }])
        locationFormRefs.current[id] = createRef()
    }

    async function submitAllForms() {
        let allValid = true
        const allData: LocationFormFieldValues[] = []

        for (const id in locationFormRefs.current) {
            const formRef = locationFormRefs.current[id]?.current
            if (formRef) {
                const isValid = await formRef.trigger()
                if (isValid) {
                    allData.push(formRef.getValues())
                } else {
                    allValid = false
                    break
                }
            }
        }

        if (allValid) {
            console.log('All forms are valid:', allData)
        } else {
            console.log('One or more forms failed validation.')
        }
    }
}

export default Home
