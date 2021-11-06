import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar'
import 'CSS/components/Header.scss'

class Header extends Component {

   altTitle = () => {
      if (this.props.location.pathname !== '/') {
         var title = this.props.location.pathname.split("/")[1]
         var rep = title.split('')
         rep[0] = title[0].toUpperCase()
         title = rep.join('')
         return title
      } else {
         return ""
      }
   }

   state = {
      alt: this.props.location.pathname === '/' ? false : true,
      altTitle: this.altTitle()
   }

   render () {
      return (
         <header className={this.state.alt ? "Header alt" : "Header"}>
            <div className="overlay">
               <Navbar />
               {
                  !this.state.alt ?
                  <div className="header">
                     <img src={require('IMGS/SVG/gp.svg')} alt="img" />
                     <h1>Golden <span>Plate</span></h1>
                     <p>Proident do sit anim dolor cillum laborum ad deserunt. Non consectetur mollit aliquip dolore aute sit dolor commodo anim reprehenderitt veniam occaecat proident magna. Exercitation eiusmo.</p>
                  </div>
                  :
                  <div className="header">
                     <img src={require('IMGS/SVG/gp.svg')} alt="img" />
                     <h1>{this.state.altTitle}</h1>
                     <h4>Home - {this.state.altTitle}</h4>
                     <h3>GP</h3>
                  </div>
               }
               <img src={require('IMGS/divider2.png')} alt="atlt" className="divider" />
            </div>
         </header>
      )
   }
}

export default withRouter(Header)