import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";

function AddProperty() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text type="bold" style={styles.headerText}>
            Add Property
          </Text>
          {/* add property text container */}
          <View style={styles.addPropertyTextContainer}>
            <Text style={styles.addPropertyTextHeader} type="medium">
              Adding any of your properties
            </Text>
            <Text type="light" style={styles.addPropertyTextDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              nihil magni magnam ?
            </Text>
          </View>
          {/* button */}
          <View style={styles.buttonContainer}>
            <Button title="Add Property" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subContainer: {
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(35),
  },
  headerText: {
    fontSize: RFValue(20),
    color: Colors.gray["800"],
  },
  addPropertyTextContainer: {
    paddingVertical: RFValue(35),
  },
  addPropertyTextHeader: {
    fontSize: RFValue(15),
    color: Colors.gray["800"],
  },
  addPropertyTextDescription: {
    fontSize: RFValue(12),
    color: Colors.gray["800"],
    paddingTop: RFValue(2),
  },
  buttonContainer: {
    width: "50%",
  },
});

export { AddProperty };
