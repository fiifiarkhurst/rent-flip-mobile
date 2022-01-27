import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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
import CodeInput from "react-native-confirmation-code-input";

type StepThreeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RequestStackProps, "stepTwo">,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: StepThreeScreenNavigationProp;
};

function StepThree({ navigation }: Props) {
  const [countDown, setCountdown] = React.useState(59);

  let resendLoad;

  React.useEffect(() => {
    let timer: any;
    if (countDown > 0) {
      timer = setTimeout(() => setCountdown(countDown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countDown]);

  function resendCode() {}

  function handleNext() {
    navigation.push("stepFour", {
      name: "Fiifi",
      email: "fooa",
      phone: "",
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
              Step 3 of 3
            </Text>
            <Text
              type={"bold"}
              style={{ fontSize: RFValue(20), color: Colors.gray["700"] }}
            >
              Your phone number
            </Text>

            <View style={{ marginTop: RFValue(20) }}>
              <Text type={"medium"}>Phone number *</Text>
              <View style={{ marginTop: RFValue(5) }}>
                <TextInput
                  placeholder={"0201080802"}
                  autoFocus
                  // value={lastName}
                  // onChangeText={setLastName}
                  keyboardType={"number-pad"}
                />
              </View>
            </View>
            <View style={{ marginTop: RFValue(30) }}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: RFValue(5),
                }}
              >
                <Text type={"medium"}>Verify your phone number *</Text>
                <View style={styles.didntReceiveCode}>
                  {resendLoad ? (
                    <Text style={{ color: Colors.yellow }}>Sending...</Text>
                  ) : countDown !== 0 ? (
                    <Text style={{ color: Colors.yellow }}>
                      0:{countDown < 10 ? `0${countDown}` : countDown}
                    </Text>
                  ) : (
                    <TouchableOpacity onPress={resendCode}>
                      <Text
                        type={"medium"}
                        style={{
                          color: Colors.primary["800"],
                        }}
                      >
                        Resend Code
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              <CodeInput
                // ref="codeInputRef1"
                activeColor={Colors.primary["700"]}
                inactiveColor={Colors.gray["200"]}
                autoFocus={true}
                ignoreCase={true}
                className={"border-b"}
                keyboardType="number-pad"
                inputPosition="center"
                size={50}
                space={RFValue(20)}
                onFulfill={(newCode: string) => {
                  // setCode(newCode);
                }}
                containerStyle={{ marginTop: RFValue(5) }}
                codeInputStyle={{ borderWidth: 1 }}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleNext}
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
  didntReceiveCode: { alignItems: "center", marginLeft: RFValue(4) },
});

export { StepThree };
