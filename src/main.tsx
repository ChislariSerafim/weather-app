import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "~/components";
import "~/styles/index.css";

const textCollor = "#FFFFFF";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: "32px",
      fontFamily: "Comfortaa",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          display: "flex",
          height: "48px",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Comfortaa",
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
