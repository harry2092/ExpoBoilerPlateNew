import { StyleSheet } from "react-native";
import { FONTS } from "@/constants/fonts";
import { ThemeProps } from "@/theme/themeContext";

const styles = ({ colors }: ThemeProps) =>
  StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: colors.background,
    },
    text: {
      fontFamily: FONTS.regular,
      fontSize: 20,
    },
  });

export default styles;
