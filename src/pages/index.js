import React, { Component } from 'react'
import 'CSS/pages/Home.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {

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
         <div className="Home">
            {/* SERVICES SECTION */}
            <section className="services">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="service">
                           <img src={require('IMGS/SVG/dish.svg')} alt="img"/>
                           <h3>Awesome Dishes</h3>
                           <p>Special menu everyday</p>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="service">
                           <img src={require('IMGS/SVG/healthy.svg')} alt="img"/>
                           <h3>Healthy Food</h3>
                           <p>Hygiene goes all the way</p>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="service">
                           <img src={require('IMGS/SVG/hospitality.svg')} alt="img"/>
                           <h3>Fast Delivery</h3>
                           <p>Trained Personals</p>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="service">
                           <h3><span>Golden Plate</span> is a great restaurant for your next meal. Come let’s enjoy these awesome dishes for you and your family.</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* FEATURES DISHES SECTION */}
            <section className="features">
               <div className="container">
                  <h1>Featured Dishes</h1>
                  <div className="row">
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food5.jpg')} alt="food"/>
                           <h3>Hot Cheese Pizza</h3>
                           <span>85 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food2.jpg')} alt="food"/>
                           <h3>Burger Sandwitch</h3>
                           <span>40 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food3.jpg')} alt="food"/>
                           <h3>Rice With Meat</h3>
                           <span>120 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-12">
                        <button className="more"><i className="far fa-eye mr-1" /> View More</button>
                     </div>
                  </div>
               </div>
            </section>
            {/* SPECIAL EVENTS SECTION */}
            <section className="special-events">
               <div className="container">
                  <h1 className="mainH1">Special Events</h1>
                  <div className="row">
                     <div className="col-md-3 col-12 mb-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                           <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-Weddings" role="tab" aria-controls="v-pills-Weddings" aria-selected="true">
                              <i className="fas fa-ring mr-2"></i>
                              Weddings
                           </a>
                           <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-Birthday" role="tab" aria-controls="v-pills-Birthday" aria-selected="false">
                              <i className="fas fa-birthday-cake mr-2"></i>
                              Birthday Party
                           </a>
                           <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-Party" role="tab" aria-controls="v-pills-Party" aria-selected="false">
                              <i className="fas fa-glass-cheers mr-2"></i>
                              Office Party
                           </a>
                           <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-Cakes" role="tab" aria-controls="v-pills-Cakes" aria-selected="false">
                              <i className="fas fa-gifts mr-2"></i>
                              Special Cakes
                           </a>
                        </div>
                     </div>
                     <div className="col-md-9 col-12">
                        <div className="tab-content" id="v-pills-tabContent">
                           <div className="tab-pane fade show active" id="v-pills-Weddings" role="tabpanel" aria-labelledby="v-pills-Weddings-tab">
                              <h1>Weddings</h1>
                              <p>
                                 Pellentesque augue lacus, porta vel ultricies vitae, ullamcorper eget purus. Aliquam risus mauris, suscipit eget scelerisque in, dapibus at mauris.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                              </p>
                              <button><i className="fas fa-ticket-alt mr-1"></i> Make A Reservation</button>
                              <img src={require('IMGS/food8.jpg')} alt="img"/>
                           </div>
                           <div className="tab-pane fade" id="v-pills-Birthday" role="tabpanel" aria-labelledby="v-pills-Birthday-tab">
                              <h1>Birthday Party</h1>
                              <p>
                                 Pellentesque augue lacus, porta vel ultricies vitae, ullamcorper eget purus. Aliquam risus mauris, suscipit eget scelerisque in, dapibus at mauris.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                              </p>
                              <button><i className="fas fa-ticket-alt mr-1"></i> Make A Reservation</button>
                              <img src={require('IMGS/food6.jpg')} alt="img"/>
                           </div>
                           <div className="tab-pane fade" id="v-pills-Party" role="tabpanel" aria-labelledby="v-pills-Party-tab">
                              <h1>Office Party</h1>
                              <p>
                                 Pellentesque augue lacus, porta vel ultricies vitae, ullamcorper eget purus. Aliquam risus mauris, suscipit eget scelerisque in, dapibus at mauris.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                              </p>
                              <button><i className="fas fa-ticket-alt mr-1"></i> Make A Reservation</button>
                              <img src={require('IMGS/food4.jpg')} alt="img"/>
                           </div>
                           <div className="tab-pane fade" id="v-pills-Cakes" role="tabpanel" aria-labelledby="v-pills-Cakes-tab">
                              <h1>Special Cakes</h1>
                              <p>
                                 Pellentesque augue lacus, porta vel ultricies vitae, ullamcorper eget purus. Aliquam risus mauris, suscipit eget scelerisque in, dapibus at mauris.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                                 feastSuspendisse lacinia accumsan lacus. Morbi sed nulla augue. Ut posuere suscipit augue. Phasellus quis tempor nisl, ut condimentum metus. Pellentesque nec laoreet neque. Fusce facilisis nibh id libero vehicula consectetur sit amet in justo.
                              </p>
                              <button><i className="fas fa-ticket-alt mr-1"></i> Make A Reservation</button>
                              <img src={require('IMGS/food7.jpg')} alt="img"/>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-6 col-12">
                        <div className="coupon">
                           <img src={require('IMGS/couponG.png')} alt="img"/>
                        </div>
                     </div>
                     <div className="col-sm-6 col-12">
                        <div className="coupon">
                           <img src={require('IMGS/couponW.png')} alt="img"/>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* Special Offers Section */}
            <section className="booking">
               <img src={require('IMGS/divider2.png')} alt="atlt" className="divider1" />
               <div className="overlay">
                  <div className="container">
                     <h1 className="mainH1">Book Your Table</h1>
                     <div className="book">
                        <label><i className="far fa-calendar-alt mr-1"></i> Date </label>
                        <input type="date"/>
                        <label><i className="far fa-clock mr-1"></i> Time </label>
                        <input type="time"/>
                        <label><i className="fas fa-users mr-1"></i> People </label>
                        <input type="number" placeholder="Number Of People" />
                        <button><i className="fas fa-ticket-alt mr-1"></i> Find A Table</button>
                     </div>
                  </div>
               </div>
               <img src={require('IMGS/divider2.png')} alt="atlt" className="divider2" />
            </section>
            {/* Special Offers Section */}
            <section className="special-offers">
               <div className="container">
                  <h1 className="mainH1">Special Offers</h1>
                  <div className="row">
                     <div className="col-lg-6 col-12">
                        <div className="left-box">
                           <div className="img">
                              <img src={require("IMGS/food1.jpg")} alt="img"/>
                              <span><i className="far fa-eye"></i></span>
                           </div>
                           <div className="img">
                              <img src={require("IMGS/food5.jpg")} alt="img"/>
                              <span><i className="far fa-eye"></i></span>
                           </div>
                           <div className="img">
                              <img src={require("IMGS/food6.jpg")} alt="img"/>
                              <span><i className="far fa-eye"></i></span>
                           </div>
                           <div className="img">
                              <img src={require("IMGS/food3.jpg")} alt="img"/>
                              <span><i className="far fa-eye"></i></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-12">
                        <div className="right-box">
                           <div className="offer">
                              <img src={require("IMGS/food2.jpg")} alt="img"/>
                              <div className="info">
                                 <h2>Golden Breakfast</h2>
                                 <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                              </div>
                              <div className="price">
                                 <h1>25</h1>
                              </div>
                           </div>
                           <div className="offer">
                              <img src={require("IMGS/food5.jpg")} alt="img"/>
                              <div className="info">
                                 <h2>Golden Lunch</h2>
                                 <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                              </div>
                              <div className="price">
                                 <h1>45</h1>
                              </div>
                           </div>
                           <div className="offer">
                              <img src={require("IMGS/food6.jpg")} alt="img"/>
                              <div className="info">
                                 <h2>Golden Meal</h2>
                                 <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
                              </div>
                              <div className="price">
                                 <h1>75</h1>
                              </div>
                           </div>
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
