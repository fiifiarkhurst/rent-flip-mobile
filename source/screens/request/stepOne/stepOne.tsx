import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import { Text } from "../../../components/Text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constants/colors";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RequestStackProps } from "../types";
import { useNetInfo } from "@react-native-community/netinfo";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getBlob, getFileExtension } from "../stepFour/broker";
import { useImageUpload } from "../../../components/Hooks";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";

type Props = StackScreenProps<RequestStackProps, "stepOne">;

function StepOne({ navigation, route }: Props) {
  const [name, setName] = React.useState("");
  const [file, setFile] = React.useState<any>();
  const [path, setPath] = React.useState<string | null>(null);
  const { isInternetReachable } = useNetInfo();
  const { upload, loading } = useImageUpload("rent-flip-profile");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPath(result.uri);
      setFile(result);
    }
  };

  const removeImage = () => {
    setFile(null);
    setPath(null);
  };

  const askToRemove = () => {
    Alert.alert(
      "Remove",
      "Are you sure you want to remove this image?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes!",
          onPress: removeImage,
        },
      ],
      { cancelable: false }
    );
  };

  async function handleSubmit() {
    //check if internet is avail
    if (!isInternetReachable) {
      return Toast.show({
        text1: "Application Error",
        text2: "Internet is not reachable",
        type: "error",
      });
    }

    if (!file) {
      return Toast.show({
        text1: "Application Error",
        text2: "Please add an image",
        type: "error",
      });
    }

    const getExtension = getFileExtension(file?.type);
    let blob = await getBlob(file?.uri);
    const imageString = await upload(blob, getExtension);
    navigation.push("stepTwo", {
      name: name.trim(),
      property: route.params.property,
      photo: imageString,
    });
  }

  const disableButton = loading || name.trim() === "" || !file;

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

            <View
              style={{
                marginVertical: RFValue(20),
                position: "relative",
              }}
            >
              {path ? (
                <>
                  <Image
                    style={styles.imagePlaceHolder}
                    source={{
                      uri: path,
                    }}
                  />
                  <TouchableOpacity activeOpacity={0.9} onPress={askToRemove}>
                    <View style={styles.pickImageContainer}>
                      <MaterialCommunityIcons
                        name={"pencil-remove-outline"}
                        color={Colors.white}
                        size={RFValue(18)}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Image
                    style={styles.imagePlaceHolder}
                    source={require("../../../assets/images/male.jpeg")}
                  />
                  <TouchableOpacity activeOpacity={0.9} onPress={pickImage}>
                    <View style={styles.pickImageContainer}>
                      <Ionicons
                        name={"ios-camera"}
                        color={Colors.white}
                        size={RFValue(18)}
                      />
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View>
              <Text type={"medium"}>Full Name *</Text>
              <View style={{ marginTop: RFValue(5) }}>
                <TextInput
                  placeholder={"John Doe"}
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
              loading={loading}
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
  imagePlaceHolder: {
    height: RFValue(100),
    width: RFValue(100),
    borderRadius: RFValue(50),
  },
  pickImageContainer: {
    position: "absolute",
    top: -33,
    left: 90,
    backgroundColor: Colors.gray["700"],
    padding: 6,
    borderRadius: 30,
  },
});

export { StepOne };
