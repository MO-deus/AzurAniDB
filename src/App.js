import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  // array of {main}ani list
  const [aniList, setAniList] = useState([]);
  // array of {top}ani list
  const [topAni, setTopAni] = useState([]);
  // variable for search results
  const [searchAni, setSearchAni] = useState("");

  const GetTopAni = async () => {
    const dat = await fetch(
      `https://api.jikan.moe/v4/top/anime?limit=10`
    ).then((res) => res.json());

    setTopAni(dat["data"]);
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAniDat(searchAni);
  };

  const FetchAniDat = async (SearchQuery) => {
    const dat = await fetch(
      `https://api.jikan.moe/v4/anime?limit=9&q=${SearchQuery}&sort=asc&order_by=popularity`
    ).then((res) => res.json());

    setAniList(dat["data"]);
  };

  useEffect(() => {
    GetTopAni();
  }, []);

  return (
    <>
      <div className="App">
        <Header></Header>
        <div className="content-wrap">
          <Sidebar topAni={topAni} />
          <MainContent
            HandleSearch={HandleSearch}
            searchAni={searchAni}
            setSearchAni={setSearchAni}
            aniList={aniList}
          ></MainContent>
        </div>
      </div>
    </>
  );
}

export default App;
