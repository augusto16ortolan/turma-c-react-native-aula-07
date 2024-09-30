import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "./src/pages/Movies";
import MovieDetail from "./src/pages/MovieDetail";
import { Button, Text } from "react-native";

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      >
        <AppStack.Screen
          name="Movies"
          options={{
            headerTitle: "Filmes",
            // headerRight: () => (
            //   <Button title="Devs" onPress={() => alert("teste")} />
            // ),
          }}
          component={Movies}
        />
        <AppStack.Screen
          name="MovieDetail"
          options={{
            headerTitle: "Detalhes do filme",
          }}
          component={MovieDetail}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
