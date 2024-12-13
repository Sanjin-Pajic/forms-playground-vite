import styled from 'styled-components'

export const LocationWrapper = styled.div`
    display: flex;
    margin-bottom: 3.5rem;
    outline: 1.5px solid rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    border-radius: 0.7rem;
`
export const LocationMain = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`

export const CopyButtonWrapper = styled.div`
    width: fit-content;
`

export const TextLabel = styled.label`
    padding: 1.5rem 0 0.3rem;
    font-family: 'Inter-SemiBold';
    color: #464549;
    font-size: 13.5px;
`

export const TextInput = styled.input<{ maxWidth?: string }>`
    width: ${(p) => p.maxWidth ?? '100%'};
    font-size: 13.5px;
    padding: 6px 4px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`

export const EndActionButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
`
