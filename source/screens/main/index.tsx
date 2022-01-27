import * as React from "react";
import { StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabProps } from "./types";
import { Colors } from "../../constants/colors";
import { Ionicons, Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

// screens
import { Explore } from "./explore";
import { WishList } from "./wishlist";
import { Settings } from "./settings";

const Tab = createBottomTabNavigator<MainTabProps>();

function MainNavigator() {
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <Tab.Navigator
        initialRouteName={"explore"}
        screenOptions={{
          tabBarActiveTintColor: Colors.white,
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
                    height: RFValue(25),
                    width: RFValue(25),
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
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name={"wishlist"}
          component={WishList}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "ios-layers" : "ios-layers-outline"}
                size={RFValue(size)}
                color={color}
              />
            ),
            tabBarLabel: "Orders",
          }}
        />

        <Tab.Screen
          name={"settings"}
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "ios-cog" : "ios-cog-outline"}
                size={RFValue(size)}
                color={color}
              />
            ),
            tabBarLabel: "Settings",
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}

export { MainNavigator };
