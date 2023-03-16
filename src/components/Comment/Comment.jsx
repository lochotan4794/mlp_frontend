import React from "react";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
  childs = null,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.created) > fiveMinutes;
  const canDelete =
    currentUserId === comment.name && replies.length === 0 && !timePassed;
  const canReply = Boolean("1");
  const canEdit = currentUserId === comment.name && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.created).toLocaleDateString();
  const childComments = childs ? childs : replies;

  const rootReplies = replies.filter(
    (replie) => replie.reply_to === comment.id
  );

  // useEffect(() => {
  //   console.log(timePassed);
  //   console.log(currentUserId);
  //   console.log(comment.name);
  //   console.log(childComments);
  // }, []);

  const getReplies = (commentId) =>
    childComments
      .filter((childComment) => childComment.reply_to === commentId)
      .sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );

  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.name}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="comments-container">
            {rootReplies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={reply.id}
                // parentId={comment.id}
                replies={getReplies(reply.id)}
                currentUserId={currentUserId}
                childs={childComments}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
