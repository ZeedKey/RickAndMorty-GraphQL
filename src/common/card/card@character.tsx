import Image from 'next/image'
import { Character } from '../../schemas/generated/graphql'
import styles from './card.module.scss'

export const CharacterCard: React.FC<Character> = ({
    image,
    name,
    species,
}) => {
    return (
        <div className={`${styles.card} ${styles.character_card}`}>
            <figure className={styles.card__icon}>
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="character-icon"
                />
            </figure>
            <div className={styles.card__content}>
                <h1 className={styles.card__title}>{name}</h1>
                <h3 className={styles.card__subtitle}>{species}</h3>
            </div>
        </div>
    )
}
