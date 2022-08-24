import { FormEvent } from 'react'
import styles from './search.module.scss'

type SearchType = {
    LeftIcon?: JSX.Element
    RightIcon?: JSX.Element
    placeholder: string
    onSearch: (text: string) => void
}

export const Search: React.FC<SearchType> = ({
    LeftIcon,
    RightIcon,
    placeholder,
    onSearch,
}) => {
    const handleInput = (e: FormEvent<HTMLInputElement>) =>
        onSearch(e.currentTarget.value)

    return (
        <div className={styles.search}>
            <figure className={styles.search__icon}>{LeftIcon}</figure>
            <input
                type="search"
                className={styles.search__field}
                placeholder={placeholder}
                onInput={handleInput}
            />
            <figure className={styles.search__icon}>{RightIcon}</figure>
        </div>
    )
}
