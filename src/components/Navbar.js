import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent "
        role="navigation"
        aria-label="main-navigation"
        style={!!this.props.image ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
            !!this.props.image.childImageSharp ? this.props.image.childImageSharp.fluid.src : this.props.image
          })`,
          backgroundPosition: `center center`,
          backgroundSize: 'cover',
          backgroundAttachment: `fixed`,
        } : {backgroundColor: `#009397`}}>
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className={`mobile-logo-container ${this.state.navBarActiveClass}`}>
              <Link to="/" className="" title="Logo">
                <img src={logo} alt="Yeti Hut Shaved Ice"/>
              </Link>
            </div>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item nav-links" to="/">
                Home
              </Link>
              <Link className="navbar-item nav-links" to="/menu">
                Menu & Flavors
              </Link>
              <Link className="navbar-item nav-links" to="/jobs">
                Jobs
              </Link>
              <Link className="navbar-item nav-links" to="/about">
                About Us
              </Link>
              <Link className="navbar-item nav-links" to="/contact">
                Contact
              </Link>
            </div>
            <div className="logo-container">
              <Link to="/" className="" title="Logo">
                <img src={logo} alt="Yeti Hut Shaved Ice"/>
              </Link>
            </div>
            <div className="navbar-end has-text-centered nav-social">
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
      </nav>
    )
  }
}

export default Navbar
