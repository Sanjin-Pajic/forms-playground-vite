import { ButtonWrapper, Button as RealButton } from './ReusableButton.styles'
import { ReactNode } from 'react'

interface ReusableButtonProps {
    children?: ReactNode
    icon?: ReactNode
    backgroundColor?: string
    color?: string
    type?: 'submit'
    customPadding?: string
    onClick?: (() => void) | undefined
}

function ReusableButton(props: ReusableButtonProps) {
    return (
        <ButtonWrapper $backgroundColor={props.backgroundColor} color={props.color} onClick={props.onClick}>
            <RealButton $color={props.color} type={props.type} $customPadding={props.customPadding}>
                {props.icon ?? null}
                {props.children ?? null}
            </RealButton>
        </ButtonWrapper>
    )
}

export default ReusableButton
