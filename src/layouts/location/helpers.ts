import { StylesConfig } from 'react-select'

interface DropdownOption {
    value: string
    label: string
}

export const DropdownStyling: StylesConfig<DropdownOption, false> = {
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

export const LocationFormFieldDefaults = {
    venueTitle: '',
    altName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postal: '',
    parkingInfo: ''
}
