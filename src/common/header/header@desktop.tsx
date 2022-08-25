import { Link } from '@common'
import { ROUTES } from '@routes'
import { LogoIcon } from '@icons'
import styles from './header.module.scss'

const RenderMenuLink = (route: Routes.RouteType) => (
    <Link href={route.path} key={route.path}>
        <a className={styles.menu__link}>
            {route.name}
        </a>
    </Link>
)

export const DesktopHeader: React.FC = () => {
    return (
        <header className={`${styles.header} ${styles.header_desktop}`}>
            <nav className={styles.navbar}>
                <figure>
                    <LogoIcon />
                </figure>
                <div className={styles.menu}>{ROUTES.map(RenderMenuLink)}</div>
            </nav>
        </header>
    )
}
