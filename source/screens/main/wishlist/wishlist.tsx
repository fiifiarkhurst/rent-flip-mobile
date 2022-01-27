import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";

function WishList() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text type="medium">hello WishList!</Text>
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

export { WishList };
