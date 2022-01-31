import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/Text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constants/colors";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RequestStackProps } from "../types";
import { useNetInfo } from "@react-native-community/netinfo";
import { validateEmail } from "../../../services/broker";
import { useSendEmailVerification, useVerifyEmail } from "./broker";
import { AxiosError, AxiosResponse } from "axios";
import { SendEmailVerificationOutput, VerifyEmailOutput } from "./types";
import CodeInput from "react-native-confirmation-code-input";
import Toast from "react-native-toast-message";

type Props = StackScreenProps<RequestStackProps, "stepTwo">;

function StepTwo({ navigation, route }: Props) {
  const { isInternetReachable } = useNetInfo();
  const [email, setEmail] = React.useState("");
  const [countDown, setCountdown] = React.useState(59);
  const [isCodeSent, setIsCodeSent] = React.useState(false);
  const [code, setCode] = React.useState("");

  const { mutateAsync, isLoading } = useSendEmailVerification(email);
  const { mutateAsync: verifyEmailInvoker, isLoading: isVerifying } =
    useVerifyEmail(email);

  let resendLoad;

  React.useEffect(() => {
    let timer: any;
    if (countDown > 0) {
      timer = setTimeout(() => setCountdown(countDown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countDown]);

  function resendCode() {}

  function handleSendVerifyCode() {
    //validate email
    if (email.trim() === "" || !validateEmail(email)) {
      return Toast.show({
        text1: "Application Error",
        text2: "Please enter a valid email address",
        type: "error",
      });
    }
    //check if internet is avail
    if (!isInternetReachable) {
      return Toast.show({
        text1: "Application Error",
        text2: "Internet is not reachable",
        type: "error",
      });
    }

    mutateAsync({})
      .then((res: AxiosResponse<SendEmailVerificationOutput>) => {
        Toast.show({
          text1: "Verification code sent",
          text2: "Verify your email address by entering code.",
          type: "success",
        });
        setIsCodeSent(res?.data?.success);
      })
      .catch((e: AxiosError) => {
        Toast.show({
          text1: "Oops, something happened",
          text2: "An error occured",
          type: "error",
        });
      });
  }

  function handleVerifyEmail() {
    //check if internet is avail
    if (!isInternetReachable) {
      return Toast.show({
        text1: "Application Error",
        text2: "Internet is not reachable",
        type: "error",
      });
    }

    verifyEmailInvoker({
      code: code,
    })
      .then((res: AxiosResponse<VerifyEmailOutput>) => {
        if (res.data.success) {
          navigation.push("stepThree", {
            propertyId: route?.params?.propertyId,
            name: route?.params?.propertyId,
            email: email.trim(),
          });
        }
      })
      .catch((e: AxiosError) => {
        Toast.show({
          text1: "Oops, something happened",
          text2: "Could not verify",
          type: "error",
        });
      });
  }

  const disableButton = isLoading || email.trim() === "";
  const disableVerifyButton = isVerifying || code.trim() === "";
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
              Step 2 of 4
            </Text>
            <Text
              type={"bold"}
              style={{ fontSize: RFValue(20), color: Colors.gray["700"] }}
            >
              Your email address
            </Text>

            <View style={{ marginTop: RFValue(20) }}>
              <Text type={"medium"}>Email adress *</Text>
              <View style={{ marginTop: RFValue(5) }}>
                <TextInput
                  placeholder={"johndoe@gmail.com"}
                  autoFocus
                  value={email}
                  onChangeText={setEmail}
                  textContentType={"emailAddress"}
                  keyboardType={"email-address"}
                  autoCapitalize={"none"}
                />
              </View>
            </View>
            {isCodeSent && (
              <>
                <View style={{ marginTop: RFValue(30) }}>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: RFValue(5),
                    }}
                  >
                    <Text type={"medium"}>Verify your email address *</Text>
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
                    size={47}
                    space={RFValue(10)}
                    onFulfill={(newCode: string) => {
                      setCode(newCode);
                    }}
                    codeLength={6}
                    containerStyle={{ marginTop: RFValue(5) }}
                    codeInputStyle={{ borderWidth: 1 }}
                  />
                </View>
              </>
            )}
          </View>

          {isCodeSent ? (
            <>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={handleVerifyEmail}
                  iconStyle={{ marginLeft: RFValue(10) }}
                  style={styles.button}
                  title={"Verify"}
                  disabled={disableVerifyButton}
                  loading={isVerifying}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={handleSendVerifyCode}
                  iconStyle={{ marginLeft: RFValue(10) }}
                  style={styles.button}
                  title={"Next"}
                  disabled={disableButton}
                  loading={isLoading}
                />
              </View>
            </>
          )}
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

export { StepTwo };
