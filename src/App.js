
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from "./Components/Admin/AddAdmin/AddAdmin";
import AddService from "./Components/Admin/AddService/AddService";
import ManageProduct from "./Components/Admin/ManageProduct/ManageProduct";
import BookingList from "./Components/BookingLilst/BookingList";
import Bookings from "./Components/Dashboard/Bookings/Bookings";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Review from "./Components/Dashboard/Review/Review";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import OrderList from "./Components/OrderList/OrderList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <PrivateRoute path='/booking'>
          <Dashboard/>
        </PrivateRoute>
        <Route path='/manage'>
          <ManageProduct/>
        </Route>
        <Route path='/addService'>
          <AddService/>
        </Route>
        <Route path='/addAdmin'>
          <AddAdmin/>
        </Route>
        <Route path='/bookinglist'>
          <BookingList/>
        </Route>
        <Route path='/review'>
          <Review/>
        </Route>
        <Route path='/orderList'>
          <OrderList/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>    
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
