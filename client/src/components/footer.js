import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons";
import './Stylesheets/Post.css'
import foto from '../assets/img/4.png'




export default function Footer() {
  return (
    <footer className=" pt-4 mt-5 bg-warning ">
      <div className="row">
        <div className="col col-12 text-center">
           <a href="#" className="youtube social ">
           <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>

           <a href="https://github.com/AsanAlacli/AskIT" className="github social">
           <FontAwesomeIcon icon={faGithub} size="2x" /> </a>

           <a href="https://github.com/AsanAlacli/AskIT" className="heroku social">
           <img  style={{paddingBottom:"14px", color:"#033859"}} src="https://img.icons8.com/windows/32/000000/heroku.png"/> </a>
        </div>
        
        <div className="col col-12 text-center"> 
            <div className="footer-copyright text-center py-3" > &copy; {new Date().getFullYear()} Copyright: <img src={foto} style={{ height: "30px", width: "75px", paddingBottom:"5px" }}></img>
            </div>
        </div>
      </div>
    </footer>
  );
}