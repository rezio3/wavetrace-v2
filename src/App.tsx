import "./App.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import VideoBG from "./layouts/VideoBG";
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MusicPage from "./pages/musicPage/MusicPage";
import OrdersPage from "./pages/ordersPage/OrdersPage";
import CollaborationPage from "./pages/collaborationPage/CollaborationPage";

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
        <Router>
          <VideoBG />
          <div className="app-container">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/collaboration" element={<CollaborationPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
