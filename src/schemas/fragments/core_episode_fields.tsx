import { gql } from '@apollo/client'

export const CORE_EPISODE_FIELDS = gql`
    fragment CoreEpisodeFields on Episode {
        id
        name
        episode
        air_date
    }
`
