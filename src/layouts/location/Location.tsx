import { LocationMain, LocationWrapper } from './Location.styles'
import ReusableButton from '../../components/common/button/ReusableButton'
import CopyIcon from '../../assets/icons/copy.svg?react'

function Location() {
    return (
        <LocationWrapper>
            <LocationMain>
                <ReusableButton icon={<CopyIcon />}>Copy</ReusableButton>
            </LocationMain>
        </LocationWrapper>
    )
}

export default Location
