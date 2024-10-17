import React from "react";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
//ApiClient er for å sjekke om vi har riktig connection
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      console.log(`Graphql error ${message}`);
    });
  }
  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.entur.io/realtime/v1/vehicles/graphql" }),
]);

const ApiClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default ApiClient;
