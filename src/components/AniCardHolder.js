import React from 'react'

function AniCardHolder({ani}) {
  return (
   <article className="anime-card">
    <a href="">
        <figure>
            <img 
            src = {ani["images"]["jpg"].image_url}
            alt = "Anime Image" 
            > 
            </img>
        </figure>
        <h3>{ani.title}</h3>
    </a>
   </article>
  )
}

export default AniCardHolder