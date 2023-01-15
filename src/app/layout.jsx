"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ColorModeContext, useMode } from "../theme/theme";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";

export default function RootLayout({ children }) {
  const [theme, colorMode] = useMode();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
