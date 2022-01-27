import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components/Text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constants/colors";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/types";
import { RequestStackProps } from "../types";

type StepOneScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RequestStackProps, "stepOne">,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: StepOneScreenNavigationProp;
};

function StepOne({ navigation }: Props) {
  function handleSubmit() {
    navigation.push("stepTwo", {
      name: "Fiifi",
    });
  }
  return (
    <React.Fragment>
      <KeyboardAwareScrollView style={styles.container}>
        <View
          style={{
            marginTop: RFValue(20),
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              type={"medium"}
              style={{ color: Colors.primary["600"], fontSize: RFValue(13) }}
            >
              Step 1 of 3
            </Text>
            <Text
              type={"bold"}
              style={{ fontSize: RFValue(20), color: Colors.gray["700"] }}
            >
              Enter your details
            </Text>

            <View style={{ marginTop: RFValue(20) }}>
              <Text type={"medium"}>Full Name *</Text>
              <View style={{ marginTop: RFValue(5) }}>
                <TextInput
                  placeholder={"John Doe"}
                  autoFocus
                  // value={lastName}
                  // onChangeText={setLastName}
                  textContentType={"familyName"}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit}
              iconStyle={{ marginLeft: RFValue(10) }}
              style={styles.button}
              title={"Next"}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: RFValue(20),
  },
  buttonContainer: {
    marginTop: RFValue(40),
    alignItems: "flex-start",
  },
  button: {
    // width: '50%',
    paddingHorizontal: RFValue(50),
  },
});

export { StepOne };
