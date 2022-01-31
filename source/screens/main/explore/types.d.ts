import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/types";
import { RequestStackProps } from "../../request/types";

type Props = StackScreenProps<any, "explore">;

export interface Property {
  location: Location;
  meta: Meta;
  _id: string;
  code: string;
  name: string;
  type: string;
  description: string;
  price: number;
  gpsAddress: string;
  address: string;
  featuredBigImage: string;
  featuredSmallImage: string;
  otherImages: string[];
  checkInTime: Date;
  checkOutTime: Date;
  createdAt: Date;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Meta {
  numberOfBedrooms: number;
  numberOfKitchens: number;
  numberOfBathrooms: number;
  parkingPremiseAvailable?: boolean;
}

export interface GetPropertiesOutpuProp {
  success: boolean;
  payload: Property[];
}
