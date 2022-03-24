import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import Comment from "../components/Comment";

const PostId = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const {id, title, body} = post;
  const {postId} = useParams();
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const postFromServer = await PostService.getById(postId);
    setPost(postFromServer);
  });
  const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
    const postComments = await PostService.getCommentsByPostId(postId);
    setComments(postComments.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, [postId]);

  return (
    <div className={'App'}>
      {isLoading
        ? <Loader/>
        : <div>
          <h1>Post {id}. {title}</h1>
          <p>{body}</p>
        </div>}
      <h1 style={{marginTop: '50px'}}>Comments: </h1>
      {isCommentLoading
      ? <Loader/>
      : <div>
          {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>}
    </div>
  );
};

export default PostId;