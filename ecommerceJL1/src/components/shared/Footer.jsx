import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <div className = 'footer-container'>
      <h1 className = 'footer__title'>©️ All rights reserved 2023</h1>
      <ul className = 'footer__social-network'>
        <li className = 'footer__social'><i className = 'bx2 bx bxl-linkedin'></i></li>
        <li className = 'footer__social'><i className = 'bx2 bx bxl-instagram' ></i></li>
        <li className = 'footer__social'><i className = 'bx2 bx bxl-youtube' ></i></li>
      </ul>
    </div>
  )
}

export default Footer