import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import { Text } from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { ErrorStateComponentProp } from "./types";
import { Button } from "../Button";

function ErrorState({ model, refetch }: ErrorStateComponentProp) {
  return (
    <>
      <View style={styles.alertContainer}>
        <Ionicons
          name={"ios-information-circle-outline"}
          color={Colors.yellow}
          size={RFValue(23)}
        />
        <Text
          style={{
            color: Colors.gray["400"],
            marginTop: RFValue(4),
          }}
        >
          An error occurred while fetching {model}
        </Text>
        <View style={styles.errorButtonContainer}>
          <Button onPress={refetch} title={"Retry"} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  alertContainer: { flex: 1, marginTop: RFValue(50), alignItems: "center" },
  errorButtonContainer: { marginTop: RFValue(10), width: "50%" },
});

export { ErrorState };
