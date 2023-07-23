# AzurAniDB

A Webapp for tracking anime

## Technologies used

1. ReactJS
2. Jikan API

## Skills learned

1. using the reactJS for cereating UI
2. making the use of `fetch()` function
3. React Hooks

## Snapshots

### Top Anime

    `const GetTopAni = async () => {`
    `const dat = await fetch(`
      `https://api.jikan.moe/v4/top/anime?limit=10`
    `).then((res) => res.json());`
    `setTopAni(dat["data"]);`
    `};`
![Fetching Top Anime](./image.png/../images/Screenshot%20(2682).png)

### Searching an anime

    `const FetchAniDat = async (SearchQuery) => {`
    `const dat = await fetch(``https://api.jikan.moe/v4/anime?limit=9&q=${SearchQuery}&sort=asc&order_by=popularity``).then((res) => res.json());`
    `setAniList(dat["data"]);`
    `};`

![Searching an Anime](./images/Screenshot%20(2683).png)
![Searching an Anime](./images/Screenshot%20(2684).png)
![Searching an Anime](./images/Screenshot%20(2685).png)

## Todo

1. Login / Signin window
2. Implementing user database
3. User Authentication
4. News on the frontpage
