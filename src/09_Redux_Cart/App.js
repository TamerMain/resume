import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";
import store from "./components/store/index";
import "./App.css";

let isInitial = true;

function ReduxCart() {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => state.uiSlice.cartVisible);
  const cart = useSelector((state) => state.cartSlice);
  const notification = useSelector((state) => state.uiSlice.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      <div className="reduxCart">
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          ></Notification>
        )}
        <Layout>
          {cartVisible && <Cart />}
          <Products />
        </Layout>
      </div>
    </Fragment>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ReduxCart />
    </Provider>
  );
}

export default App;
