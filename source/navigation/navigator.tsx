import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { MainNavigator } from "../screens/main";

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
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Navigator;
