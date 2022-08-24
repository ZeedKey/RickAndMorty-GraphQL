import type { AppProps } from 'next/app'
import { PageLayout } from '@layouts'
import '@styles/main.scss'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    FieldPolicy,
} from '@apollo/client'

function mergePagination(keyArgs?: string[]): FieldPolicy {
    return {
        keyArgs: keyArgs ?? false,
        merge: (existing, incoming) => {
            return {
                ...incoming,
                results: existing
                    ? [...existing.results, ...incoming.results]
                    : incoming.results,
            }
        },
    }
}

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                episodes: mergePagination(['filter']),
            },
        },
    },
})

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}`,
    cache: cache,
})

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </ApolloProvider>
    )
}
