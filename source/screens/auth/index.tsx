import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackProps } from "./types";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";
// import { Colors } from "../../constants/colors";
// import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

import Login from "./login";
import Register from "./register";

const Stack = createStackNavigator<AuthStackProps>();

const AuthStackNavigator = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        screenOptions={{
          presentation: "transparentModal",
        }}
        initialRouteName="login"
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={({ navigation }) => ({
            headerTitle: "Log in to your account",
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
                activeOpacity={0.9}
              >
                <AntDesign name="close" size={20} color={Colors.gray["800"]} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="signup"
          component={Register}
          options={({ navigation }) => ({
            headerTitle: "Sign up",
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
                activeOpacity={0.9}
              >
                <AntDesign name="close" size={20} color={Colors.gray["800"]} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    marginLeft: RFValue(10),
  },
});

export { AuthStackNavigator };
