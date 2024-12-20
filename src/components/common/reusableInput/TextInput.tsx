import { UseFormRegister } from 'react-hook-form'
import { Description, InputLabel, ReusableInputWrapper, TrueInput } from './TextInput.styles'
import { LocationFormFieldValues } from '../../../pages/home/Home'

interface TextInputProps {
    id: 'venueTitle' | 'altName' | 'address' | 'city' | 'country' | 'state' | 'postal' | 'parkingInfo'
    label: string
    type: 'text' | 'textarea'
    description?: string
    maxWidth?: string
    register: UseFormRegister<LocationFormFieldValues>
}

export default function TextInput(props: TextInputProps) {
    const { id, label, type, description, register } = { ...props }
    return (
        <ReusableInputWrapper>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <TrueInput {...register(id)} id={id} type="texts" />
            {props.description && <Description>{description}</Description>}
        </ReusableInputWrapper>
    )
}
