import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { MainNavigator } from "../screens/main";
import { RequestNavigator } from "../screens/request";
import { AuthStackNavigator } from "../screens/auth";

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Main"}>
          <Stack.Screen
            name={"Main"}
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name={"Request"}
            component={RequestNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Navigator;
