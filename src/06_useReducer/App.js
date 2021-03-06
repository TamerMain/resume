import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <MainHeader />
      <main style={{marginTop: "6rem"}}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
}

export default App;
