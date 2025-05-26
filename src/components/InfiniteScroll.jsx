import Post from "./Post";
import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  console.log(data);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${[pageno]}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((arr) =>
        setData((prev) => {
          const all = [...prev, ...arr];
          const unique = Array.from(
            new Map(all.map((item) => [item.id, item])).values()
          );
          return unique;
        })
      );
  }, [pageno]);
  return (
    <div>
      <Post data={data} setPageno={setPageno} />
    </div>
  );
}
