import React from "react";
import { FC } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {}

const NewTextInput: FC<Props & TextInputProps> = (props) => {
  return (
    <>
      <View style={[styles.container, styles.centerContainer]}>
        <View style={{ marginRight: RFValue(10) }}>
          <Ionicons
            name={"ios-search"}
            size={RFValue(15)}
            color={Colors.gray["600"]}
          />
        </View>
        <TextInput
          selectionColor={Colors.primary["600"]}
          placeholderTextColor={Colors.gray["300"]}
          {...props}
          style={[props.style, styles.textInput]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: Colors.gray["200"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(10),
        borderRadius: 10,
        flexDirection: "row",
        // backgroundColor: Colors.gray["50"],
      },
      android: {
        borderWidth: 1,
        borderColor: Colors.gray["200"],
        paddingHorizontal: RFValue(12),
        // paddingVertical: RFValue(3),
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      },
    }),
  },
  textInput: {
    flex: 1,
    color: Colors.black,
  },
  centerContainer: { alignItems: "center" },
});

NewTextInput.defaultProps = {};

export default NewTextInput;
