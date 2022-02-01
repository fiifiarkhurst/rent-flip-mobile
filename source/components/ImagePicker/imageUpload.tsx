import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Text } from "../Text";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/colors";
import { Props } from "./types";
import * as ImagePicker from "expo-image-picker";

function IDImagePicker({
  setFile,
  reset,
  askToUpload,
  uploading,
  uploaded,
}: Props) {
  const [path, setPath] = React.useState<string | null>(null);

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
    reset();
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
            width: "60%",
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

        {path && (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {!uploading && (
                <>
                  <TouchableOpacity
                    onPress={askToRemove}
                    style={styles.removeImageContainer}
                  >
                    <Text
                      type="medium"
                      style={{
                        fontSize: RFValue(10),
                        color: Colors.red,
                      }}
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </>
              )}

              {!uploaded && (
                <>
                  <TouchableOpacity
                    onPress={uploading ? undefined : askToUpload}
                    style={styles.uploadImageContainer}
                  >
                    {uploading ? (
                      <>
                        <ActivityIndicator size={2} />
                      </>
                    ) : (
                      <>
                        <Text
                          type="medium"
                          style={{
                            fontSize: RFValue(10),
                            color: Colors.gray["700"],
                          }}
                        >
                          Upload
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>
                </>
              )}
            </View>
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
    backgroundColor: Colors.gray["200"],
    height: RFValue(21),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    borderRadius: RFValue(60),
    marginLeft: RFValue(4),
  },
  removeImageContainer: {
    backgroundColor: "#fee2e2",
    height: RFValue(21),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    borderRadius: RFValue(60),
  },
  imageActionView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  width35: { width: "35%" },
});

export { IDImagePicker };
