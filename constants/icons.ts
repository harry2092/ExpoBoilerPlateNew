import { RFValue } from "react-native-responsive-fontsize";
import alphabetic from "@/assets/icons/alphabetic.svg";

const iconStyle = ({
  width = 0,
  height = 0,
  color = "black",
  borderColor = "none",
}) => ({
  width: RFValue(width),
  height: RFValue(height),
  fill: color,
  stroke: borderColor,
});
export type iconProps = {
  width: number;
  height: number;
  color?: string;
  borderColor?: string;
};

export const ICONS = {
  Alphabetic: (params: iconProps) =>
    alphabetic({ ...iconStyle({ ...params }) }),
};
