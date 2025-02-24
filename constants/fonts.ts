import { loadAsync } from "expo-font";

export const FONTS = {
  regular: "SpaceMono-Regular",
};

// preload fonts
export const loadFonts = () =>
  loadAsync({
    spaceMono_regular: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });
