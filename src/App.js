import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import ExpensesList from "./01_ExpensesList/App";
import Reducer from "./02_useReducer/App";
import ClassBased from "./03_ClassBased/App";
import StarWarsMovies from "./04_FetchAPI_StarWarsMovies/App";
import FirebaseMovies from "./05_FetchAPI_FirebaseMovies/App";
import UseHttp from "./06_CustomHook_useHttp_Firebase/App";
import InputForm from "./07_CustomHook_InputForm/App";
import ReactMealsFirebase from "./08_ReactMeals_Firebase/App";
import ReduxCart from "./09_Redux_Cart/App";
import RouterComplex from "./10_ReactRouter_Complex/App";
import IdentityToolkit from "./11_GoogleAPI_IdentityToolkit/App";
import Animations from "./12_ReactAnimations_ReactTransitionGroup/App";

import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div>
      <HashRouter>
        <NavigationBar />
        <Switch>
          <Route path="/01">
            <ExpensesList />
          </Route>
          <Route path="/02">
            <Reducer />
          </Route>
          <Route path="/03">
            <ClassBased />
          </Route>
          <Route path="/04">
            <StarWarsMovies />
          </Route>
          <Route path="/05">
            <FirebaseMovies />
          </Route>
          <Route path="/06">
            <UseHttp />
          </Route>
          <Route path="/07">
            <InputForm />
          </Route>
          <Route path="/08">
            <ReactMealsFirebase />
          </Route>
          <Route path="/09">
            <ReduxCart />
          </Route>
          <Route path="/10">
            <RouterComplex />
          </Route>
          <Route path="/11">
            <IdentityToolkit />
          </Route>
          <Route path="/12">
            <Animations />
          </Route>
          <Route path="/">
            <NavigationBar />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
