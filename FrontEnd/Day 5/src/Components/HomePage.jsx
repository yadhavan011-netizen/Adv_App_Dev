import React, { Component } from 'react'
import '../css/HomePage.css'
// import { Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/Gifster-logos/Gifster-logos.jpeg";
class HomePage extends Component {
    state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <>
        <div className="bodyyy">
        {/* <header className="header">
            <div className="log21"></div>
            {/* <a href="#" className="logo">ChefFinder</a> 
            <nav className="nav-items">
            <div>
            <ul id="navbar" className={this.state.clicked ? 
            "#navbar active" : "#navbar"}>
                <li><a  className="active"href="#">Home</a></li>
                <Link to="/Login"><li><a href="#">Chef</a></li></Link>
                <Link to="/Login"><li><a href="#">User</a></li></Link>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar"
          className={this.state.clicked ? 
            'fas fa-times':'fas fa-bars'}>
        </i>
        </div>
            </nav>
        </header> */}
        <Navbar className="navbar-expand-lg 
        navbar-light bg-light fixed-top py-lg-0">
        <Container>
          <Navbar.Brand href="/" className='me-auto'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/Login">User Login</Nav.Link>
            <Nav.Link eventKey={2} href="/ChefLogin">
              Chef Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <main>
            <div className="intro">
            <h1>CHEF FINDER</h1>
            <p>Chefs are nutters.</p><p>They're all self-obsessed, delicate, dainty, insecure little souls, and absolute psychopaths. Every last one of them</p>
            {/* <button>Learn More</button> */}
            </div>
            <div className="achievements">
            <div className="work">
                <div className="img1"></div>
                <p className="work-heading">CHEF</p>
                <p className="work-text">The chefs are extremely talented with experience in multiple cuisines suited for your needs</p>
            </div>
            <div className="work">
            <div className="img2">
                </div>
                <p className="work-heading">On your Doorstep</p>
                <p className="work-text">The chefs will arrive at your location, on your doorstep if need be and cook the most delicious dishes you will ever experience.</p>
            </div>
            <div className="work">
            <div className="img3"></div>
                <p className="work-heading">Orders</p>
                <p className="work-text">As a Chef you no longer have to wait eternally for an order. The application will get you multiple orders in no time.</p>
            </div>
            </div>
            <div className="about-me">
            <div className="about-me-text">
                <h2>ABOUT US</h2>
                <p>Our consultation service is very cost effective. Support for screening of the chefs, choosing your Menu, arranging and scheduling of the booking will be all handled gracefully.
                </p>
            </div>
            <div className="about-me-img">
            <img src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3298637.jpg&fm=jpg" alt="me"/>
            </div>
            </div>
        </main>
        <footer className="footer">
            <div className="copy">© 2023 Developer</div>
            <div className="bottom-links">
            {/* <div className="links">
                <span>More Info</span>
                <br></br><br></br>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <br></br> */}
            <div className="links">
                <span>Social Links</span>
                <a href="/Feedback"> Feedback</a>
            </div>
            </div>
        </footer>
        </div>
      </>
    )
  }
}

export default HomePage;