import { UseFormRegister } from 'react-hook-form'
import { Description, InputLabel, ReusableInputWrapper, TrueInput } from './TextInput.styles'
import { FormFieldValues } from '../../../pages/home/Home'

interface TextInputProps {
    id: 'venueTitle' | 'altName' | 'address' | 'city' | 'country' | 'state' | 'postal' | 'parkingInfo'
    label: string
    type: 'text' | 'textarea'
    description?: string
    maxWidth?: string
    register: UseFormRegister<FormFieldValues>
}

export default function TextInput(props: TextInputProps) {
    const { id, label, type, description, maxWidth, register } = { ...props }
    const finalInput = type === 'text' ? <TrueInput {...register(id)} id={id} type="texts" /> : <textarea rows={6} />
    return (
        <ReusableInputWrapper>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            {finalInput}
            {props.description && <Description>{description}</Description>}
        </ReusableInputWrapper>
    )
}
