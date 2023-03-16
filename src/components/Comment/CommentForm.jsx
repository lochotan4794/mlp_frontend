import React from "react";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import useModal from "../modal/useModal";
import axios from "axios";
import severUrl from "@/utils/api";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const [activeUser, setActiveUser] = useState(null);
  const { isShowing, toggle, showIndex } = useModal();
  const [registerUser, setRegisterUser] = useState(null);
  const [registerPassword, setRegisterPassword] = useState(null);
  const [registerEmail, setRegisterEmail] = useState(null);
  const [filled, setFilled] = useState(false);

  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  useEffect(() => {
    const user = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    if (user) {
      setActiveUser(user);
    }
  }, []);

  const handleNext = (event) => {
    if (registerEmail !== null && registerPassword !== null) {
      var bodyFormData = new FormData();
      bodyFormData.append("email", registerEmail);
      bodyFormData.append("password", registerPassword);
      console.log(severUrl + `registration/login_user`);
      axios
        .post(severUrl + `registration/login_user`, bodyFormData)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          // onSubmit();
          window.location.reload();
          // console.log(response.json())
        })
        .catch(function (error) {
          toggle("SignUp");
          // if (error.response) {
          //   // The request was made and the server responded with a status code
          //   // that falls out of the range of 2xx
          //   console.log(error.response.data);
          //   console.log(error.response.status);
          //   console.log(error.response.headers);
          // } else if (error.request) {
          //   // The request was made but no response was received
          //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          //   // http.ClientRequest in node.js
          //   console.log(error.request);
          // } else {
          //   // Something happened in setting up the request that triggered an Error
          //   console.log("Error", error.message);
          // }
          // console.log(error.config);
        });
    }
  };

  function handleEmailChange(event) {
    const { name, value } = event.target;
    setRegisterEmail(value);
  }

  function handlePasswordChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setRegisterPassword(value);
  }

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} activeTab={showIndex} />
      <div className="commentForm">
        <form
          onSubmit={onSubmit}
          style={{ paddingBottom: "1%" }}
        >
          <textarea
            style={{ cols: "50", rows: "10", maxlength: "65525" }}
            className="comment-form-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "row",
              alignItems: "start",
            }}
          >
            {activeUser && (
              <button
                // style={{ width: "fit-content" }}
                className="comment-form-button"
                disabled={isTextareaDisabled}
              >
                {submitLabel}
              </button>
            )}
          </div>
          {hasCancelButton && (
            <button
              type="button"
              className="comment-form-button comment-form-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </form>
        {!activeUser && (
          <div
            class="form-style-6"
            style={{ justifyContent: "end", padding: 0, margin: "10px 0" }}
          >
            <input
              type="email"
              name="field2"
              placeholder="your email"
              value={registerEmail}
              onChange={handleEmailChange}
            ></input>
            <input
              type="password"
              placeholder="password"
              value={registerPassword}
              onChange={handlePasswordChange}
            ></input>
            <button onClick={handleNext}>Next</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentForm;
