import {useEffect, useRef, useState} from "react";

import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef(null);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);

    const totalCount = Number(response.headers['x-total-count']);
    setTotalPages(getPageCount(totalCount, limit)); // x-total-count - all posts (100)
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  // CALLBACK FUNCTIONS WHICH WILL GET DATA FROM CHILD COMPONENT !
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // id comes from daughter component
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  const changePage = (page) => {
    setPage(page);
  }

  // const sortPosts = (sort) => {
  // sort = 'title' OR sort = 'body'
  // filter.sort(sort) // this will make dropdown list CONTROLLED!
  // a[sort] and b[sort] ---> sort is DYNAMIC like a['title'/'body']='Javascript'/'Description' and b['title'/'body']='Javascript 2'/'Description',
  // where a = { id: 1, title: 'Javascript', body:'Description' } and b = { id: 2, title: 'Javascript 2', body:'Description' }
  // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))) // I spread posts arr, because it MUTATES source array
  // }

  return (
    <div className={'App'}>
      <MyButton style={{marginTop: '10px'}} onClick={() => setModal(true)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue={'Amount of posts on the page'}
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Show all'}
        ]}
      />

      {postError && <h1 style={{textAlign: 'center'}}>{postError}</h1>}

      <PostList
        posts={sortedAndSearchedPosts}
        title={'Javascript Posts'}
        deletePost={deletePost}
      />
      <div ref={lastElement} style={{height: '20px', background: 'red'}}> </div>

      {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>}

      <Pagination
        totalPages={totalPages}
        changePage={changePage}
        page={page}
      />

    </div>
  );
}

export default Posts;