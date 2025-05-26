import { useEffect } from "react";
import "./Po.css";
export default function Post({ data, setPageno }) {
  useEffect(() => {
    const obsever = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          obsever.unobserve(lastimg);
          setPageno((pageno) => pageno + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastimg = document.querySelector(".img:last-child");
    if (!lastimg) return;
    obsever.observe(lastimg);
    return () => {
      if (lastimg) {
        obsever.unobserve(lastimg);
      }
      obsever.disconnect();
    };
  }, [data, setPageno]);
  return (
    <div className="container">
      {data.map((item) => {
        return <img src={item.download_url} key={item.id} className="img" />;
      })}
    </div>
  );
}
