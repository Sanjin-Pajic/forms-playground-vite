import { Controller, useForm } from 'react-hook-form'
import { LocationWrapper, LocationMain, CopyButtonWrapper, TextLabel, TextInput, TextArea } from './Location.styles'
import IconCopy from '../../assets/icons/copy.svg?react'
import { FormFieldValues } from '../../pages/home/Home'
import ReusableButton from '../../components/common/button/ReusableButton'
import Select, { StylesConfig } from 'react-select'

interface Option {
    value: string
    label: string
}

interface LocationProps {
    venueTitle?: string
    altName?: string
    address?: string
    city?: string
    country?: string
    state?: string
    postal?: string
    parkingInfo?: string
    copyLocation: (newLocation: FormFieldValues) => void
}

const countryOptions = [
    {
        value: '1',
        label: 'United States'
    },
    {
        value: '2',
        label: 'Bosnia & Herzegovina'
    }
]

const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' }
]

function Location(props: LocationProps) {
    const { register, control, getValues } = useForm<FormFieldValues>({
        defaultValues: {
            venueTitle: props.venueTitle ?? '',
            altName: props.altName ?? '',
            address: props.address ?? '',
            city: props.city ?? '',
            country: props.country ?? countryOptions[0].value,
            state: props.state ?? stateOptions[0].value,
            postal: props.postal ?? '',
            parkingInfo: props.parkingInfo ?? ''
        }
    })

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

    const handleCopyLocation = () => {
        const formValues = getValues()
        console.log('Form values ', formValues)
        props.copyLocation(formValues)
    }

    return (
        <LocationWrapper>
            <LocationMain>
                <CopyButtonWrapper>
                    <ReusableButton icon={<IconCopy />} customPadding="6.5px" onClick={() => handleCopyLocation()}>
                        Copy
                    </ReusableButton>
                </CopyButtonWrapper>
                <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextLabel>Venue Title</TextLabel>
                    <TextInput type="text" id="venueTitle" {...register('venueTitle')}></TextInput>

                    <TextLabel>Alt Name</TextLabel>
                    <TextInput type="text" id="altName" {...register('altName')}></TextInput>
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
                            <TextInput type="text" id="address" {...register('address')}></TextInput>
                        </div>
                        <div style={{ width: '47%', marginRight: '10px' }}>
                            <TextLabel>City</TextLabel>
                            <TextInput type="text" id="city" {...register('city')}></TextInput>
                        </div>
                    </div>
                    <div style={{ width: '100%', paddingTop: '20px' }}>
                        <TextLabel>Country</TextLabel>
                        <Controller
                            control={control}
                            name="country"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={countryOptions}
                                    styles={customStyles}
                                    value={countryOptions.find((option) => option.value === field.value)} // Bind selected value
                                    onChange={(selectedOption) => field.onChange(selectedOption?.value)} // Update with value only
                                />
                            )}
                        />
                    </div>
                    <div
                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}
                    >
                        <div style={{ width: '60%' }}>
                            <TextLabel>State</TextLabel>
                            <Controller
                                control={control}
                                name="state"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={stateOptions}
                                        styles={customStyles}
                                        value={stateOptions.find((option) => option.value === field.value)} // Bind selected value
                                        onChange={(selectedOption) => field.onChange(selectedOption?.value)} // Update with value only
                                    />
                                )}
                            />
                        </div>
                        <div style={{ width: '30%', marginRight: '10px' }}>
                            <TextLabel>Zip/Postal</TextLabel>
                            <TextInput type="text" id="postal" {...register('postal')}></TextInput>
                        </div>
                    </div>

                    <TextLabel>Parking Info</TextLabel>
                    <TextArea rows={5} {...register('parkingInfo')} />
                </form>
            </LocationMain>
        </LocationWrapper>
    )
}

export default Location
