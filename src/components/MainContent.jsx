import React from "react";
import AniCardHolder from "./AniCardHolder";

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search for Anime Title"
            required
            value={props.SearchAni}
            onChange={(e) => props.setSearchAni(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.aniList.map(ani => (
          <AniCardHolder
          ani = {ani}
          key = {ani.mal_id}
          />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
