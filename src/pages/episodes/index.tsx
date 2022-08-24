import { NextPage } from 'next'
import styles from './episodes.module.scss'
import Image from 'next/image'
import { Button, EpisodeCard, Link, Search } from '@common'
import { SearchIcon } from '@icons'
import {
    Episode as EpisodeType,
    useEpisodesQuery,
} from '@schemas/generated/graphql'
import { chain, debounce, isNull } from 'lodash'
import React, { useState } from 'react'

const RenderEpisode = (episode: EpisodeType) => {
    return (
        <Link key={episode.id} href={'/episodes/' + episode.id}>
            <EpisodeCard {...episode} />
        </Link>
    )
}

const Episode: NextPage = () => {
    const [filter, setFilter] = useState('')
    const { data, fetchMore } = useEpisodesQuery({
        variables: { page: 1, filter: { name: filter, episode: '' } },
    })

    const onLoadPressed = () =>
        fetchMore({ variables: { page: data?.episodes.info.next } })

    const onSearch = debounce(setFilter, 1000)

    return (
        <main className={styles.page}>
            <figure className={styles.banner}>
                <Image
                    src={'/img/episodes_banner.png'}
                    layout="fill"
                    objectFit="contain"
                    alt='banner'
                    priority
                />
            </figure>
            <article className={styles.filters}>
                <Search
                    placeholder="Filter by name or episode (ex. S01 or S01E02)"
                    LeftIcon={<SearchIcon />}
                    onSearch={onSearch}
                />
            </article>
            <section className={styles.episodes}>
                {chain(data)
                    .get('episodes')
                    .get('results')
                    .map(RenderEpisode)
                    .value()}
            </section>
            <article className={styles.button}>
                <Button
                    disabled={isNull(data?.episodes.info.next)}
                    onClick={onLoadPressed}
                >
                    Load more
                </Button>
            </article>
        </main>
    )
}

export default Episode
