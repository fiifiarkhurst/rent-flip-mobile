import * as React from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";
import { Button } from "../../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RequestStackProps } from "../types";
import { DatePicker } from "../../../components/DatePickers";
import { IDImagePicker } from "../../../components/ImagePicker";
import { useImageUpload } from "../../../components/Hooks";
import { getBlob, getFileExtension, useApplyForProperty } from "./broker";
import { useNetInfo } from "@react-native-community/netinfo";
import { AxiosResponse } from "axios";
import { ApplyOutputProp } from "./types";
import Toast from "react-native-toast-message";

type Props = StackScreenProps<RequestStackProps, "stepFour">;

function StepFour({ navigation, route }: Props) {
  const { isInternetReachable } = useNetInfo();

  const [selectedStartDate, setSelectedStartDate] = React.useState<Date>(
    new Date()
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date>(
    new Date()
  );
  const [file, setFile] = React.useState<any>(null);
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const { upload, loading } = useImageUpload("rent-flip-IDs");

  const { mutateAsync, isLoading } = useApplyForProperty();

  const input = { ...route?.params };

  function handleSubmit() {
    //check if internet is avail
    if (!isInternetReachable) {
      return Toast.show({
        text1: "Application Error",
        text2: "Internet is not reachable",
        type: "error",
      });
    }

    mutateAsync({
      ...input,
      idType: "NationalID",
      idPhoto: imageUrl,
      startDate: new Date(selectedStartDate),
      endDate: new Date(selectedEndDate),
      paySlips: [
        "https://lenvica.b-cdn.net/wp-content/uploads/2018/06/Payslip-YTD.png",
        "https://www.docspile.com/wp-content/uploads/2019/01/Payslip-111-1.jpg",
      ],
    })
      .then((res: AxiosResponse<ApplyOutputProp>) => {
        if (res.data.success) {
          navigation.push("success");
        }
      })
      .catch((e) => {
        Toast.show({
          text1: "Oops, something happened",
          text2: "Could not submit",
          type: "error",
        });
      });
  }

  const uploadImage = async () => {
    // upload
    const getExtension = getFileExtension(file?.type);
    let blob = await getBlob(file?.uri);
    const imageString = await upload(blob, getExtension);

    setImageUrl(imageString);
  };

  const askToUpload = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to upload this ID?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes!",
          onPress: uploadImage,
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
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
              Step 4 of 4
            </Text>
            <Text
              type={"bold"}
              style={{ fontSize: RFValue(20), color: Colors.gray["700"] }}
            >
              Thank you for your time. One last thing.
            </Text>

            <View style={{ marginTop: RFValue(20) }}>
              <Text type={"medium"}>Start Date *</Text>
              <View style={{ marginTop: RFValue(10) }}>
                <DatePicker
                  selectedDate={selectedStartDate}
                  setSelectedDate={setSelectedStartDate}
                  label="Start Date"
                />
              </View>
            </View>
            <View style={{ marginTop: RFValue(15) }}>
              <Text type={"medium"}>End Date *</Text>
              <View style={{ marginTop: RFValue(15) }}>
                <DatePicker
                  selectedDate={selectedEndDate}
                  setSelectedDate={setSelectedEndDate}
                  label="Start Date"
                />
              </View>
            </View>
            <View style={{ marginTop: RFValue(15) }}>
              <Text type={"medium"}>Upload your ID *</Text>
              <View style={{ marginTop: RFValue(15) }}>
                <IDImagePicker
                  uploading={loading}
                  setFile={setFile}
                  askToUpload={askToUpload}
                  uploaded={imageUrl !== ""}
                  reset={() => {
                    setImageUrl("");
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit}
              iconStyle={{ marginLeft: RFValue(10) }}
              style={styles.button}
              title={"Apply"}
              loading={isLoading}
              disabled={isLoading}
            />
          </View>
        </View>
      </ScrollView>
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

export { StepFour };
