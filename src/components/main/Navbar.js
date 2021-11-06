import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "CSS/components/Navbar.scss";

class Navbar extends Component {
   state = {
      announcement: true
   }

   closeAnnouncement = () => {
      this.setState({announcement: false})
   }

   componentDidMount () {
      const scroll = this.props.location.pathname === "/" ? 710 : 480;
      window.onscroll = () => {
         if (window.scrollY >= scroll) {
            document.querySelector('.Navbar').style.background = "rgba(0, 0, 0, 0.9) none repeat scroll 0% 0% / auto padding-box border-box"
         } else {
            document.querySelector('.Navbar').style.background = "rgba(0, 0, 0, 0.4) none repeat scroll 0% 0% / auto padding-box border-box"
         }
      }
   }

   render() {
      return (
         <div className="Nav-Container  fixed-top">
            <div className="announcement" style={{display: this.state.announcement ? "block" : "none"}}>
               <p><span className="badge badge-light">HOT</span> Special Offer Discount Day All Dishes Starts From 25$</p>
               <i className="fas fa-times" onClick={this.closeAnnouncement}></i>
            </div>
            <div className="authDiv">
               <div className="container">
                  <div className="left">
                     <p><i className="fas fa-phone-square-alt"></i> Call : 888-654-3210</p>
                  </div>
                  <div className="right">
                     <i class="fas fa-sign-in-alt"></i>
                     <a href="/login">Login</a>
                     <span className="cart"><i class="fas fa-shopping-cart"></i> My Cart <span>(0)</span></span>
                  </div>
               </div>
            </div>
            <nav className="Navbar navbar navbar-expand-lg">
               <div className="container">
                  <a className="navbar-brand" href="/">
                     GP
                  </a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarNav"
                     aria-controls="navbarNav"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <i className="fas fa-grip-lines icon-toggler"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">
                              Home
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/about" ? "nav-link active" : "nav-link"} href="/about">
                              About
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/menu" ? "nav-link active" : "nav-link"} href="/menu">
                              Menu
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/shop" ? "nav-link active" : "nav-link"} href="/shop">
                              Store
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/gallery" ? "nav-link active" : "nav-link"} href="/gallery">
                              Gallery
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className={this.props.location.pathname === "/contact" ? "nav-link active" : "nav-link"} href="/contact">
                              Contact
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
         );
  }
}

export default withRouter(Navbar);
