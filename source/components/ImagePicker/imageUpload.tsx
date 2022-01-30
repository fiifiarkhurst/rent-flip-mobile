import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text } from "../Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import { Props } from "./types";

function IDImagePicker({
  setFile,
  reset,
  askToUpload,
  uploading,
  uploaded,
}: Props) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFile(result?.uri);
    }
  };

  const removeImage = () => {
    setFile(null);
    // reset();
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
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: "65%",
          }}
          activeOpacity={0.8}
          onPress={pickImage}
        >
          <Text
            style={{
              color: Colors.gray["500"],
              fontSize: RFValue(12),
              paddingLeft: RFValue(8),
            }}
          >
            Choose image
          </Text>
        </TouchableOpacity>

        {/* {!uploading && (
          <>
            <TouchableOpacity
              onPress={askToRemove}
              style={styles.removeImageContainer}
            >
              <Text
                type="medium"
                style={{ fontSize: RFValue(10), color: Colors.white }}
              >
                Remove
              </Text>
            </TouchableOpacity>
          </>
        )} */}

        {!uploaded && (
          <>
            <TouchableOpacity
              onPress={uploading ? undefined : askToUpload}
              style={styles.uploadImageContainer}
            >
              <Text
                type="medium"
                style={{ fontSize: RFValue(10), color: Colors.white }}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: Colors.gray["400"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(13),
        borderRadius: RFValue(5),
        flexDirection: "row",
        justifyContent: "space-between",
      },
      android: {
        borderWidth: 1,
        borderColor: Colors.gray["400"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(13),
        borderRadius: RFValue(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    }),
  },
  uploadImageContainer: {
    backgroundColor: Colors.black,
    height: RFValue(21),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
    borderRadius: RFValue(60),
  },
  removeImageContainer: {
    backgroundColor: Colors.red,
    height: RFValue(21),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
    borderRadius: RFValue(60),
  },
});

export { IDImagePicker };
