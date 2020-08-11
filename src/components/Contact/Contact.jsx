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
                  <a href="https://www.google.com/maps/place/%D7%90%D7%98%D7%9C%D7%99%D7%96+%D7%A9%D7%99%D7%A0%D7%95+%D7%95%D7%91%D7%A0%D7%99%D7%95+-+%D7%9E%D7%A8%D7%9B%D7%96+%D7%94%D7%91%D7%A9%D7%A8+%D7%94%D7%97%D7%9C%D7%A7%E2%80%AD/@32.0258858,34.7508197,17z/data=!3m1!4b1!4m5!3m4!1s0x1502b33ed1b34ae5:0x4da34c4241f150c!8m2!3d32.0258813!4d34.7486364">
                    <img className="place-phone-icon" src="/images/MapPinIcon.png" alt="contactPhone" />
                  </a>
                </td>
                <td>
                  <a className="place-phone-href" href="https://www.google.com/maps/place/%D7%90%D7%98%D7%9C%D7%99%D7%96+%D7%A9%D7%99%D7%A0%D7%95+%D7%95%D7%91%D7%A0%D7%99%D7%95+-+%D7%9E%D7%A8%D7%9B%D7%96+%D7%94%D7%91%D7%A9%D7%A8+%D7%94%D7%97%D7%9C%D7%A7%E2%80%AD/@32.0258858,34.7508197,17z/data=!3m1!4b1!4m5!3m4!1s0x1502b33ed1b34ae5:0x4da34c4241f150c!8m2!3d32.0258813!4d34.7486364">
                    <span>רחוב ירושלים 40</span>
                    <br />
                    <span>בת ים</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="tel:03-6585484">
                    <img className="place-phone-icon" src="/images/contactPhone.png" alt="contactPhone" />
                  </a>
                </td>
                <td>
                  <a className="place-phone-href" href="tel:03-6585484">
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