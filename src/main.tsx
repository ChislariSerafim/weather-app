import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "~/components";
import "~/styles/index.css";

const textCollor = "#FFFFFF";

const theme = createTheme({
  typography: {
    fontFamily: "Comfortaa",
    h3: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "50px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        root: {
          width: "100%",
          borderRadius: "50px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(255, 255, 255, 0.23)",
          color: textCollor,
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "0.15px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          display: "flex",
          height: "48px",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          alignSelf: "stretch",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.23)",
          background: "rgba(255, 255, 255, 0.00)",
          width: "100%",
        },
      },
    },
  },
  palette: {
    primary: { main: textCollor },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
