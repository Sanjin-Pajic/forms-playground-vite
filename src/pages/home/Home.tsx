import { HomeWrapper } from './Home.styles'
import MyIcon from '../../assets/icons/info.svg'

/**
 * HOME COMPONENT
 *
 * This component serves as the primary entry point for the application (excluding index.tsx or App.tsx).
 *
 * The App.tsx file is designed to include only this component as its main content.
 * While the original design does not involve routing or multiple pages, this setup
 * separates the primary UI logic from the App.tsx file, adhering to cleaner architectural
 * principles (in my opinion). By doing this, we ensure that the main application component,
 * where optimally only routing logic and global components should be held, is not cluttered
 * with direct TSX content and that future scalability is preserved if additional routes or
 * components are to be added later (if this was an actual production-based project).
 *
 * @function Home
 * @returns {JSX.Element}
 */
function Home(): JSX.Element {
    return (
        <HomeWrapper>
            <MyIcon />
            <p>Locations</p>
        </HomeWrapper>
    )
}

export default Home
