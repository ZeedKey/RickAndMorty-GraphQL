import { ArrowBackIcon } from '@icons'
import { useRouter } from 'next/router'
import styles from './back.module.scss'

export const GoBack: React.FC = () => {
    const router = useRouter()
    const goBack = () => router.back()
    
    return (
        <nav className={styles.nav}>
            <button className={styles.nav__button} onClick={goBack}>
                <figure className={styles.nav__icon}>
                    <ArrowBackIcon />
                </figure>
                <h3 className={styles.nav__label}>GO BACK</h3>
            </button>
        </nav>
    )
}
