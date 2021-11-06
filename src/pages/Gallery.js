import React, { Component } from 'react'
import 'CSS/pages/Gallery.scss'
import Isotope from 'isotope-layout'

export default class Gallery extends Component {
   componentDidMount () {
      var elem = document.querySelector('.images');
      window.ISO = new Isotope(elem, {
         itemSelector: '.img',
         layoutMode: 'fitRows'
      });
   }
   filter = (type) => {
      window.ISO.arrange({filter: type === "all" ? "*" : "." + type})
   }
   render() {
      return (
         <div className="Gallery">
            <div className="buttons">
               <div className="container">
                  <h1>RESTAURANT GALLERY</h1>
                  <hr/>
                  <button onClick={() => this.filter('all')}>All</button>
                  <button onClick={() => this.filter('food')}>Food</button>
                  <button onClick={() => this.filter('indoor')}>Indoor</button>
                  <button onClick={() => this.filter('outdoor')}>Outdoor</button>
               </div>
            </div>
            <div className="images">
               <div className="img all food">
                  <img src={require("IMGS/gallery1.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all indoor">
                  <img src={require("IMGS/gallery2.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all outdoor">
                  <img src={require("IMGS/gallery3.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all indoor">
                  <img src={require("IMGS/gallery4.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all food">
                  <img src={require("IMGS/gallery5.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all indoor">
                  <img src={require("IMGS/gallery6.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all outdoor">
                  <img src={require("IMGS/gallery7.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all food">
                  <img src={require("IMGS/gallery8.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all indoor">
                  <img src={require("IMGS/gallery9.jpg")} alt="gallery-img"/>
               </div>
               <div className="img all outdoor">
                  <img src={require("IMGS/gallery10.jpg")} alt="gallery-img"/>
               </div>
            </div>
         </div>
      )
   }
}
