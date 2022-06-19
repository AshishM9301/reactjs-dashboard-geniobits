import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { logout } from "../_actions/_authActions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <div className="bg-orange-600 w-full py-2 px-8 text-xl text-white">
        {props.isAuth ? <LoggedIn /> : <Login />}
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex  justify-between items-center">
      <div className="">Company Name</div>
      <div>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

const LoggedIn = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="">Side Bar</div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center w-full rounded-full shadow-sm  py-2 bg-orange-500 text-white text-sm font-medium hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-600 focus:ring-orange-300">
            <UserIcon
              className="mr-5 ml-2 p-2 bg-gray-200 w-12 h-12 rounded-full"
              aria-hidden="true"
            />
            Options
            <ChevronDownIcon
              className="mr-3 ml-4 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    My Account
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  // sidebar: state.page.sidebar,
});

export default connect(mapStateToProps)(Navbar);
