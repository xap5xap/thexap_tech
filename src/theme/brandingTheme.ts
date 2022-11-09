import { createTheme, ThemeOptions } from "@mui/material/styles";

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
  '"Segoe UI Symbol"'
];
const defaultTheme = createTheme();
export const getMetaThemeColor = (mode: "light" | "dark") => {
  const themeColor = {
    light: "green",
    dark: "pink"
  };
  return themeColor[mode];
};
const orangeMain = "#f59415";
export const lightPalette = {
  text: { primary: "rgba(0, 0, 0, 0.87)" }
};
export const darkPalette = {
  text: { primary: "#fff" }
};

export const getDesignTokens = (mode: "light" | "dark") =>
  ({
    palette: {
      primary: {
        main: orangeMain,
        ...(mode === "dark" && {
          main: orangeMain
        })
      },
      // divider: mode === "dark" ? alpha(orange[100], 0.08) : grey[100],
      // primaryDark: orangeDark,
      mode,
      ...(mode === "dark" && {
        background: {
          default: "#202124",
          paper: "#303136"
        }
      }),
      common: {
        black: "#1D1D1D"
      },
      ...(mode === "light" && {
        text: {
          primary: lightPalette.text.primary
        }
      }),
      ...(mode === "dark" && {
        text: {
          primary: darkPalette.text.primary
        }
      })
      // grey,
    },
    shape: {
      borderRadius: 24
    },

    typography: {
      fontFamily: [...systemFont].join(","),
      fontFamilySystem: systemFont.join(","),
      h1: {
        fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 5rem)",
        fontWeight: 800,
        lineHeight: 78 / 70
      },
      h2: {
        fontSize: "clamp(3rem, 2.75rem + 1.3333vw, 3.75rem);",
        fontWeight: 800,
        lineHeight: 44 / 36
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(48),
        lineHeight: 1.167,
        letterSpacing: 0.2
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(40),
        lineHeight: 1.3,
        letterSpacing: 0.2
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(34),
        lineHeight: 1.3,
        letterSpacing: 0.1
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(26),
        lineHeight: 30 / 20,
        fontWeight: 400
      },
      button: {
        textTransform: "initial",
        fontWeight: 700,
        letterSpacing: 0
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(17), // 16px
        lineHeight: 24 / 16,
        letterSpacing: 0
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 14px
        lineHeight: 21 / 14,
        letterSpacing: 0
      },
      caption: {
        display: "inline-block",
        fontSize: defaultTheme.typography.pxToRem(12), // 12px
        lineHeight: 18 / 12,
        letterSpacing: 0
      }
    }
  } as ThemeOptions);

export function getThemedComponents() {
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained"
        }
      },
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true
        }
      }
    }
  };
}
