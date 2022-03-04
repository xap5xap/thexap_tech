export type DispatchThemeState = {
  paletteMode: "light" | "dark";
};

export type ThemeSetModeAction = {
  type: "SET_MODE";
  payload: { paletteMode: "light" | "dark" };
};

export type DispatchThemeAction = ThemeSetModeAction;
