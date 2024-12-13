import styled from 'styled-components'

interface ButtonWrapperProps {
    backgroundColor?: string
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    outline: 1.5px solid rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    border-radius: 0.5rem;
    height: fit-content;
    display: flex;
    align-items: center;
    background-color: ${(p) => p.backgroundColor ?? 'transparent'};
`

export const Button = styled.button<{ color?: string; customPadding?: string }>`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 12px;
    color: ${(p) => p.color ?? '#56555a'};
    padding: ${(p) => p.customPadding ?? '6px 21px'};
    font-family: 'Inter-SemiBold';
    font-weight: 1000;
    background-color: transparent;
    border: 0px solid transparent;
    border-radius: none;
    cursor: pointer;
`
