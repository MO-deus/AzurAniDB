import React from "react";

function Sidebar({ topAni }) {
  return (
    <aside>
      <nav>
        <h3> Top Anime </h3>
        {topAni.map((ani) => (
          <a href={ani.url} target="_blank" key={ani.mal_id} rel="noreferrer">
            {ani.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
