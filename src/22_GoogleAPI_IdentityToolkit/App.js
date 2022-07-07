import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import AuthContext from "./store/auth-context";
import { AuthContextProvider } from './store/auth-context';
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function IdentityToolKit() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="identityToolKit">
      <Layout>
        <Switch>
          <Route path="/22/" exact>
            <HomePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/22/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/22/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/22/auth" />}
          </Route>
          <Route path="/22/*">
            <Redirect to="/22/" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <IdentityToolKit />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
