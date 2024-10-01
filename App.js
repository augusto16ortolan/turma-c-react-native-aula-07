import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "./src/pages/Movies";
import MovieDetail from "./src/pages/MovieDetail";
import ScreenA from "./src/pages/ScreenA";
import ScreenB from "./src/pages/ScreenB";
import Pessoas from "./src/pages/Pessoas";
import DetalhePessoa from "./src/pages/DetalhePessoa";
import Pokemon from "./src/pages/Pokemon";
import { Button, Text } from "react-native";

const AppStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

function AppStackNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "green",
        },
      }}
    >
      <AppStack.Screen name="Pokemon" component={Pokemon} />
      {/* <AppStack.Screen name="Pessoas" component={Pessoas} /> */}
      {/* <AppStack.Screen name="DetalhePessoa" component={DetalhePessoa} /> */}
      {/* <AppStack.Screen
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
      /> */}
    </AppStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppStack.Navigator
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
      </AppStack.Navigator> */}
      <AppTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppTab.Screen name="Movies" component={AppStackNavigator} />
        <AppTab.Screen name="ScreenA" component={ScreenA} />
        <AppTab.Screen name="ScreenB" component={ScreenB} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
