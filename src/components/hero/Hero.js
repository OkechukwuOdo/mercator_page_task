import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Fetchdata from "../fetchdata/Fetchdata";
import "./hero.css"

const Hero = () => {
  return (
    <div className="display">
        <div className="uper-hero">
          <div className="welcome-tag">
           <div>
          <h1>Welcome back,</h1>
          <p>Here's what happening with your Terminal table,</p>
        </div>
        <div className="date-icon">
        <p>12th October, 2022</p>
        <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="short-links">
      <a href="http"><button>Trasactions</button></a>
      <a href="http"><button>Settlemene</button></a>
      <a href="http"><button>Performance</button></a>
      <a href="http"><button>Performance</button></a>
      <a href="http"> <button className="btn">Bank Statement</button></a>
      </div>
      <div className="creadit-debit">
      <div>
      <FontAwesomeIcon icon={faChevronDown} />
        Creadit
       <p>13,212</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faChevronDown} />
         Debit
        <p>5677</p>
        </div>
      </div>
      <h3>Trasactions History</h3>
      </div>
      <div className="down-hero">
      <div className="table-display">
        <div className="table-fetch">
        <Fetchdata/>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Hero;
