import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

function OpenCamera() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImage(data.uri);
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            style={{
              flex: 1,
              height: RFValue(200),
              width: RFValue(200),
              borderRadius: RFValue(100),
            }}
          />
        </>
      ) : (
        <>
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.camera}
              type={type}
              ratio={"1:1"}
            />
            <TouchableOpacity>
              <View style={styles.pickImageContainer}>
                <Ionicons
                  name={"ios-camera"}
                  color={Colors.white}
                  size={RFValue(18)}
                />
              </View>
            </TouchableOpacity>
            {/* <Button title="Take Picture" onPress={() => takePicture()} /> */}
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    marginVertical: RFValue(20),
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  cameraContainer: {
    flex: 1,
    height: RFValue(200),
    width: RFValue(200),
    borderRadius: RFValue(100),
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  pickImageContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    backgroundColor: Colors.gray["700"],
    padding: 6,
    borderRadius: 30,
  },
});

export { OpenCamera };
