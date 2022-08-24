import { CharacterCard, GoBack } from '@common'
import { chain, toString } from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Character, useEpisodeQuery } from '@schemas/generated/graphql'
import styles from './episode.module.scss'

const RenderCharacter = (character: Character) => {
    return <CharacterCard key={character.id} {...character} />
}

const Episode: NextPage = () => {
    const router = useRouter()
    const { data } = useEpisodeQuery({
        variables: { id: toString(router.query.id) },
    })

    return (
        <main className={styles.page}>
            <section className={styles.top}>
                <GoBack />
                <h1 className={styles.top__title}>
                    {chain(data).get('episode').get('name').value()}
                </h1>
            </section>

            <div className={styles.information}>
                <section className={styles.information__episode}>
                    <h1 className={styles.information__title}>Episode</h1>
                    <h3 className={styles.information__subtitle}>
                        {chain(data).get('episode').get('episode').value()}
                    </h3>
                </section>
                <section className={styles.information__date}>
                    <h1 className={styles.information__title}>Date</h1>
                    <h3 className={styles.information__subtitle}>
                        {chain(data).get('episode').get('air_date').value()}
                    </h3>
                </section>
            </div>

            <section className={styles.characters}>
                <h6 className={styles.characters__title}>Cast</h6>
                <div className={styles.characters__cards}>
                    {chain(data)
                        .get('episode')
                        .get('characters')
                        .map(RenderCharacter)
                        .value()}
                </div>
            </section>
        </main>
    )
}

export default Episode
