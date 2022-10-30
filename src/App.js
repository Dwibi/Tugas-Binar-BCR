import React, { useState } from "react";
import AppRoutes from "config/router";
import { Fragment } from "react";
import Header from "./component/Header";
import Footer from "component/Footer";

const App = (props) => {
  const [statusPencarian, setStatusPencarian] = useState(null);
  const closeHandler = (arg) => {
    setStatusPencarian(arg);
  };
  return (
    <Fragment>
      <Header {...props} statusPencarian={statusPencarian} />
      <AppRoutes {...props} closeHandler={closeHandler} />
      <Footer />
    </Fragment>
  );
};

export default App;
