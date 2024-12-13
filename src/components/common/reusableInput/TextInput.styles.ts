import styled from 'styled-components'

export const ReusableInputWrapper = styled.div<{ maxWidth?: string }>`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    padding: 1.5rem 0 0.3rem;
    font-family: 'Inter-SemiBold';
    color: #464549;
    font-size: 13.5px;
`
export const TrueInput = styled.input`
    font-size: 13.5px;
    padding: 6px 4px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`
export const Description = styled.span`
    font-family: 'Inter';
    font-size: 13px;
    color: #464549;
    padding-top: 0.3rem;
    opacity: 80%;
`
