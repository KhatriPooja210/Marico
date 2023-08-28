import React from 'react'
import Navbar from '../components/Navbar.js'
import GetStarted from '../components/GetStarted.js'
import Footer from '../components/Footer.js'
import './Pricing.css';
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {
  return (
    <>
      <Navbar/>
      <div className="pricing">
        <h1>Choose the plan that's right for you.</h1>
        <div className="prices">
          <div className="price">
            <h2>Starter</h2>
            <p>Perfect for tying out Wavium</p>
            <div className="pp">
              <h1>Free</h1>
            </div>
            <h3>Collect Unlimited subscribers</h3>
            <p>500 monthly emails</p>
            <h4>Upgrade to send more emails</h4>
            <h3>Key features</h3>
            <p><AiOutlineCheck/> Automatic updating home page</p>
            <p><AiOutlineCheck/> Unlimited sources + posts</p>
            <button>Start For Free</button>
          </div>
          <div className="price">
          <h2>Basic</h2>
            <p>Build your online home</p>
            <div className="pp">
            <h1>$14<sub>Per month</sub></h1>
            <span>or $19/mo, billed monthly</span>
            </div>
            <h3>Collect Unlimited subscribers</h3>
            <p>2,000 free monthl emails</p>
            <h4>Purchase more for $0.002 per email</h4>
            <h3>Everything in starter, plus</h3>
            <p><AiOutlineCheck/> Remove Wavium branding</p>
            <p><AiOutlineCheck/> Embed Wavium on your own domain</p>
            <button>Start Free 14-day Trial</button>
          </div>
          <div className="price">
          <h2>Complete</h2>
            <p>Enhanced engagement</p>
            <div className="pp">
            <h1>$29<sub>Per month</sub></h1>
            <span>or $34/mo, billed monthly</span>
            </div>
            <h3>Collect Unlimited subscribers</h3>
            <p>10,000 free monthly emails</p>
            <h4>Purchase more for $0.002 per email</h4>
            <h3>Everything in basic, plus </h3>
            <p><AiOutlineCheck/> Collect text massage subscribers</p>
            <p><AiOutlineCheck/> vzShare posts over text massage</p>
            <button className='lastBtn'>Start Free 14-day Trial</button>
          </div>
        </div>
      </div>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default Pricing
