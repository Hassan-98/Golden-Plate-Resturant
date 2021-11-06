import React, { Component } from 'react'
import 'CSS/pages/Contact.scss'

export default class Contact extends Component {
   render() {
      return (
         <div className="Contact">
            <div className="container">
               <h1>Contact Us</h1>
               <div className="row">
                  <div className="col-md-6 col-12">
                     <div className="left">
                        <div className="info">
                           <p><i className="fas fa-map-marker-alt"></i> 143 - 158, Bernie Road, Kansas State, US</p>
                        </div>
                        <div className="info">
                           <p><i className="fas fa-phone-alt"></i> +11 0202 326 987</p>
                        </div>
                        <div className="info">
                           <p><i className="fas fa-envelope"></i> mail@email.com</p>
                        </div>
                        <div className="info">
                           <p><i className="fas fa-globe"></i> www.goldenplate.com</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-12">
                     <div className="right">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <textarea placeholder="Type your message" cols="50" rows="7"></textarea>
                        <button>Send Message</button>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className="map">
                        <iframe title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
