import { NavigatorScreenParams } from "@react-navigation/native";
import { MainTabProps } from "../screens/main/types";

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabProps>;
};
