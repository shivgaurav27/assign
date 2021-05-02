import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import typography from "./typography";

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        borderRadius: "20px",
      },
      // Name of the rule
      text: {
        // Some CSS
        color: "white",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          fontFamily: ["QuickSand", "Arial", "sans-serif"].join(","),
        },
        body: {
          // commented as it change the  background color to grey
          // backgroundColor: "#EFF0F8",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#083275",
    },
    secondary: {
      light: "#EFF0F8",
      main: "#0bd4b9",
    },
    error: {
      main: red.A400,
    },
    background: {
      // commented as it change the  background color to grey
      // default: "#EFF0F8",
    },
  },
  typography,
});

export default theme;
