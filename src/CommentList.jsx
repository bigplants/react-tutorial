/**
 * Created by daikihirakata on 4/19/16.
 */
import React from "react";
import Comment from "./Comment";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
