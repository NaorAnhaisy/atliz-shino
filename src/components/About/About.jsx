import React, { Component } from 'react';
import './About.css';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="about-container container">
        <h1 className="br-space-after">בוטיק הבשרים של שינו ובניו - בשר של איכות וכשרות !</h1>
        <div>
          <p>מרכז הבשרים של שינו ובניו, אשר בעל מסורת ארוכה עוד מימי סבא שינו, הוקם עם אהבה לבשר ישראלי איכותי ומתוך אמונה שכל מה שאוכל טוב צריך הוא חומרי גלם מעולים.</p>
          <p>בקצבייה ניתן למצוא מגוון רחב של בשרי פרימיום משובחים, בעלות הכשרויות המהודרות ביותר.</p>
          <p>בנוסף לבשרים, אנו מחזיקים בבית העסק מוצרים נוספים כמו דגים, יינות, מנגלים, תבלינים, שמנים ועוד, וזאת על מנת לספק את מלוא הרצון לקונה שלנו, כדיי שתוכלו להכין את המנגל המשפחתי הטוב ביותר שהיה לכם.</p>
        </div>
      </div>
    )
  }

}

export default About;