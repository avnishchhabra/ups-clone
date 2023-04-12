import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://mehunsuryevre.stepzen.net/api/honking-donkey/__graphql',
  headers: {'Authorization':'apikey mehunsuryevre::stepzen.io+1000::2fec5d0e5b3360837d9815ebea06c16c0cebd4697d192e8bc0cb208f9d94dc7c'},
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //  @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
