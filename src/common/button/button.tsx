import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './button.module.scss'

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.button} {...props}>
            <h2 className={styles.button__label}>{children}</h2>
        </button>
    )
}
