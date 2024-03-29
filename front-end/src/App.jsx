import Navbar from "./Components/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Them";
import Fotter from "./Components/Fotter/Fotter";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import Profile from "./Pages/Profile";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <Navbar />
         <Routes>
           <Route path="/" element={<Shop />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/logIn" element={<Login />} />
           <Route path="/fav" element={<Favourite />} />
           <Route path="/profile" element={<Profile />} />
         </Routes>
         <Fotter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
