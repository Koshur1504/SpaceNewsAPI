import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles/")
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data);
      });
  }, []);

  const clickHandler = (val) => {
    window.open(val.url, "_blank");
  };
  return (
    <div className="App">
      <div className="title">
        <h1> Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val) => {
          return (
            <div
              className="article"
              key={val.id}
              onClick={() => clickHandler(val)}
            >
              <h3>{val.title}</h3>
              <img src={val.imageUrl} alt={val.newsSite} />
              <p>{val.summary}</p>
              <h4>{val.publishedAt}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
