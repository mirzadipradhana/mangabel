import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

/* pages */
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
