import { gql } from '@apollo/client'
import { CORE_EPISODE_FIELDS } from '../fragments/core_episode_fields'

export const EpisodeQuery = gql`
    ${CORE_EPISODE_FIELDS}
    query Episode($id: ID!) {
        episode(id: $id) {
            ...CoreEpisodeFields
            characters {
                id
                image
                name
                species
            }
        }
    }
`
