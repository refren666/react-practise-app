import React from 'react';
import {useNavigate} from "react-router-dom";

import MyButton from "./UI/button/MyButton";

const PostItem = ({post, deletePost}) => {
  const {id, title, body} = post;
  const navigate = useNavigate();

  return (
    <div>
      <div className={'post'}>
        <div className="post__content">
          <strong>{post.id}. {title}</strong>
          <div>
            {body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
          <MyButton onClick={() => deletePost(id)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;