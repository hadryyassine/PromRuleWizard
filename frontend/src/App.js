import "./App.css";
import * as React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { ConfigGeneratorPage } from "./components/ConfigGeneratorPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ConfigGeneratorPage />
    </ThemeProvider>
  );
}

export default App;
