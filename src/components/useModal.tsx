import React, { useState, useEffect } from "react";
import Modal from './Modal'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'
import RegisterPage from '@/components/Register'
import LoginForm from '@/components/Login'


export default function UseModal() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const user = localStorage.getItem("user", false);
      if (user && user !== "undefined") {
        setUser(JSON.parse(user));
      }
    }, []);

    return (
        <div>
            {/* <button onClick={() => setShowModal(true)}>Login|Signup</button> */}
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
                    onClick={() => toggle("SignUp")}
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
              )}
            <Modal
                title={'modal1'}
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <> <Tabs showIndex={0}>
                    <div label="Login" style={{ fontWeight: "bold" }}>
                        <LoginForm />
                    </div>
                    <div label="SignUp" style={{ fontWeight: "bold" }}>
                        <RegisterPage cus_style={{ width: "100%" }} />
                    </div>
                </Tabs></>
            </Modal>
        </div>
    )
}