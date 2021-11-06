import React, { Component } from 'react'
import 'CSS/pages/Shop.scss'

export default class Shop extends Component {
   render() {
      return (
         <div className="Shop">
            <div className="container">
               <input type="search" placeholder="Search Proudcts" />
               <hr/>
            </div>
            <div className="items">
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
                           <img src={require('IMGS/food4.jpg')} alt="food"/>
                           <h3>Fruits Plate</h3>
                           <span>120 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>   
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food7.jpg')} alt="food"/>
                           <h3>Rice With Meat</h3>
                           <span>85 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food8.jpg')} alt="food"/>
                           <h3>Orange Juice</h3>
                           <span>40 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food3.jpg')} alt="food"/>
                           <h3>Tapola With Salad</h3>
                           <span>120 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                  </div>
               </div> 
            </div>
            <hr/>
            <div className="items">
               <div className="container">
                  <h1>Popular Dishes</h1>
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
                           <img src={require('IMGS/food4.jpg')} alt="food"/>
                           <h3>Fruits Plate</h3>
                           <span>120 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>   
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food7.jpg')} alt="food"/>
                           <h3>Rice With Meat</h3>
                           <span>85 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food8.jpg')} alt="food"/>
                           <h3>Orange Juice</h3>
                           <span>40 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-6 col-12">
                        <div className="feature-dish">
                           <img src={require('IMGS/food3.jpg')} alt="food"/>
                           <h3>Tapola With Salad</h3>
                           <span>120 LE</span>
                           <button><i className="fas fa-cart-plus mr-1" /> Add To Cart</button>
                        </div>
                     </div>
                  </div>
               </div> 
            </div>
         </div>
      )
   }
}
