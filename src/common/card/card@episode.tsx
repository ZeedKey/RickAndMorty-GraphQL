import React from 'react'
import { Episode } from '@schemas/generated/graphql'
import styles from './card.module.scss'

type EpisodesCardProps = Episode & {
    onClick?: () => void
}

export const EpisodeCard = React.forwardRef(
    ({ air_date, name, episode, onClick }: EpisodesCardProps, ref) => {
        return (
            <div
                ref={ref as React.LegacyRef<HTMLDivElement>}
                onClick={onClick}
                className={`${styles.card} ${styles.episode_card}`}
            >
                <h1 className={styles.card__title}>{name}</h1>
                <h3 className={styles.card__subtitle}>{air_date}</h3>
                <p className={styles.card__caption}>{episode}</p>
            </div>
        )
    }
)
