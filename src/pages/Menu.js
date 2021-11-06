import React, { Component } from 'react'
import 'CSS/pages/Menu.scss'

export default class Menu extends Component {
   render() {
      return (
         <div className="Menu">
            <div className="container">
               <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food7.jpg")} alt="food" onClick={() => window.location.hash = "#soups"} />
                        <h3>Soups</h3>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food6.jpg")} alt="food" onClick={() => window.location.hash = "#salads"} />
                        <h3>Salads</h3>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food5.jpg")} alt="food" onClick={() => window.location.hash = "#meats"} />
                        <h3>Meats</h3>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food4.jpg")} alt="food" onClick={() => window.location.hash = "#desserts"} />
                        <h3>Desserts</h3>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food3.jpg")} alt="food" onClick={() => window.location.hash = "#cakes"} />
                        <h3>Cakes</h3>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="item">
                        <img src={require("IMGS/food2.jpg")} alt="food" onClick={() => window.location.hash = "#ice"} />
                        <h3>Ice Creams</h3>
                     </div>
                  </div>
               </div>
               <hr/>
               <div className="row">
                  <div className="col-lg-6 col-12" id="soups">
                     <div className="raw">
                        <h1 className="mainH1">Soups</h1>
                        <div className="food">
                           <img src={require("IMGS/food2.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food3.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food5.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12" id="salads">
                     <div className="raw">
                        <h1 className="mainH1">Salads</h1>
                        <div className="food">
                           <img src={require("IMGS/food4.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food6.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food7.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr/>
               <div className="row">
                  <div className="col-lg-6 col-12" id="meats">
                     <div className="raw">
                        <h1 className="mainH1">Meats</h1>
                        <div className="food">
                           <img src={require("IMGS/food2.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food3.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food5.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12" id="desserts">
                     <div className="raw">
                        <h1 className="mainH1">Desserts</h1>
                        <div className="food">
                           <img src={require("IMGS/food4.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food6.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food7.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr/>
               <div className="row">
                  <div className="col-lg-6 col-12" id="cakes">
                     <div className="raw">
                        <h1 className="mainH1">Cakes</h1>
                        <div className="food">
                           <img src={require("IMGS/food2.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food3.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food5.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12" id="ice">
                     <div className="raw">
                        <h1 className="mainH1">Ice Creams</h1>
                        <div className="food">
                           <img src={require("IMGS/food4.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>25</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food6.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>35</h1>
                           </div>
                        </div>
                        <div className="food">
                           <img src={require("IMGS/food7.jpg")} alt="img"/>
                           <div className="info">
                              <h2>Menu Special Meal</h2>
                              <p>Fried eggs, fried bacon</p>
                           </div>
                           <div className="price">
                              <h1>45</h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
