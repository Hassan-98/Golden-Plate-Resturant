import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "MainCom/Header";
import Footer from "MainCom/Footer";
import Home from "PAGES";
import About from "PAGES/About";
import Shop from "PAGES/Shop";
import Gallery from "PAGES/Gallery";
import Contact from "PAGES/Contact";
import Reservation from "PAGES/Reservation";
import Menu from "PAGES/Menu";

export default class Layout extends Component {
   state = {
      loading: true
   }
   componentDidMount () {
      window.onload = () => {
         setTimeout(() => {
            this.setState({loading: false})
         }, 1000);
      }
   }
  render() {
    return (
      <div className="resturant-app">
        {this.state.loading ? (
          <div className="loadingio-spinner-wedges-9garct92ed9">
            <div className="ldio-kzcuxtvqtwp">
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/menu" component={Menu} />
            <Footer />
          </BrowserRouter>
        )}
      </div>
    );
  }
}
