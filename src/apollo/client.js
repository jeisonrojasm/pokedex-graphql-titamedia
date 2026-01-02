import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const apiUrl = import.meta.env.VITE_API_URL

export const client = new ApolloClient({
  link: new HttpLink({
    uri: apiUrl,
  }),
  cache: new InMemoryCache(),
})
