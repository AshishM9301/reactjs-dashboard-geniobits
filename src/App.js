import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Routes, Route, Navigate, Outlet, useRoutes } from "react-router-dom";

import { loadUser } from "./_actions/_authActions";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

const App = (props) => {
  console.log(props);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });

  const routing = useRoutes(routes(props.isAuth));

  return (
    <div className="relative">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
      <>{routing}</>
      <Outlet />
    </div>
  );
};

const routes = (isAuth) => [
  {
    path: "dashboard",
    element: isAuth ? <Dashboard /> : <Navigate to="/" />,
  },
  {
    path: "/",
    element: isAuth ? <Navigate to="/dashboard" /> : <Login />,
  },
  {
    path: "login",
    element: isAuth ? <Navigate to="/dashboard" /> : <Login />,
  },

  { path: "*", element: <NotFound /> },
];

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
