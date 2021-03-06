import React from 'react';


const PostItem = ({post}) => (

<div className="card">
  <div className="card-block" key={post._id}>
    <h4 className="card-title">Topic: {post.songTitle}</h4>
    <p className="card-text">Description: {post.songNotes}</p>
    <p className="card-text text-muted">User: {post.userName}</p>
  </div>
</div>

);


export default PostItem;
