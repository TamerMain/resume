import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
          <Switch>
            <Route exact path="/14">
              <Redirect to="/14/quotes" />
            </Route>
            <Route path="/14/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/14/new-quote">
              <NewQuote />
            </Route>
            <Route path="/14/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="/14/*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
