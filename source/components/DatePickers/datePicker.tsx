import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "../Text";
import { Colors } from "../../constants/colors";
import { Props } from "./types";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, subDays, subYears } from "date-fns";
import BottomSheet from "../BottomSheet";

const { height } = Dimensions.get("screen");

const DatePicker: FC<Props> = ({ selectedDate, setSelectedDate, label }) => {
  const [show, setShow] = useState<boolean>(false);

  const refRBSheet = useRef<any>(null);
  const openDate = () => {
    setShow(true);
    Platform.OS === "ios" && refRBSheet.current.open();
  };

  const onChange = (_: Event, date?: Date | undefined) => {
    const currentDate = date || selectedDate;
    setShow(Platform.OS === "ios");
    setSelectedDate(currentDate);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={openDate}>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                color: Colors.gray["500"],
                fontSize: RFValue(12),
                paddingLeft: RFValue(8),
              }}
            >
              {format(selectedDate, "PPP")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {Platform.OS === "ios" && (
        <BottomSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={height / 2}
          customStyles={{
            wrapper: {
              // backgroundColor: 'transparent',
            },
          }}
        >
          <>
            <View style={styles.dateHeaderContainer}>
              <TouchableOpacity
                style={styles.doneContainer}
                activeOpacity={0.5}
                onPress={() => {
                  refRBSheet.current.close();
                  setShow(false);
                }}
              >
                <Text type="medium" style={{ color: Colors.red }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePicker
              // timeZoneOffsetInMinutes={0}
              value={selectedDate}
              mode={"date"}
              display="inline"
              onChange={onChange}
              style={{
                margin: RFValue(20),
              }}
              //   maximumDate={subYears(new Date(), 13)}
            />
          </>
        </BottomSheet>
      )}

      {show && Platform.OS === "android" && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={selectedDate}
          mode={"date"}
          is24Hour={true}
          display={"default"}
          themeVariant={"light"}
          textColor={Colors.primary["900"]}
          onChange={onChange}
          maximumDate={subDays(new Date(), 0)}
        />
      )}
    </>
  );
};

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
      },
      android: {
        borderWidth: 1,
        borderColor: Colors.gray["400"],
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(13),
        borderRadius: RFValue(5),
        flexDirection: "row",
        alignItems: "center",
      },
    }),
  },
  dateHeaderContainer: {
    height: RFValue(20),
    borderBottomWidth: 0.5,
    borderColor: Colors.gray["200"],
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  doneContainer: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { DatePicker };
