import { useState } from "react";
import "./App.scss";
import { Theme } from "@radix-ui/themes";
import AppRoute from "./routes";
import client from "./helpers/apollo";
import { ApolloProvider } from "@apollo/client";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const [count, setCount] = useState(0);
  return (
    <ApolloProvider client={client}>
      <Theme>
        <AppRoute />
      </Theme>
    </ApolloProvider>
  );
}

export default App;
