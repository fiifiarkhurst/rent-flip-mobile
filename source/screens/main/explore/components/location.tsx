import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "../../../../components/Text";

function Location() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <MaterialIcons
          name="location-on"
          size={RFValue(16)}
          color={Colors.primary["600"]}
        />
        <Text type="medium" style={styles.text}>
          Accra, Ghana
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray["100"],
    height: RFValue(33),
    width: "54%",
    borderRadius: RFValue(20),
  },
  text: {
    paddingLeft: RFValue(4),
    fontSize: RFValue(12),
    color: Colors.gray["800"],
  },
});

export { Location };
