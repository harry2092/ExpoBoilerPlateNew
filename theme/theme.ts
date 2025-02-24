const LightTheme = {
  background: "white",
};

const DarkTheme = {
  background: "black",
};
export { LightTheme, DarkTheme };

export type LightColorType = typeof LightTheme;
export type DarkColorType = typeof DarkTheme;
export type ThemeColors = LightColorType | DarkColorType;
