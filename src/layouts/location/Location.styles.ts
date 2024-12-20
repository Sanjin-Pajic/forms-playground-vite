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
    width: 100%;
    padding: 1.5rem 0 0.3rem;
    font-family: 'Inter-SemiBold';
    color: #464549;
    font-size: 13.5px;
`

export const TextArea = styled.textarea`
    width: 100%;
    font-size: 13.5px;
    padding: 6px 4px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-family: 'Inter';
    resize: vertical;
`

export const TextInput = styled.input<{ maxWidth?: string }>`
    width: 100%;
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
export const LocationForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`

export const HalvedInputsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 20px;

    & :last-child {
        margin-right: 10px;
    }
`

export const HalvedInputWrapper = styled.div`
    width: 47%;
`

export const CountryDropdownInputWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
`

export const CustomWidthInputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
`
export const StateDropdownInputWrapper = styled.div`
    width: 65%;
`

export const ZipInputWrapper = styled.div`
    width: 30%;
    margin-right: 10px;
`
