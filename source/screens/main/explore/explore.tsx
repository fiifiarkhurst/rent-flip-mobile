import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";

function Explore() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text type="medium">hello explore!</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export { Explore };
