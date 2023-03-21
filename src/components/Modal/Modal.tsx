import React from "react";
import ReactDOM from "react-dom";
// import Tabs from "../Tab/Tabs";
// import { RegisterPage } from "../Home/RegisterPage";
// import { LoginForm } from "../Home/LoginForm";

const Modal = ({ isShowing, hide, activeTab }:any) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
 <div></div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
