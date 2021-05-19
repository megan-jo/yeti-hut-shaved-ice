import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-teal has-text-white-ter">
        <div className="content has-text-centered has-background-teal has-text-white-ter">
          <div className="container has-background-teal has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    
                    <li>
                      <Link className="navbar-item" to="/menu">
                        Menu & Flavors
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/jobs">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li className="footer-spacer">
                      <p className="footer-heading">Our Location</p>
                      <p>220 North 600 West Pleasant Grove, Utah</p>
                    </li>
                    <li>
                      <p className="footer-heading">Hours</p>
                      <p>Open from the first weekend in May till Labor Day!</p>
                      <p>While school is in session hours are : M-F 3:00PM to 8:30PM, Sat Noon - 8:30PM </p>
                      <p>Summer Hours: Mon-Sat Noon - Sundown</p>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <ul className="menu-list">
                  <li><b>Email:</b> yetihutshavedice@gmail.com</li>
                  <li><b>Phone:</b> 801-772-4405</li>
                </ul>
                <div className="social">
                  <a title="facebook" href="https://www.facebook.com/yetihutshavedice">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/yetihutshavedice/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
