import styled from 'styled-components'
import deviceQuery from '../../utils/deviceQuery'

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const LocationsHeaderLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #46444b;
    gap: 0.25rem;
`

export const HeaderText = styled.span`
    font-family: 'Inter-SemiBold';
    font-size: 1rem;

    ${deviceQuery.mobileL} {
    }
`

export const IconInfoWrapper = styled.div`
    font-size: 1.45rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const LocationsContainer = styled.div``
export const TopHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
`
