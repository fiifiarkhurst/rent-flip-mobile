import React, { FC, useState } from "react";
import {
  TextInput as BaseTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";

interface Props {
  backgroundColor?: string;
}

const TextInput: FC<Props & TextInputProps> = (props) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <BaseTextInput
        {...props}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholderTextColor={Colors.gray["400"]}
        style={[
          styles.container,
          { backgroundColor: props.backgroundColor || Colors.white },
          active ? styles.activeBorder : styles.inactiveBorder,
        ]}
        selectionColor={Colors.primary["600"]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(5),
    height: RFValue(45),
    paddingHorizontal: RFValue(15),
    color: Colors.gray["800"],
    fontFamily: "Poppins-Regular",
  },
  activeBorder: { borderWidth: 1, borderColor: Colors.gray["500"] },
  inactiveBorder: { borderWidth: 0.5, borderColor: Colors.gray["400"] },
});

export default TextInput;
