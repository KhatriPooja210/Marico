import React from "react";
import Navbar from "../components/Navbar.js";
import GetStarted from "../components/GetStarted.js";
import Footer from "../components/Footer.js";
import Audience from "../components/Audience.js";
import "./Blog.css";
import BlogContent from "../components/BlogContent.js";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="contentSources">
        <h1>Content Sources</h1>
        <p>Connect these sources to your Marico homepage.</p>
        <div className="blogs">
          <BlogContent/>

        </div>
      </div>
      <Audience />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Blog;
