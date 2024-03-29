import React, { useState, useEffect } from "react";
import Modal from './Modal'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'
import RegisterPage from '@/components/Register'
import LoginForm from '@/components/Login'
type User = {
  username: string
}

export default function UseModal() {
  const [showModal, setShowModal] = useState(false);
  const [index, setShowIndex] = useState(0);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    if (user && user !== "undefined") {
      setUser(JSON.parse(user));
    }
  }, []);

  function toggle(index: any) {
    setShowModal(!showModal);
    setShowIndex(index);
    // console.log(index);
  }

  return (
    <div style={{ display: "flex", width: "fit-content", margin:"0", minWidth:"10%", alignItems:"end", alignContent:"end", justifyContent:"end", paddingBottom: "0.8rem"}}>
      {/* <button onClick={() => setShowModal(true)}>Login|Signup</button> */}
      <div>
      {!user && (
        <>
          <button
            style={{
              border: "none",
              fontWeight: "bold",
              color: "blue",
              backgroundColor: "transparent",
              paddingRight: "2px",
            }}
            onClick={() => toggle("Login")}
          >
            Login |
          </button>
          <button
            style={{
              border: "none",
              fontWeight: "bold",
              color: "blue",
              backgroundColor: "transparent",
              paddingLeft: "0",
            }}
            onClick={() => toggle("Sign Up")}
          >
            SignUp
          </button>
        </>
      )}
      {user && (
        <>
          <a
            href="/account"
            style={{
              display: "flex",
              // alignItems: "end",
              // textAlign: "end",
              // alignContent: "end",
              justifyContent: "end",
              width: "fit-content",
            }}
          >
            <div>Xin chào</div>
            <div
              style={{
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              {user.username}
            </div>
          </a>
        </>
      )}</div>
      <Modal
        title={'modal1'}
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <> <Tabs showIndex={index}>
          <div id="Login" style={{ fontWeight: "bold" }}>
            <LoginForm registering={false} />
          </div>
          <div id="Sign Up" style={{ fontWeight: "bold" }}>
            <RegisterPage cus_style={{ width: "100%" }} />
          </div>
        </Tabs></>
      </Modal>
    </div>
  )
}