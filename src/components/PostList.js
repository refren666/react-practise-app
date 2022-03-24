import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) => {

  if (!posts.length) {
    return <h2 style={{textAlign: 'center'}}>No posts</h2>
  }


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>

      <TransitionGroup>
        {posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem number={index + 1} post={post} deletePost={deletePost}/>
            </CSSTransition>)}
      </TransitionGroup>
    </div>
  );
};

export default PostList;