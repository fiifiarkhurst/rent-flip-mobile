import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components/Text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constants/colors";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RequestStackProps } from "../types";
import { useNetInfo } from "@react-native-community/netinfo";
import Toast from "react-native-toast-message";

type Props = StackScreenProps<RequestStackProps, "stepOne">;

function StepOne({ navigation, route }: Props) {
  const [name, setName] = React.useState("");
  const { isInternetReachable } = useNetInfo();

  function handleSubmit() {
    //check if internet is avail
    if (!isInternetReachable) {
      return Toast.show({
        text1: "Application Error",
        text2: "Internet is not reachable",
        type: "error",
      });
    }
    navigation.push("stepTwo", {
      name: name.trim(),
      propertyId: route.params.propertyId,
    });
  }

  const disableButton = name.trim() === "";

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
              Step 1 of 4
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
                  value={name}
                  onChangeText={setName}
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
              disabled={disableButton}
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
