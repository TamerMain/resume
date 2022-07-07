import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import ExpensesList from "./01_ExpensesList/App";
import Reducer from "./06_useReducer/App";
import ClassBased from "./09_ClassBased/App";
import StarWarsMovies from "./10_FetchAPI_StarWarsMovies/App";
import FirebaseMovies from "./11_FetchAPI_FirebaseMovies/App";
import UseHttp from "./15_CustomHook_useHttp_Firebase/App";
import InputForm from "./16_CustomHook_InputForm/App";
import ReactMealsFirebase from "./17_ReactMeals_Firebase/App";
import ReduxCart from "./19_Redux_Cart/App";
import RouterComplex from "./21_ReactRouter_Complex/App";
import IdentityToolkit from "./22_GoogleAPI_IdentityToolkit/App";
import Animations from "./23_ReactAnimations_ReactTransitionGroup/App";

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
          <Route path="/05">
            <Reducer />
          </Route>
          <Route path="/06">
            <ClassBased />
          </Route>
          <Route path="/07">
            <StarWarsMovies />
          </Route>
          <Route path="/08">
            <FirebaseMovies />
          </Route>
          <Route path="/09">
            <UseHttp />
          </Route>
          <Route path="/10">
            <InputForm />
          </Route>
          <Route path="/11">
            <ReactMealsFirebase />
          </Route>
          <Route path="/12">
            <ReduxCart />
          </Route>
          <Route path="/14">
            <RouterComplex />
          </Route>
          <Route path="/15">
            <IdentityToolkit />
          </Route>
          <Route path="/16">
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
