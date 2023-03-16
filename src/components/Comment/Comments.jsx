import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";
import severUrl from "@/utils/api";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "@/utils/api";

// https://github.com/saqueib/react-comments/tree/master/src/components

const Comments = ({ comments, currentUserId, slug }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.reply_to === null
  );
  const childComments = backendComments.filter(
    (backendComment) => backendComment.reply_to != null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.reply_to === commentId)
      .sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
  const addComment = (text, reply_to) => {
    var user = JSON.parse(localStorage.getItem("user"));
    createCommentApi(user.email, text, reply_to, slug).then((resp) => {
      console.log(resp.data);
      setBackendComments([resp.data[0], ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId, slug).then((resp) => {
      // const updatedBackendComments = resp.data;
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi(commentId, slug).then((resp) => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    // axios.get(severUrl + "blog/" + slug + "/comments/").then((response) => {
    //   console.log("list");
    //   console.log(response.data);
      setBackendComments(comments);
    // });
  }, []);

  return (
    <>
      <span
        style={{
          marginTop: "20px",
          width: "100%",
          borderBottom: "dotted 1px #333",
          display: "block",
          opacity: "0.3",
          height: "1px",
        }}
      ></span>
      <span
        style={{
          width: "100%",
          borderBottom: "dotted 1px #333",
          display: "block",
          opacity: "0.3",
          height: "1px",
        }}
      ></span>
      <span
        style={{
          width: "100%",
          borderBottom: "dotted 1px #333",
          display: "block",
          opacity: "0.3",
          height: "1px",
        }}
      ></span>
      <h4>Join Discussion</h4>
      <div className="comments">
        {/* <h3 className="comments-title">Comments</h3> */}
        {/* <div className="comment-form-title">Write comment</div> */}
        <CommentForm submitLabel="Submit" handleSubmit={addComment} />
        <h4 className="comments-title">Comments</h4>
        <div className="comments-container">
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
              childs={childComments}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
