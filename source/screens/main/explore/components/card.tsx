import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "../../../../components/Text";
import { Colors } from "../../../../constants/colors";
import { Feather, Entypo } from "@expo/vector-icons";
import { PlaceCardComponentProp } from "./types";

function PropertiesCard({
  featuredImage,
  location,
  rooms,
  price,
}: PlaceCardComponentProp) {
  return (
    <React.Fragment>
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <Image
          source={{
            uri: featuredImage,
          }}
          style={styles.featuredImage}
          resizeMode="cover"
        />
        <View style={styles.locationContainer}>
          <Text type="medium">{location}</Text>
          <Feather
            name="heart"
            color={Colors.primary["600"]}
            size={RFValue(17)}
          />
        </View>
        <View style={styles.priceContainer}>
          {/* rooms */}
          <View style={styles.roomContainer}>
            <Entypo
              color={Colors.primary["600"]}
              name="grid"
              size={RFValue(13)}
            />
            <Text
              type="regular"
              style={[
                styles.smallText,
                {
                  paddingLeft: RFValue(4),
                },
              ]}
            >
              {rooms} rooms
            </Text>
          </View>

          {/* price */}
          <Text type="regular" style={styles.smallText}>
            GH₵ {price} / night
          </Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginBottom: RFValue(35),
  },
  featuredImage: {
    width: "100%",
    height: RFValue(140),
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: RFValue(6),
  },
  locationText: {
    fontSize: RFValue(14),
    color: Colors.primary["800"],
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  roomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: RFValue(10),
    color: Colors.gray["500"],
  },
});

export { PropertiesCard };
