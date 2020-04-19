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
          <table className="place-phone-table">
            <tbody>
              <tr>
                <td>
                  <img className="place-phone-icon" src="/images/MapPinIcon.png" alt="contactPhone" />
                </td>
                <td>
                  <span>רחוב ירושלים 40</span>
                  <br />
                  <span>בת ים</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="tel:03-6585484">
                    <img className="place-phone-icon" src="/images/contactPhone.png" alt="contactPhone" />
                  </a>
                </td>
                <td>
                  <a className="phone" href="tel:03-6585484">
                    <span>טלפון העסק: 03-6585484</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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