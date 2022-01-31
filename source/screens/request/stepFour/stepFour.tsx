import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";
import { Button } from "../../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RequestStackProps } from "../types";
import { DatePicker } from "../../../components/DatePickers";
import { IDImagePicker } from "../../../components/ImagePicker";

type Props = StackScreenProps<RequestStackProps, "stepFour">;

function StepFour({ navigation, route }: Props) {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date>(
    new Date()
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date>(
    new Date()
  );

  const [file, setFile] = React.useState<any>(null);
  // const { upload, loading } = useImageUpload("rent-flip-IDs");

  function handleSubmit() {
    navigation.push("success");
  }
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
                <IDImagePicker setFile={setFile} />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit}
              iconStyle={{ marginLeft: RFValue(10) }}
              style={styles.button}
              title={"Apply"}
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
