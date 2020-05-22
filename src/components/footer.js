import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (

    <div className="footerContainer">
       <Link to="/"><button className="primary" type="button">&#60; Anterior </button></Link>
       <Link className="next" to="/logrado/"> <button className="primary" type="button">Siguiente  &#62;</button></Link>
    </div>
)


export default Footer