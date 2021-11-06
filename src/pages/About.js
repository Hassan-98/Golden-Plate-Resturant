import React, { Component } from 'react'
import 'CSS/pages/About.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class About extends Component {
   render() {
      const settings = {
         dots: false,
         arrows: false,
         infinite: true,
         autoplay: true,
         draggable: true,
         autoplaySpeed: 6000,
         responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }
      return (
         <div className="About">
            {/* INTRO SECTION */}
            <section className="intro">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-12">
                        <div className="info">
                           <h1>History Of Golden Plate</h1>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores enim corporis vitae! At minus maxime, laborum quod debitis repudiandae vel atque similique rerum quis mollitia? Beatae recusandae placeat impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores enim corporis vitae! At minus maxime, laborum quod debitis repudiandae vel atque similique rerum quis mollitia? Beatae recusandae placeat impedit! Nulla maiores enim corporis vitae!</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-12">
                        <div className="img">
                           <img src={require("IMGS/gallery2.jpg")} alt="img"/>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="highlights">
                           <h2><i className="fas fa-star"></i> Important Highlights</h2>
                           <hr/>
                           <div className="highlight">
                              <span className="badge badge-pill badge-info">1985</span>
                              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                           </div>
                           <div className="highlight">
                              <span className="badge badge-pill badge-info">1995</span>
                              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                           </div>
                           <div className="highlight">
                              <span className="badge badge-pill badge-info">2010</span>
                              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* TOP CHEFS SECTION */}
            <section className="chefs">
               <div className="container">
                  <h1>Our Top Chefs</h1>
                  <div className="row">
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="chef">
                           <img src={require("IMGS/chef.jpg")} alt="chef"/>
                           <h2>Hassan Ali</h2>
                           <span>Chief Cook</span>
                           <p>
                              Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis…
                           </p>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="chef">
                           <img src={require("IMGS/chef3.jpg")} alt="chef"/>
                           <h2>Hassan Ali</h2>
                           <span>Buffet Manager</span>
                           <p>
                              Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis…
                           </p>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="chef">
                           <img src={require("IMGS/chef2.jpg")} alt="chef"/>
                           <h2>Hassan Ali</h2>
                           <span>Meals Specialist</span>
                           <p>
                              Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis…
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* Reviews Section */}
            <section className="reviews">
               <div className="container">
                  <h1 className="mainH1">Reviews</h1>
                  <Slider {...settings} >
                     <div className="slide">
                        <div className="img">
                           <img src={require("IMGS/chef.jpg")} alt="review"/>
                        </div>
                        <div className="review">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, asperiores animi nisi eligendi velit earum atque. Quis ducimus doloribus</p>
                           <hr/>
                           <h2>Hassan Ali</h2>
                        </div>
                     </div>
                     <div className="slide">
                        <div className="img">
                           <img src={require("IMGS/chef.jpg")} alt="review"/>
                        </div>
                        <div className="review">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, asperiores animi nisi eligendi velit earum atque. Quis ducimus doloribus</p>
                           <hr/>
                           <h2>Hassan Ali</h2>
                        </div>
                     </div>
                     <div className="slide">
                        <div className="img">
                           <img src={require("IMGS/chef.jpg")} alt="review"/>
                        </div>
                        <div className="review">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, asperiores animi nisi eligendi velit earum atque. Quis ducimus doloribus</p>
                           <hr/>
                           <h2>Hassan Ali</h2>
                        </div>
                     </div>
                     <div className="slide">
                        <div className="img">
                           <img src={require("IMGS/chef.jpg")} alt="review"/>
                        </div>
                        <div className="review">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, asperiores animi nisi eligendi velit earum atque. Quis ducimus doloribus</p>
                           <hr/>
                           <h2>Hassan Ali</h2>
                        </div>
                     </div>
                  </Slider>
               </div>
            </section>
         </div>
      )
   }
}
