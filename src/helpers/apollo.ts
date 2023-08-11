import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { API_HOST, WS_API_HOST } from "./constants";
import { getMainDefinition } from "@apollo/client/utilities";
import authHandler from "./authHandler";

const httpLink = new HttpLink({
  uri: API_HOST + "/graphql",
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(WS_API_HOST, {
    reconnect: true,
    connectionParams: () => {
      return {
        Authorization: `Bearer ${authHandler.accessToken}`,
      };
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
