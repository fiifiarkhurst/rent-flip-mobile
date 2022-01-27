import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
// import { SearchInput } from "../../../components/Search";
import { Text } from "../../../components/Text";
import { Colors } from "../../../constants/colors";
import { Location, PropertiesCard } from "./components";

const data = [
  {
    featuredImage:
      "https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    location: "East Legon, Ghana Link",
    price: "400.00",
    rooms: "3",
  },
  {
    featuredImage:
      "https://images.unsplash.com/photo-1559338391-e14b84a22772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    location: "Ages Abba, Apartment",
    price: "800.00",
    rooms: "4",
  },
  {
    featuredImage:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    location: "Mempasem",
    price: "60.00",
    rooms: "2",
  },
  {
    featuredImage:
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    location: "Adenta",
    price: "600.00",
    rooms: "10",
  },
];

function Explore() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          {/* header */}
          <View style={styles.headerContainer}>
            {/* filter */}
            <TouchableOpacity activeOpacity={0.9}>
              <MaterialIcons
                name="filter-list"
                color={Colors.primary["600"]}
                size={RFValue(24)}
              />
            </TouchableOpacity>
            {/* location */}
            <Location />
            {/* image */}
            <Image
              resizeMode="contain"
              style={styles.profileImage}
              source={require("../../../assets/images/profile.jpeg")}
            />
          </View>
          {/* search */}
          <View style={styles.searchContainer}>
            {/* <SearchInput placeholder="Where are you going to?" /> */}
          </View>
          {/* body */}

          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.location}
            renderItem={({ item }) => (
              <>
                <PropertiesCard {...item} />
              </>
            )}
          />
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
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    height: RFValue(30),
    width: RFValue(30),
    borderRadius: RFValue(20),
  },
  searchContainer: {
    marginVertical: RFValue(13),
  },
});

export { Explore };
