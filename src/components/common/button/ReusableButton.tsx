import { ButtonWrapper, Button as RealButton } from './ReusableButton.styles'
import { ReactNode } from 'react'

interface ReusableButtonProps {
    children?: ReactNode
    icon?: ReactNode
}

function ReusableButton(props: ReusableButtonProps) {
    return (
        <ButtonWrapper>
            <RealButton>
                {props.icon ?? null}
                {props.children ?? null}
            </RealButton>
        </ButtonWrapper>
    )
}

export default ReusableButton
