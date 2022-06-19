import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { connect } from "react-redux";

const Sidebar = (props) => {
  const [Show, setShow] = useState(false);

  return (
    <div className={`${!Show ? "absolute" : "relative"}`}>
      Sidebar
      <ArrowRightIcon onClick={() => setShow(!Show)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  // sidebar: state.page.sidebar,
});

export default connect(mapStateToProps)(Sidebar);
