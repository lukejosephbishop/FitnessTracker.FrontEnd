import React from 'react'
import { useHistory } from "react-router-dom";

export default function Search({searchWord, setSearchWord}) {
    const history = useHistory();

  const handleClick = () => {
    history.push("/searchpage");
  };

  return (
    <div className="search-bar-main">
      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          type="text"
          id="postSearch"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Search Posts"
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}
