import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import { Text } from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { EmptyStateComponentProp } from "./types";

function EmptyState({ model }: EmptyStateComponentProp) {
  return (
    <React.Fragment>
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
          Oops, no {model} found
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  alertContainer: { flex: 1, marginTop: RFValue(50), alignItems: "center" },
});

export { EmptyState };
