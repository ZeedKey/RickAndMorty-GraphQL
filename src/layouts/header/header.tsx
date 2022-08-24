import { useIsMobile } from '@hooks'
import { DesktopHeader, MobileHeader } from '@common'

export const HeaderLayout: React.FC = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileHeader /> : <DesktopHeader />
}
