import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constants/colors";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LoginFormInputProp, Props } from "./types";
import { TextInput } from "../../../components/TextInput";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";

function Login({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputProp>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<LoginFormInputProp> =
    React.useCallback(() => {}, []);

  const handleGoToSignup = React.useCallback(() => {
    navigation.navigate("signup");
  }, []);

  return (
    <React.Fragment>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.labelText} type={"medium"}>
              Email address *
            </Text>
            <Controller
              control={control}
              name="email"
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  autoCapitalize={"none"}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={"Enter email address"}
                  error={errors.email ? true : false}
                />
              )}
            />
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.labelText} type={"medium"}>
              Password *
            </Text>
            <Controller
              control={control}
              name="password"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  placeholder={"Enter your password"}
                  error={errors.password ? true : false}
                />
              )}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: RFValue(8) }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={handleGoToSignup}>
            <Text
              style={{ color: Colors.primary["600"], paddingLeft: RFValue(5) }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSubmit(handleLogin)}
            iconStyle={{ marginLeft: RFValue(10) }}
            style={styles.button}
            title={"Login"}
            disabled={false}
            loading={false}
          />
        </View>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: RFValue(15),
  },
  labelText: {
    paddingBottom: RFValue(6),
  },
  textInputContainer: {
    marginVertical: RFValue(20),
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

export default Login;
