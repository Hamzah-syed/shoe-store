import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C70039",
    },
    secondary: {
      main: "#900C3E",
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 300,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
