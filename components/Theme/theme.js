import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#069c54",
      contrastText: "#fff",
    },
    secondary: {
      main: "#393939",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiTypography: {
      subtitle1: {
        fontWeight: 500,
      },
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
