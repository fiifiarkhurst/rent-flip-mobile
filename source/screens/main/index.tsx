import * as React from "react";
import { StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabProps } from "./types";
import { Colors } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

// screens
import { Explore } from "./explore";
import { WishList } from "./wishlist";
import { Settings } from "./settings";
import { Messaging } from "./messaging";

const Tab = createBottomTabNavigator<MainTabProps>();

function MainNavigator() {
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <Tab.Navigator
        initialRouteName={"explore"}
        screenOptions={{
          tabBarActiveTintColor: Colors.gray["100"],
          tabBarInactiveTintColor: Colors.gray["500"],
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name={"explore"}
          component={Explore}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <View
                  style={{
                    height: RFValue(27),
                    width: RFValue(27),
                    borderRadius: RFValue(8),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: focused
                      ? Colors.primary["600"]
                      : Colors.white,
                  }}
                >
                  <Feather
                    name={focused ? "search" : "search"}
                    size={RFValue(size - 8)}
                    color={color}
                  />
                </View>
              </>
            ),
            lazy: true,
          }}
        />

        <Tab.Screen
          name={"wishlist"}
          component={WishList}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <View
                  style={{
                    height: RFValue(27),
                    width: RFValue(27),
                    borderRadius: RFValue(8),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: focused
                      ? Colors.primary["600"]
                      : Colors.white,
                  }}
                >
                  <Feather
                    name={focused ? "heart" : "heart"}
                    size={RFValue(size - 8)}
                    color={color}
                  />
                </View>
              </>
            ),
            lazy: true,
          }}
        />

        <Tab.Screen
          name={"messaging"}
          component={Messaging}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <View
                  style={{
                    height: RFValue(27),
                    width: RFValue(27),
                    borderRadius: RFValue(8),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: focused
                      ? Colors.primary["600"]
                      : Colors.white,
                  }}
                >
                  <Feather
                    name={focused ? "message-square" : "message-square"}
                    size={RFValue(size - 8)}
                    color={color}
                  />
                </View>
              </>
            ),
            lazy: true,
          }}
        />

        <Tab.Screen
          name={"settings"}
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <View
                  style={{
                    height: RFValue(27),
                    width: RFValue(27),
                    borderRadius: RFValue(8),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: focused
                      ? Colors.primary["600"]
                      : Colors.white,
                  }}
                >
                  <Feather
                    name={focused ? "settings" : "settings"}
                    size={RFValue(size - 8)}
                    color={color}
                  />
                </View>
              </>
            ),
            lazy: true,
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}

export { MainNavigator };
