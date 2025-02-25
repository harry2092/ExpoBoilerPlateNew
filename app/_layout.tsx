import * as SplashScreen from "expo-splash-screen";
import { Fragment, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Import assets and themes
import { loadImages } from "@/constants/images";
import { loadFonts } from "@/constants/fonts";
import "@/localization/index"; // Load localization
import { ThemeProvider } from "@/theme/themeContext";
import { store } from "@/redux/store";

// Keep the splash screen visible while loading resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    /**
     * Load assets (images and fonts) and then hide the splash screen.
     */
    async function prepareApp() {
      await loadAssets();
      setTimeout(() => {

        SplashScreen.hideAsync(); // Hide splash screen after loading

      }, 3000);
    }

    prepareApp();
  }, []);

  useEffect(() => {
    router.replace("/Welcome")
  }, [router])

  /**
   * Function to load all required assets (images and fonts).
   */
  async function loadAssets() {
    await Promise.all([loadImages(), loadFonts()]);
  }

  return (
    <Provider store={store}>
      <Fragment>
        {/* Status Bar */}
        <StatusBar style="dark" />

        {/* Safe Area Context */}
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            {/* Theme Provider */}
            <ThemeProvider>
              {/* Navigation Stack */}
              <Stack

                screenOptions={{
                  headerShown: false,
                }}
              />
            </ThemeProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </Fragment>
    </Provider>
  );
}
