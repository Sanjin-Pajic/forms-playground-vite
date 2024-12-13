import { useForm } from 'react-hook-form'
import { LocationWrapper, LocationMain, CopyButtonWrapper, TextLabel, TextInput } from './Location.styles'
import IconCopy from '../../assets/icons/copy.svg?react'
import { FormFieldValues } from '../../pages/home/Home'
import ReusableButton from '../../components/common/button/ReusableButton'
import { Divider } from '../../pages/home/Home.styles'
import Select from 'react-select'

function Location(props: FormFieldValues) {
    const { register } = useForm<FormFieldValues>({
        defaultValues: {
            venueTitle: props.venueTitle || '',
            altName: props.altName || '',
            address: props.address || '',
            city: props.city || '',
            country: props.country || '',
            state: props.state || '',
            postal: props.postal || '',
            parkingInfo: props.parkingInfo || ''
        }
    })

    const options = [
        {
            value: 'US',
            label: 'United States'
        },
        {
            value: 'B&H',
            label: 'Bosnia & Herzegovina'
        }
    ]

    return (
        <LocationWrapper>
            <LocationMain>
                <CopyButtonWrapper>
                    <ReusableButton icon={<IconCopy />} customPadding="6.5px">
                        Copy
                    </ReusableButton>
                </CopyButtonWrapper>
                <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextLabel>Venue Title</TextLabel>
                    <TextInput type="text" id="venueTitle" {...register}></TextInput>

                    <TextLabel>Alt Name</TextLabel>
                    <TextInput type="text" id="altName" {...register}></TextInput>

                    <TextLabel>Address</TextLabel>
                    <TextInput maxWidth="41%" type="text" id="address" {...register}></TextInput>

                    <TextLabel>City</TextLabel>
                    <TextInput maxWidth="41%" type="text" id="city" {...register}></TextInput>

                    <TextLabel>Country</TextLabel>
                    <Select options={options} />

                    <TextLabel>State</TextLabel>
                    <div style={{ width: '100%' }}>
                        <Select />
                    </div>

                    <TextLabel>Zip/Postal</TextLabel>
                    <TextInput type="text" id="postal" {...register}></TextInput>

                    <TextLabel>Parking Fee</TextLabel>
                    <div />

                    <TextLabel>Parking Info</TextLabel>
                    <TextInput type="textarea"></TextInput>
                </form>
            </LocationMain>
        </LocationWrapper>
    )
}

export default Location
