import React, { Component } from 'react';
import './Contact.css';
import MapContainer from "../MapContainer/MapContainer"

class Contant extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="about-container">
        <h1>בשר ישראלי טרי ואיכותי במשלוח מהיר עד הבית</h1>
        <h2> המשלוח מגיע טרי, ארוז היטב ומאפשר לכם ליהנות מבשר איכותי במחירים הוגנים.</h2>
        <h3>משלוחים חינם !</h3>

        <div className="contact-content-div">
          <p>
            <span>אזורי משלוח: ראשון לציון, חולון, בת ים</span>
            <br />
            <span>מינימום הזמנה למשלוח 300 ₪</span>
            <br />
            <span>* את ההזמנות ניתן לבצע טלפונית או בבית העסק עצמו, ולבקש שיגיע עד לפתח דלתכם *</span>
          </p>
          <p className="address">
            <span>רחוב ירושלים 40</span>
            <span>בת ים</span>
          </p>
          <p>
            <img className="contact-phone" src="/images/contactPhone.png" alt="contactPhone" />
            <span>טלפון העסק: 03-6585484</span>
          </p>
          <br />
          <p className="end-contact">
            <span>בואו עוד היום ונסו את מיטב הבשרים שלנו !</span>
          </p>
        </div>
        <MapContainer />
      </div>
    )
  }

}

export default Contant;