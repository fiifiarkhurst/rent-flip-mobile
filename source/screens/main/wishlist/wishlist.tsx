import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";

type Props = StackScreenProps<any, "wishlist">;

function WishList({ navigation }: Props) {
  const handleGoToLogin = React.useCallback(() => {
    navigation.navigate("Auth");
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text type="bold" style={styles.headerText}>
            WishLists
          </Text>
          {/* login text container */}
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginTextHeader} type="medium">
              Log in to view your wishlists
            </Text>
            <Text type="light" style={styles.loginTextDescription}>
              You can create, view or edit whislists once you've logged in.
            </Text>
          </View>
          {/* button */}
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleGoToLogin} />
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
  loginTextContainer: {
    paddingVertical: RFValue(35),
  },
  loginTextHeader: {
    fontSize: RFValue(15),
    color: Colors.gray["800"],
  },
  loginTextDescription: {
    fontSize: RFValue(12),
    color: Colors.gray["800"],
    paddingTop: RFValue(2),
  },
  buttonContainer: {
    width: "30%",
  },
});

export { WishList };
