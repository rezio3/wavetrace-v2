import "./App.scss";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import VideoBG from "./layouts/VideoBG";
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import {
  HashRouter,
  Route,
  // BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MusicPage from "./pages/musicPage/MusicPage";
import OrdersPage from "./pages/ordersPage/OrdersPage";
import CollaborationPage from "./pages/collaborationPage/CollaborationPage";
import PrivacyPolicyPage from "./pages/privacyPolicy/PrivacyPolicyPage";
import ScrollToTop from "./assets/ScrollToTop";
import TermsOfServicePage from "./pages/termsOfService/TermsOfServicePage";
import SupportPage from "./pages/supportPage/SupportPage";
import { urlRouter } from "./routes/urlRouter";

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
        {/* <Router basename="/"> */}
        {/* ^^^^^^^^^ Keep it for production ^^^^^^^^^^^ */}
        <HashRouter>
          <ScrollToTop />
          <VideoBG />
          <div className="app-container">
            <NavBar />
            <Routes>
              <Route path={urlRouter.homePage} element={<HomePage />} />
              <Route path={urlRouter.musicPage} element={<MusicPage />} />
              <Route path={urlRouter.ordersPage} element={<OrdersPage />} />
              <Route
                path={urlRouter.collaborationPage}
                element={<CollaborationPage />}
              />
              <Route
                path={urlRouter.privacyPolicy}
                element={<PrivacyPolicyPage />}
              />
              <Route
                path={urlRouter.termsOfService}
                element={<TermsOfServicePage />}
              />
              <Route path={urlRouter.support} element={<SupportPage />} />
            </Routes>
            <Footer />
          </div>
        </HashRouter>
        {/* </Router> */}
      </ThemeProvider>
    </>
  );
}

export default App;
