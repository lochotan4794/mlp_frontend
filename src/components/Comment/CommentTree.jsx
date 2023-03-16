import React from "react";

function Comment({ text, author }) {
  return (
    <div>
      {author}: {text}
    </div>
  );
}

function CommentTree(comments) {
  let items = comments.map((comment) => {
    return (
      <div className="border-l pl-6">
        <Comment key={comment.id} text={comment.text} author={comment.author} />
        {comment.children && CommentTree(comment.children)}
      </div>
    );
  });

  return items;
}

export default CommentTree;
