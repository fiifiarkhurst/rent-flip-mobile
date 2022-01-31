import { Property } from "../types";

export interface PlaceCardComponentProp {
  property: Property;
  onPropertyPressed: () => void;
}
