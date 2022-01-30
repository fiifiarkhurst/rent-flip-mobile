import React, { FC, useEffect, useRef } from "react";
import { Platform, StyleSheet, View, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ConfettiCanon } from "../../../components/Confetti";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "../../../components/Button";
import { RequestStackProps } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";

type StepTwoScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RequestStackProps, "success">,
  StackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: StepTwoScreenNavigationProp;
};

const Success: FC<Props> = ({ navigation }) => {
  const confettiRef = useRef<any>(null);

  useEffect(() => {
    if (confettiRef) {
      confettiRef?.current?.startConfetti();
    }
  }, []);

  const handleSubmit = () => {
    navigation.navigate("Main" as any);
  };

  return (
    <>
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={{ marginBottom: RFValue(10) }}>
            <View style={styles.logoContainer}>
              <FontAwesome5
                name={"house-damage"}
                size={RFValue(90)}
                color={Colors.primary["600"]}
              />
            </View>
            <Text type={"bold"} style={styles.title}>
              Awesome!
            </Text>
            <Text
              type={"bold"}
              style={[styles.title, { color: Colors.primary["600"] }]}
            >
              You have successfully sent your application
            </Text>
            <Text type={"regular"} style={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              blanditiis error
            </Text>
          </View>

          <View>
            <View style={styles.regiterContainer}>
              <Button onPress={handleSubmit} title={"Explore"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ConfettiCanon ref={confettiRef} />
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: Colors.white },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: RFValue(30),
  },
  title: {
    ...Platform.select({
      ios: {
        fontSize: RFValue(23),
      },
      android: {
        fontSize: RFValue(25),
        lineHeight: RFValue(30),
      },
    }),
  },
  description: {
    fontSize: RFValue(12),
    color: Colors.gray["600"],
    marginTop: RFValue(10),
  },
  regiterContainer: {
    marginTop: RFValue(40),
    marginBottom: RFValue(100),
  },
  pinviewContainer: {},
  logoContainer: {
    // borderWidth: 1,
    // borderColor: Colors.primary['100'],
    padding: RFValue(5),
    justifyContent: "center",
    marginBottom: RFValue(10),
  },
});
export { Success };
