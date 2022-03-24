import React from 'react';

import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder={'Search'}
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        // onChange={sort => setSelectedSort(sort)} // sort = 'title' OR sort = 'body' (extracting from child component)
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})} // HARD!!!
        defaultValue={'Sort by'}
        options={[
          { value: 'title', name: 'Sort by title' },
          { value: 'body', name: 'Sort by description' }
        ]}
      />
    </div>
  );
};

export default PostFilter;