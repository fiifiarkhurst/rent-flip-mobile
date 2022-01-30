import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RequestStackProps } from "./types";
import { StatusBar, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";
import { StepThree } from "./stepThree";
import { StepFour } from "./stepFour";
import { Success } from "./success";

const Stack = createStackNavigator<RequestStackProps>();

function RequestNavigator() {
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator initialRouteName={"stepOne"}>
        <Stack.Screen
          name={"stepOne"}
          component={StepOne}
          options={{
            headerStyle: {
              backgroundColor: Colors.white,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
            headerLeft: ({ onPress }) => (
              <>
                <TouchableOpacity
                  style={{
                    marginLeft: RFValue(15),
                    backgroundColor: Colors.gray["100"],
                    padding: RFValue(7),
                    borderRadius: RFValue(20),
                  }}
                  onPress={onPress}
                >
                  <Ionicons
                    name={"ios-arrow-back-outline"}
                    color={Colors.gray["600"]}
                    size={RFValue(20)}
                  />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name={"stepTwo"}
          component={StepTwo}
          options={{
            headerStyle: {
              backgroundColor: Colors.white,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
            headerLeft: ({ onPress }) => (
              <>
                <TouchableOpacity
                  style={{
                    marginLeft: RFValue(15),
                    backgroundColor: Colors.gray["100"],
                    padding: RFValue(7),
                    borderRadius: RFValue(20),
                  }}
                  onPress={onPress}
                >
                  <Ionicons
                    name={"ios-arrow-back-outline"}
                    color={Colors.gray["600"]}
                    size={RFValue(20)}
                  />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name={"stepThree"}
          component={StepThree}
          options={{
            headerStyle: {
              backgroundColor: Colors.white,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
            headerLeft: ({ onPress }) => (
              <>
                <TouchableOpacity
                  style={{
                    marginLeft: RFValue(15),
                    backgroundColor: Colors.gray["100"],
                    padding: RFValue(7),
                    borderRadius: RFValue(20),
                  }}
                  onPress={onPress}
                >
                  <Ionicons
                    name={"ios-arrow-back-outline"}
                    color={Colors.gray["600"]}
                    size={RFValue(20)}
                  />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name={"stepFour"}
          component={StepFour}
          options={{
            gestureEnabled: false, // cant go back
            headerStyle: {
              backgroundColor: Colors.white,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
            headerLeft: ({ onPress }) => (
              <>
                <TouchableOpacity
                  style={{
                    marginLeft: RFValue(15),
                    backgroundColor: Colors.gray["100"],
                    padding: RFValue(7),
                    borderRadius: RFValue(20),
                  }}
                  onPress={onPress}
                >
                  <Ionicons
                    name={"ios-arrow-back-outline"}
                    color={Colors.gray["600"]}
                    size={RFValue(20)}
                  />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name={"success"}
          component={Success}
          options={{
            gestureEnabled: false, // cant go back
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
}

export { RequestNavigator };
