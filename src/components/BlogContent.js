import React from "react";
import "./BlogContent.css";
import Data from "../Blogs.json";

const BlogContent = () => {
  return (
    <>
      {Data &&
        Data.map((data) => {
          return (
            <div className="blog" key={data.id}>
              <img src={data.img} alt="twitter" />
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </div>
          );
        })}
    </>
  );
};

export default BlogContent;
