import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import GetStarted from '../components/GetStarted.js';
import './Home.css';
import Audience from '../components/Audience.js';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="home">
        <h1>Own your audience.</h1>
        <h1>So you don't lose them.</h1>
        <div className='audience'>
          <h3>Turn your audience into email and text message subscribers.</h3>
          <div className="btn">
            <button>Get Started Now</button>
            <button>View A Demo</button>
          </div>
          <p><img src="assets/images/dot.png" alt="dot" /><b>1000+</b> creators have already started</p>
        </div>
        <div className="whyMarico">
          <h1>Why Creators Love Marico</h1>
          <div className="features">
            <div className="feat">
              <h1>🙂 Reduced Anxiety</h1>
              <p>Never worry about losing your audience.</p>
            </div>
            <div className="feat">
              <h1>😃 Lower Workload</h1>
              <p>Just share one link. We'll handle the rest.</p>
            </div>
            <div className="feat">
              <h1>😍 More Time</h1>
              <p>Spend less time on marketing tools</p>
            </div>
          </div>
        </div>
        <div className="connect">
          <span>STEP 1</span>
          <h1>Connect Your Content</h1>
          <p>Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.</p>
            <button>View Available Source</button>    
        </div>
      </div>
      <div className="yourContent">
          <div className="homePage">
            <h3>Your Homepage</h3>
            <h1>Your Content.</h1>
            <h1>All in <span>One Spot</span></h1>
            <div className="points">
              <div className="point">1</div>
              <div>Bring all of your content together into one homepage.</div>
            </div>
            <div className="points">
              <div className="point">2</div>
              <div>Your page automatically updates whenever you create.</div>
            </div>
            <div className="btns">
            <button>Get Started Now</button>
            <button>View A Demo</button>
          </div>
          </div>
          <div className="image">
            <img src="assets/images/screen.png" alt="" />
          </div>
        </div>
        <div className="share">
          <div className="step2">
          <span>STEP 2</span>
          <h1>Share Your Homepage</h1>
          <p>Share your Wavium homepage link with your followers, and we'll handle the rest.</p>
          </div>
          <div className="sharePlatform">
            <div className="platform">
              <h3>One Link</h3>
              <h1>
              ALL You Create.
              </h1>
              <span>One Link</span>
            </div>
            <div className="platform">
              <h3>Collect Subscribers</h3>
              <h1>Emails.</h1>
              <h1>Phone #s.</h1>
              <span>All Yours</span>
            </div>
          </div>
        </div>
        <div className="send">
          <div className="step3">
          <span>STEP 3</span>
          <h1>Send Emails & Text Messages</h1>
          <p>No more going through a social platform. Reach and engage your audience directly over email and text massage.</p>
          </div>
          <div className="yourContent">
          <div className="homePage">
            <h3>Create & Share</h3>
            <h1>Reach Your</h1>
            <h1>Audience <span>Directly</span></h1>
            <div className="points">
              <div className="point">1</div>
              <div>Embed content or create something new to share.</div>
            </div>
            <div className="points">
              <div className="point">2</div>
              <div>Share content over email, text message or your homepage.</div>
            </div>
            <div className="btns">
            <button>Get Started Now</button>
            <button>View A Demo</button>
          </div>
          </div>
          <div className="image">
            <img src="assets/images/blackpink.png" alt="" />
          </div>
        </div>
        </div>
        <div className="experts">
          <h1>Experts Agree</h1>
          <img src="assets/images/expert.png" alt="expert" />
        </div>
      <Audience/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default Home
