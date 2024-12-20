import { Controller, useForm } from 'react-hook-form'
import {
    LocationWrapper,
    LocationMain,
    CopyButtonWrapper,
    TextLabel,
    TextInput,
    TextArea,
    LocationForm,
    HalvedInputsContainer,
    HalvedInputWrapper,
    CountryDropdownInputWrapper,
    CustomWidthInputsContainer,
    StateDropdownInputWrapper,
    ZipInputWrapper
} from './Location.styles'
import IconCopy from '../../assets/icons/copy.svg?react'
import { LocationFormFieldValues } from '../../pages/home/Home'
import ReusableButton from '../../components/common/button/ReusableButton'
import Select from 'react-select'
import { RefObject, useImperativeHandle } from 'react'
import CountryOptions from '../../constants/COUNTRY_OPTIONS.json'
import StateOptions from '../../constants/STATE_OPTIONS.json'
import { DropdownStyling, LocationFormFieldDefaults } from './helpers'

interface LocationProps {
    venueTitle?: string
    altName?: string
    address?: string
    city?: string
    country?: string
    state?: string
    postal?: string
    parkingInfo?: string
    addNewLocationForm: (newLocationForm: LocationFormFieldValues) => void
    ref: RefObject<any>
}

function Location(props: LocationProps) {
    const { venueTitle, altName, address, city, country, state, postal, parkingInfo, addNewLocationForm, ref } = props

    const {
        register,
        control,
        trigger,
        getValues,
        formState: { errors }
    } = useForm<LocationFormFieldValues>({
        defaultValues: {
            venueTitle: venueTitle || LocationFormFieldDefaults.venueTitle,
            altName: altName || LocationFormFieldDefaults.altName,
            address: address || LocationFormFieldDefaults.address,
            city: city || LocationFormFieldDefaults.city,
            country: country || LocationFormFieldDefaults.country,
            state: state || LocationFormFieldDefaults.state,
            postal: postal || LocationFormFieldDefaults.postal,
            parkingInfo: parkingInfo || LocationFormFieldDefaults.parkingInfo
        }
    })

    // Without this, we would not be able to access each Location's
    // unique trigger() function from the parent Home component
    useImperativeHandle(ref, () => ({
        trigger,
        getValues
    }))

    return (
        <LocationWrapper ref={ref}>
            <LocationMain>
                <CopyButtonWrapper>
                    <ReusableButton
                        icon={<IconCopy />}
                        customPadding="6.5px"
                        onClick={() => addNewLocationForm(getValues())}
                    >
                        Copy
                    </ReusableButton>
                </CopyButtonWrapper>
                <LocationForm>
                    <TextLabel>Venue Title</TextLabel>
                    <TextInput
                        type="text"
                        id="venueTitle"
                        {...register('venueTitle', { required: 'Venue Title is required.', minLength: 1 })}
                    ></TextInput>
                    {errors.venueTitle && errors.venueTitle.type === 'required' && (
                        <span role="alert">This is required</span>
                    )}

                    <TextLabel>Alt Name</TextLabel>
                    <TextInput type="text" id="altName" {...register('altName')}></TextInput>
                    <HalvedInputsContainer>
                        <HalvedInputWrapper>
                            <TextLabel>Address</TextLabel>
                            <TextInput type="text" id="address" {...register('address')}></TextInput>
                        </HalvedInputWrapper>
                        <HalvedInputWrapper>
                            <TextLabel>City</TextLabel>
                            <TextInput type="text" id="city" {...register('city')}></TextInput>
                        </HalvedInputWrapper>
                    </HalvedInputsContainer>
                    <CountryDropdownInputWrapper>
                        {
                            // TODO: COME BACK HERE LATER, CAN BE OPTIMIZED.
                        }
                        <TextLabel>Country</TextLabel>
                        <Controller
                            control={control}
                            name="country"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={CountryOptions}
                                    styles={DropdownStyling}
                                    value={CountryOptions.find((option) => option.value === field.value)}
                                    onChange={(selectedOption) => field.onChange(selectedOption?.value)}
                                />
                            )}
                        />
                    </CountryDropdownInputWrapper>
                    <CustomWidthInputsContainer>
                        <StateDropdownInputWrapper>
                            <TextLabel>State</TextLabel>
                            <Controller
                                control={control}
                                name="state"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={StateOptions}
                                        styles={DropdownStyling}
                                        value={StateOptions.find((option) => option.value === field.value)}
                                        onChange={(selectedOption) => field.onChange(selectedOption?.value)}
                                    />
                                )}
                            />
                        </StateDropdownInputWrapper>
                        <ZipInputWrapper>
                            <TextLabel>Zip/Postal</TextLabel>
                            <TextInput type="text" id="postal" {...register('postal')}></TextInput>
                        </ZipInputWrapper>
                    </CustomWidthInputsContainer>

                    <TextLabel>Parking Info</TextLabel>
                    <TextArea rows={5} {...register('parkingInfo')} />
                </LocationForm>
            </LocationMain>
        </LocationWrapper>
    )
}

export default Location
