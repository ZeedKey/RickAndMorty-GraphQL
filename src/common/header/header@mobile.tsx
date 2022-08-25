import { Link } from '@common'
import { ROUTES } from '@routes'
import { BurgerIcon, LogoIcon } from '@icons'
import styles from './header.module.scss'
import { useState } from 'react'

const RenderMenuLink = (route: Routes.RouteType) => (
    <Link href={route.path}>
        <a className={styles.menu__link}>{route.name}</a>
    </Link>
)

export const MobileHeader: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible((state) => !state)

    return (
        <>
            <header className={`${styles.header} ${styles.mobile_header}`}>
                <nav className={styles.navbar}>
                    <figure>
                        <LogoIcon />
                    </figure>
                    <button
                        className={styles.navbar__button}
                        onClick={toggleModal}
                    >
                        <figure>
                            <BurgerIcon />
                        </figure>
                    </button>
                </nav>
            </header>
            <dialog open={isModalVisible} className={styles.modal}>
                <div className={styles.modal__content}>
                    {ROUTES.map(RenderMenuLink)}
                </div>
            </dialog>
        </>
    )
}
