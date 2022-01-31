import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useQuery } from "react-query";
import { EmptyState, ErrorState } from "../../../components/Alert";
// import { SearchInput } from "../../../components/Search";
import { Colors } from "../../../constants/colors";
import { GET_PROPERITES } from "../../../constants/constants";
import { get } from "../../../services/transport";
import { Location, PropertiesCard } from "./components";
import { GetPropertiesOutpuProp, Props } from "./types";

function Explore({ navigation }: Props) {
  // const navigation: any = useNavigation();
  const { data, isLoading, refetch } = useQuery<
    any,
    any,
    AxiosResponse<GetPropertiesOutpuProp>
  >("properties", () => get(GET_PROPERITES));

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation, refetch]);

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

          {isLoading ? (
            <>
              <View style={styles.alertContainer}>
                <ActivityIndicator />
              </View>
            </>
          ) : (
            <>
              {data?.data?.success ? (
                <>
                  {data?.data?.payload?.length === 0 ? (
                    <>
                      <EmptyState model="properties" />
                    </>
                  ) : (
                    <>
                      <FlatList
                        data={data?.data?.payload}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                          <>
                            <PropertiesCard
                              property={item}
                              onPropertyPressed={() => {
                                navigation.navigate("Request", {
                                  screen: "stepOne",
                                  params: {
                                    propertyId: item._id,
                                  },
                                });
                              }}
                            />
                          </>
                        )}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <ErrorState model="properties" refetch={refetch} />
                </>
              )}
            </>
          )}
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
  alertContainer: { flex: 1, marginTop: RFValue(50), alignItems: "center" },

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
