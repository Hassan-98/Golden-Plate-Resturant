import React, { Component } from 'react';
import 'CSS/components/Footer.scss'

class Footer extends Component {
   render() {
      return (
         <footer className="Footer">
            <div className="overlay">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6 col-12">
                        <h4>Opening Hours</h4>
                        <p>MON- FRI: 08:00 AM – 10:00 PM</p>
                        <p>SAT – SUN: 10:00 AM – 11:00 PM</p>
                     </div>
                     <div className="col-md-6 col-12">
                        <h4>Contact Us</h4>
                        <p>23 Royal Street, Sohag Avenue, Sohag</p>
                        <p>RESERVATIONS NUMBER: <span>+00 25 854 78521</span></p>
                     </div>
                     <div className="col-12">
                        <hr/>
                        <h5>All Rights Reserved &copy; 2020 | Hassan Ali</h5>
                     </div>
                  </div>
               </div>
            </div>
               <img src={require('IMGS/divider2.png')} alt="atlt" className="divider" />
         </footer>
      );
   }
}

export default Footer;