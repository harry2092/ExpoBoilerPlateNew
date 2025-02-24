import { ImageSourcePropType } from "react-native";
import { Asset } from "expo-asset";

export const images: { [key: string]: ImageSourcePropType } = {
  logo: require("@/assets/images/icon.png"),
};

// preload images
const preloadImages = () =>
  Object.keys(images).map(key => {
    return Asset.fromModule(images[key] as number).downloadAsync();
  });

export const loadImages = async () => Promise.all(preloadImages());
