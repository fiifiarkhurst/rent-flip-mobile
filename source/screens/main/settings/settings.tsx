import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";

type Props = StackScreenProps<any, "settings">;

function Settings({ navigation }: Props) {
  const handleGoToLogin = React.useCallback(() => {
    navigation.navigate("Auth");
  }, []);

  const handleGoToSignup = React.useCallback(() => {
    navigation.navigate("Auth");
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text type="bold" style={styles.headerText}>
            Your Profile
          </Text>
          {/* login text container */}
          <View>
            <Text type="light" style={styles.loginTextDescription}>
              Log in to start planning your next trips.
            </Text>
          </View>
          {/* button */}
          <View style={styles.buttonContainer}>
            <Button onPress={handleGoToLogin} title="Login" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: RFValue(8),
              }}
            >
              <Text
                type="light"
                style={[
                  styles.loginTextDescription,
                  {
                    fontSize: RFValue(12),
                  },
                ]}
              >
                Don't have an account?
              </Text>
              <TouchableOpacity activeOpacity={0.9} onPress={handleGoToSignup}>
                <Text
                  type="medium"
                  style={[
                    styles.loginTextDescription,
                    {
                      fontSize: RFValue(12),
                      color: Colors.gray["800"],
                      paddingLeft: 3,
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer: {
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(35),
  },
  headerText: {
    fontSize: RFValue(20),
    color: Colors.gray["800"],
  },

  loginTextHeader: {
    fontSize: RFValue(15),
    color: Colors.gray["800"],
  },
  loginTextDescription: {
    fontSize: RFValue(14),
    color: Colors.gray["800"],
    paddingTop: RFValue(2),
  },
  buttonContainer: {
    width: "70%",
    paddingTop: RFValue(35),
  },
});

export { Settings };
