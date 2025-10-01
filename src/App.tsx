import "./App.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import VideoBG from "./layouts/VideoBG";
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <VideoBG />
        <div className="app-container">
          <NavBar />
          <HomePage />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
