import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import Notification from './components/Notifications';
import {uiActions} from './store/ui-slice';
let isFirstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  let cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendData = async () => {
      const res = await fetch(
        'https://redux-tutorial-2f33b-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Item added to database sent successefully',
          type: 'success',
        })
      );
    };
    sendData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Request Failed',
          type: 'error',
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
