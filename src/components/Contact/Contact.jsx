import React, { Component } from 'react';
import './Contact.css';

class Contant extends Component {

    render() {
      return (
        <div className="about-container container">
          <h1>בשר ישראלי טרי ואיכותי במשלוח מהיר עד הבית</h1>
          <h2> המשלוח מגיע טרי, ארוז היטב ומאפשר לכם ליהנות מבשר איכותי במחירים הוגנים.</h2>
          <h3>משלוחים חינם !</h3>

          <br/>
          <div className="contact-content-div">
            <p>
                <span>אזורי משלוח: ראשון לציון, חולון, בת ים</span>
                <br/>
                <span>מינימום הזמנה למשלוח 150 ₪</span>
                <br/>
                <span>* את ההזמנות ניתן לבצע טלפונית או בבבית העסק עצמו, ולבקש שיגיע עד לפתח דלתכם *</span>
            </p>
            <p>
                <div>רחוב ירושלים 40</div>
                <div>בת ים</div>
            </p>
            <p>
                טלפון העסק: 03-6585484 
            </p>
            <br/>
            <p className="end-contact">
                בואו עוד היום ונסו את מיטב הבשר אצלנו !
            </p>
          </div>
        </div>
      ) 
    }

}

export default Contant;