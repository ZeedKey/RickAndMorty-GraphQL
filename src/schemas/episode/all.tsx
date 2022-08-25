import { gql } from '@apollo/client'
import { CORE_EPISODE_FIELDS } from '../fragments/core_episode_fields'

export const EpisodesQuery = gql`
    ${CORE_EPISODE_FIELDS}
    query Episodes($page: Int, $filter: FilterEpisode) {
        episodes(page: $page, filter: $filter) {
            info {
                next
            }
            results {
                ...CoreEpisodeFields
            }
        }
    }
`
