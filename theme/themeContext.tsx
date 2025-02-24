// ThemeContext.js
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "react-native";

import { STORAGE_KEYS, THEME } from "@/utils/enum";

import { DarkTheme, LightTheme, ThemeColors } from "./theme";

export type ThemeProps = {
  colors: ThemeColors;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Context initial Value
const initialValue = {
  colors: {} as ThemeColors,
  isDarkMode: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeProps>(initialValue);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const systemTheme = useColorScheme() as string;

  // state management
  const [theme, setTheme] = useState(systemTheme);
  const [colors, setColors] = useState(
    systemTheme == THEME.LIGHT ? LightTheme : DarkTheme,
  );

  // effect to setup theme on opening the app
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) {
        setTheme(savedTheme);
        setColors(savedTheme == THEME.LIGHT ? LightTheme : DarkTheme);
      }
    };
    loadTheme();
  }, []);

  // function to toggle the theme
  const toggleTheme = useCallback(async () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setColors(newTheme == THEME.LIGHT ? LightTheme : DarkTheme);
    setTheme(newTheme);
    await AsyncStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  }, [theme]);

  // Context values for theme
  const contextValue = useMemo(
    () => ({ colors: colors, isDarkMode: theme == THEME.DARK, toggleTheme }),
    [colors, theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
