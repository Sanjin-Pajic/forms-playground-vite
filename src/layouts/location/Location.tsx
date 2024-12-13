import { useForm } from 'react-hook-form'
import { LocationWrapper, LocationMain, CopyButtonWrapper, TextLabel, TextInput } from './Location.styles'
import IconCopy from '../../assets/icons/copy.svg?react'
import { FormFieldValues } from '../../pages/home/Home'
import ReusableButton from '../../components/common/button/ReusableButton'
import Select, { StylesConfig } from 'react-select'

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

    const stateOptions = [
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' }
    ]

    interface Option {
        value: string
        label: string
    }

    const customStyles: StylesConfig<Option, false> = {
        control: (provided) => ({
            ...provided,
            height: '33px',
            minHeight: '30px'
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: '33px',
            display: 'flex',
            alignItems: 'center'
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height: '33px'
        })
    }

    const countryOptions = [
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
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            paddingTop: '20px',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ width: '47%' }}>
                            <TextLabel>Address</TextLabel>
                            <TextInput type="text" id="address" {...register}></TextInput>
                        </div>
                        <div style={{ width: '47%', marginRight: '10px' }}>
                            <TextLabel>City</TextLabel>
                            <TextInput type="text" id="city" {...register}></TextInput>
                        </div>
                    </div>
                    <div style={{ width: '100%', paddingTop: '20px' }}>
                        <TextLabel>Country</TextLabel>
                        <Select options={countryOptions} styles={customStyles} />
                    </div>
                    <div
                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}
                    >
                        <div style={{ width: '60%' }}>
                            <TextLabel>State</TextLabel>
                            <Select options={stateOptions} styles={customStyles} />
                        </div>
                        <div style={{ width: '30%', marginRight: '10px' }}>
                            <TextLabel>Zip/Postal</TextLabel>
                            <TextInput type="text" id="postal" {...register}></TextInput>
                        </div>
                    </div>

                    <TextLabel>Parking Info</TextLabel>
                    <TextInput type="textarea"></TextInput>
                </form>
            </LocationMain>
        </LocationWrapper>
    )
}

export default Location