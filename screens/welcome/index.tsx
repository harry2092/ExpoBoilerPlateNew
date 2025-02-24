import React from "react";
import { Image, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import useColorStyles from "@/hooks/useColorStyles";
import styles from "./styles";
import { ICONS } from "@/constants/icons";
import { images } from "@/constants/images";

/**
 * Welcome Component
 * This component displays a localized welcome message with styled UI.
 */
export default function Welcome() {
  // Apply dynamic styles using custom hook
  const style = useColorStyles(styles);

  // Localization hook for translations
  const { t } = useTranslation();

  return (
    <View style={style.mainView}>
      {/* Localized welcome message */}
      <Text style={style.text}>{t("appKeys.Home")}</Text>

      {ICONS.Alphabetic({ height: 20, width: 20 })}

      <Image source={images.logo} style={{height:100,width:100}} />
    </View>
  );
}
