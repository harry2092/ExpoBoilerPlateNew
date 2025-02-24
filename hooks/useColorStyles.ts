import { useMemo } from "react";
import { useTheme } from "@/theme/themeContext";

// Custom hook to provide styles with memoization to avoid unnecessary recalculations
const useColorStyles = (stylesFunction: Function) => {
  const theme = useTheme();

  // Use useMemo to cache the computed styles based on the current theme dependencies
  const styles = useMemo(() => {
    // Generate styles only when dependencies change
    return stylesFunction(theme);
  }, [theme]);

  return styles;
};

export default useColorStyles;
