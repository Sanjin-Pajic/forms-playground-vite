import { ButtonWrapper, Button as RealButton } from './ReusableButton.styles'
import { ReactNode } from 'react'

interface ReusableButtonProps {
    children?: ReactNode
    icon?: ReactNode
    backgroundColor?: string
    color?: string
    type?: 'submit'
    customPadding?: string
    disabled?: boolean
    onClick?: (() => void) | undefined
}

function ReusableButton(props: ReusableButtonProps) {
    const { children, icon, backgroundColor, color, type, customPadding, disabled, onClick } = props

    return (
        <ButtonWrapper $backgroundColor={backgroundColor} color={color} $disabled={disabled} onClick={onClick}>
            <RealButton $color={color} type={type} $customPadding={customPadding} disabled={disabled}>
                {icon ?? null}
                {children ?? null}
            </RealButton>
        </ButtonWrapper>
    )
}

export default ReusableButton
