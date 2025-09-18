import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from "./src/pages/inicial/Inicial";
import BoasVindas from "./src/pages/boasVindas/BoasVindas";
import Principal from "./src/pages/principal/Principal";


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Inicial" component={Inicial}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="boasVindas" component={BoasVindas}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Principal" component={Principal}
          options={{
            headerShown: false,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;