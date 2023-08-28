import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./About.css";
import GetStarted from "../components/GetStarted.js";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <img src="assets/images/logo.png" alt="logo" />
        <div className="ourMission">
          <h3>OUR MISSION</h3>
          <h1>We exist to help creators own their audience.</h1>
          <p>
            We believe that social platforms are taking advantage of creators.
            We want to change that and help creators fight back.
          </p>
        </div>
        <div className="info">
          <p>
            Building a career on social platforms is like building a home on
            someone else's land. While social platforms are great for
            discovering and reaching your audience, your goal as a creator
            should be to convert your followers into email or text message
            subscribers. Why? Look no further than TikTok. Almost overnight,
            millions of creative people almost lost their careers.
          </p>
          <p>
            If a platform removes your account, or their algorithm for
            distribution no longer favours you, are you prepared?
          </p>
          <p>
            If you want to build a career as a creator, your focus should be on
            building durable distribution channels. Without distribution, you
            have no business. So how can you build an audience that you actually
            own? With emails and phone numbers. These distribution channels are
            direct. Instead of going through some algorithm, when you share over
            email and text message, you know that your audience will see your
            content. Even better is the fact that you own these lists. Instagram
            removes your acount, you're ok. YouTube changes their algorithm,
            you're ok. You own your audience.
          </p>
          <p>
            We built Marico to make this process easy, fast, and effective. The
            traditional solution to this problem involves spending days building
            a website or hiring someone expensive to do it for you. But those
            days are gone. With Marico, you get a portfolio that is always
            up-to-date and converts visitors into email or text message
            subscribers. The best thing? It takes under 5 minutes to setup, and
            it automatically updates whenever you post new content anywhere
            online. We believe the best tools are the ones you don't even
            notice. Marico helps you build your own audience, without any hassle
            or time commitment. All you have to do is share your portfolio link
            with your audience, and we'll handle the rest.
          </p>
          <p>
            You can also create posts from within Marico and share them in just
            a few clicks to your portfolio, and to your email and text message
            subscribers. Since all of your content is already in Marico,
            creating content takes minutes, not hours.
          </p>
          <p>
            For too long, social platforms have taken advantage of creators.
            Fight back and build an audience that you own.
          </p>
          <h3>- The Team Marico (Olivia, William, and Noah) </h3>
        </div>
        <div className="ourTeam">
          <h3>OUR TEAM</h3>
          <h1>We love creators</h1>
          <div className="creators">
            <div className="creator">
              <img className="creatorMan" src="assets/images/creator.webp" alt="creator" />
              <h2>Jacob Mark</h2>
              <p>CEO & Design</p>
              <p>Twitter <img src="assets/images/up-right-arrow.png" alt="arrow" /></p>
            </div>
            <div className="creator">
            <img className="creatorMan" src="assets/images/creator.webp" alt="creator" />
              <h2>Jacob Mark</h2>
              <p>CEO & Design</p>
              <p>Twitter <img src="assets/images/up-right-arrow.png" alt="arrow" /></p>
            </div>
            <div className="creator">
            <img className="creatorMan" src="assets/images/creator.webp" alt="creator" />
              <h2>Jacob Mark</h2>
              <p>CEO & Design</p>
              <p>Twitter <img src="assets/images/up-right-arrow.png" alt="arrow" /></p>
            </div>
            
          </div>
        </div>
      </div>
      <GetStarted/>
      <Footer />
    </>
  );
};

export default About;
