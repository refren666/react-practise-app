export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit); // ceil because may be 105 posts, and I want 11th page with last 5 posts
}

export const getPagesArray = (totalPages) => {
  let resultArray = [];
  for (let i = 0; i < totalPages; i++) {
    resultArray.push(i + 1);
  }

  return resultArray;
}