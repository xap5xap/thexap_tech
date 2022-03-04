import {
  createContext,
  FC,
  useContext,
  useMemo,
  useReducer,
  Dispatch,
} from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
import { getDesignTokens, getThemedComponents } from "../theme/brandingTheme";
import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material/styles";
import { DispatchThemeAction, DispatchThemeState } from "../thexapTypes";

const ThemeDispatchContext = createContext<
  Dispatch<DispatchThemeAction> | undefined
>(undefined);

const ThemeProvider: FC = ({ children }) => {
  const prefersDarkMode = true;
  //   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferredMode = prefersDarkMode ? "dark" : "light";

  const [themeOptions, dispatch] = useReducer(
    (state: DispatchThemeState, action: DispatchThemeAction) => {
      switch (action.type) {
        case "SET_MODE":
          return {
            ...state,
            paletteMode: action.payload.paletteMode,
          };
        default:
          throw new Error(`Unrecognized type ${action.type}`);
      }
    },
    { paletteMode: preferredMode }
  );

  const { paletteMode } = themeOptions;

  const theme = useMemo(() => {
    const brandingDesignTokens = getDesignTokens(paletteMode);
    let nextTheme = createTheme({
      ...brandingDesignTokens,
      palette: {
        ...brandingDesignTokens.palette,
        mode: paletteMode,
      },
    });

    nextTheme = deepmerge(nextTheme, getThemedComponents(nextTheme));
    return nextTheme;
  }, [paletteMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </MuiThemeProvider>
  );
};

function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error("ThemeDispatchContext must be used within a ThemeProvides");
  }

  return context;
}

export { ThemeProvider, useThemeDispatch };
