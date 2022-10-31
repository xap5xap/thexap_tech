import { deepmerge } from "@mui/utils";
import { createTheme, ThemeOptions, Theme, alpha } from "@mui/material/styles";

const systemFont = [
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode: "light" | "dark") => {
  const themeColor = {
    light: "green",
    dark: "pink",
  };
  return themeColor[mode];
};
const orangeMain = "#f59415";
export const lightPalette = {
  text: { primary: "rgba(0, 0, 0, 0.87)" },
};
export const darkPalette = {
  text: { primary: "#fff" },
};

export const getDesignTokens = (mode: "light" | "dark") =>
  ({
    palette: {
      primary: {
        main: orangeMain,
        ...(mode === "dark" && {
          main: orangeMain,
        }),
      },
      // divider: mode === "dark" ? alpha(orange[100], 0.08) : grey[100],
      // primaryDark: orangeDark,
      mode,
      ...(mode === "dark" && {
        background: {
          default: "#202124",
          paper: "#303136",
        },
      }),
      common: {
        black: "#1D1D1D",
      },
      ...(mode === "light" && {
        text: {
          primary: lightPalette.text.primary,
        },
      }),
      ...(mode === "dark" && {
        text: {
          primary: darkPalette.text.primary,
        },
      }),
      // grey,
    },
    shape: {
      borderRadius: 24,
    },
    typography: {
      fontFamily: [...systemFont].join(","),
      fontFamilySystem: systemFont.join(","),
      button: {
        textTransform: "initial",
      },
    },
  } as ThemeOptions);

export function getThemedComponents(theme: Theme) {
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained",
        },
      },
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
      },
    },
  };
}

const darkTheme = createTheme(getDesignTokens("dark"));
export const brandingDarkTheme = deepmerge(
  darkTheme,
  getThemedComponents(darkTheme)
);
