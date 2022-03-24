// noinspection UnnecessaryLocalVariableJS

import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  // useMemo() 1st param - callback in which I specify what it should cache(memorize), 2nd param - dependencies (when any
  // of dependencies changes, useMemo will remember changed value(in callback) and re-render accordingly, if [] in
  // deps, remembers what returns in callback forever and don't re-render more than once xD)

  const sortedPosts = useMemo(() => {
    // console.log('sortedPosts triggered') // відпрацьовує щоразу коли щось поміняється в депсах
    if (sort) { // якщо ми вибрали якеси сортування з випадаючого списку
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) // відсортований масив по title/body
    }
    return posts;
  }, [sort, posts]) // selected sort = 'title'/'body'

  return sortedPosts;
}

// THIS HOOK (usePosts) COMBINES ALL SORTING NEEDED!
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  // search and sort works SIMULTANEOUSLY!!!
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));// sortedPosts - відсортований масив по title/body(useMemo)
  }, [query, sortedPosts])

  return sortedAndSearchedPosts;
}