import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
//замість старого масиву, сетаєм новий , в який розвертаєм старий масив і в який добавляєм об'єкт в якому буде розвернутий об'єкт post і добавлено унік. айді
//  setPosts([...posts, {...post, id: Date.now()}])

    // THIS newPost WILL BE TRANSFERRED TO PARENT COMPONENT WITH CALLBACK (create) !!!
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      {/*CONTROLLED COMPONENT*/}
      <MyInput
        type="text"
        placeholder={'Header'}
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder={'Description'}
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
      />
      {/*content inside button goes like its props.children WAOW!!!*/}
      <MyButton onClick={addNewPost}>Create</MyButton>
    </form>
  );
};

export default PostForm;