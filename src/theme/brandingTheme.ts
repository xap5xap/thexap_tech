import { deepmerge } from "@mui/utils";
import { createTheme, ThemeOptions, Theme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
  }

  interface Typography {
    fontWeightExtraBold: number;
    fontFamilyCode: string;
  }
}

const defaultTheme = createTheme();

export const orange = {
  50: "#fef4e7",
  100: "#fde9ce",
  200: "#fbd29d",
  300: "#f9bc6c",
  400: "#f7a63b",
  main: "#f59415",
  500: "#f59415",
  600: "#c47308",
  700: "#935606",
  800: "#623904",
  900: "#311d02",
};

export const orangeDark = {
  50: "#fef4e7",
  100: "#fde9ce",
  200: "#fbd29d",
  300: "#f9bc6c",
  400: "#f7a63b",
  main: "#f59415",
  500: "#f59415",
  600: "#935606",
  700: "#623904",
  800: "#311d02",
  900: "#180e01",
};

export const greyDark = {
  50: "#999999",
  100: "#808080",
  200: "#666666",
  300: "#4d4d4d",
  main: "#4d4d4d",
  400: "#404040",
  500: "#333333",
  600: "#262626",
  700: "#232323",
  800: "#1a1a1a",
  900: "#0d0d0d",
};
const grey = {
  50: "#f6f2ee",
  100: "#eee6dd",
  200: "#ddccbb",
  300: "#ccb399",
  400: "#bb9977",
  500: "#aa8055",
  600: "#886644",
  700: "#664d33",
  800: "#443322",
  900: "#221a11",
};

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
    light: grey[50],
    dark: greyDark[700],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode: "light" | "dark") =>
  ({
    palette: {
      primary: {
        ...orange,
        ...(mode === "dark" && {
          main: orange[500],
        }),
      },
      divider: mode === "dark" ? alpha(orange[100], 0.08) : grey[100],
      primaryDark: orangeDark,
      mode,
      ...(mode === "dark" && {
        background: {
          default: greyDark[800],
          paper: orangeDark[900],
        },
      }),
      common: {
        black: "#1D1D1D",
      },
      ...(mode === "light" && {
        text: {
          primary: grey[900],
          secondary: grey[700],
        },
      }),
      ...(mode === "dark" && {
        text: {
          primary: "#fff",
          secondary: grey[400],
        },
      }),
      grey,
      error: {
        50: "#FFF0F1",
        100: "#FFDBDE",
        200: "#FFBDC2",
        300: "#FF99A2",
        400: "#FF7A86",
        500: "#FF505F",
        main: "#EB0014", // contrast 4.63:1
        600: "#EB0014",
        700: "#C70011",
        800: "#94000D",
        900: "#570007",
      },
      success: {
        50: "#E9FBF0",
        100: "#C6F6D9",
        200: "#9AEFBC",
        300: "#6AE79C",
        400: "#3EE07F",
        500: "#21CC66",
        600: "#1DB45A",
        ...(mode === "dark" && {
          main: "#1DB45A", // contrast 6.17:1 (blueDark.800)
        }),
        ...(mode === "light" && {
          main: "#1AA251", // contrast 3.31:1
        }),
        700: "#1AA251",
        800: "#178D46",
        900: "#0F5C2E",
      },
      warning: {
        50: "#FFF9EB",
        100: "#FFF3C1",
        200: "#FFECA1",
        300: "#FFDC48", // vs blueDark900: WCAG 10.4 AAA, APCA 72 Ok for text
        400: "#F4C000", // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
        500: "#DEA500", // vs blueDark900: WCAG 8 AAA normal, APCA 58 Only large text
        main: "#DEA500",
        600: "#D18E00", // vs blueDark900: WCAG 6.4 AA normal, APCA 48 Only large text
        700: "#AB6800", // vs white bg: WCAG 4.4 AA large, APCA 71 Ok for text
        800: "#8C5800", // vs white bg: WCAG 5.9 AAA large, APCA 80 Best for text
        900: "#5A3600", // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
      },
    },
    shape: {
      borderRadius: 16,
    },
    spacing: 10,
    typography: {
      fontFamily: [...systemFont].join(","),
      fontFamilySystem: systemFont.join(","),
      fontWeightExtraBold: 800,
      h1: {
        fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
        fontWeight: 800,
        lineHeight: 78 / 70,
        ...(mode === "light" && {
          color: greyDark[900],
        }),
      },
      h2: {
        fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
        fontWeight: 800,
        lineHeight: 44 / 36,
        color: mode === "dark" ? grey[100] : greyDark[500],
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0.2,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(28),
        lineHeight: 42 / 28,
        letterSpacing: 0.2,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 36 / 24,
        letterSpacing: 0.1,
        color: mode === "dark" ? orange[300] : orange.main,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
      },
      button: {
        textTransform: "initial",
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16), // 16px
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 14px
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: "inline-block",
        fontSize: defaultTheme.typography.pxToRem(12), // 12px
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
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
        styleOverrides: {
          sizeLarge: {
            padding: "0.875rem 1rem",
            ...theme.typography.body1,
            lineHeight: 21 / 16,
            fontWeight: 700,
          },
          sizeSmall: {
            padding: theme.spacing(0.5, 0),
            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(0.5, 1),
            },
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary[500],
            color: "#fff",
          },
        },
        variants: [
          {
            props: { variant: "code" },
            style: {
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[800],
              border: "1px solid",
              borderColor:
                theme.palette.mode === "dark"
                  ? theme.palette.primaryDark[400]
                  : theme.palette.grey[300],
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.primaryDark[700]
                  : theme.palette.grey[50],
              fontFamily: theme.typography.fontFamilyCode,
              fontWeight: 400,
              fontSize: defaultTheme.typography.pxToRem(13), // 14px
              lineHeight: 21 / 14,
              letterSpacing: 0,
              WebkitFontSmoothing: "subpixel-antialiased",
              "&:hover, &.Mui-focusVisible": {
                borderColor: theme.palette.primary.main,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.primaryDark[600]
                    : theme.palette.primary[50],
                "& .MuiButton-endIcon": {
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary[300]
                      : theme.palette.primary.main,
                },
              },
              "& .MuiButton-startIcon": {
                color: theme.palette.grey[400],
              },
              "& .MuiButton-endIcon": {
                display: "inline-block",
                position: "absolute",
                right: 0,
                marginRight: 10,
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[700],
              },
            },
          },
          {
            props: { variant: "link" },
            style: {
              fontSize: theme.typography.pxToRem(14),
              fontWeight: 700,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary[300]
                  : theme.palette.primary[600],
              mb: 1,
              "& svg": {
                ml: -0.5,
              },
            },
          },
        ],
      },
      MuiIconButton: {
        variants: [
          {
            props: { color: "primary" },
            style: {
              height: 34,
              width: 34,
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? theme.palette.primaryDark[700]
                  : theme.palette.grey[200]
              }`,
              borderRadius: theme.shape.borderRadius,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary[300]
                  : theme.palette.primary[500],
              "&:hover": {
                borderColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.primaryDark[600]
                    : theme.palette.grey[300],
                background:
                  theme.palette.mode === "dark"
                    ? alpha(theme.palette.primaryDark[700], 0.4)
                    : theme.palette.grey[50],
              },
            },
          },
        ],
      },

      MuiContainer: {
        styleOverrides: {
          root: {
            [theme.breakpoints.up("md")]: {
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            },
          },
        },
      },

      MuiTab: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: "5px 9px",
          },
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
