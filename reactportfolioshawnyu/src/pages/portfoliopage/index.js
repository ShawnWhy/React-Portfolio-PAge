import React, { useEffect, useState } from "react";
import weathericon from "./weathericon.png";
import moviemagic from "./moviemagic.png";
import burger from "./burger.png";
import meshicon from "./meshicon.png";

import "./Style.css"


const PortfolioPage = function(){
    const [information1, setInformation1]=useState(
        "invisible"
    );
    const [information2, setInformation2]=useState(
        "invisible"
    );
    const [information3, setInformation3]=useState(
        "invisible"
    );
    const [information4, setInformation4]=useState(
        "invisible"
    );
    const [icon1, setIcon1]=useState(
        "invisible"
    );
    const [icon2, setIcon2]=useState(
        "invisible"
    );
    const [icon3, setIcon3]=useState(
        "invisible"
    );
    const [icon4, setIcon4]=useState(
        "invisible"
    );
    function showProject1(){
        setIcon1("visible");
        setInformation1("visible")
        setIcon2("invisible");
        setIcon3("invisible");
        setIcon4("invisible");
        setInformation2("invisible");
        setInformation3("invisible");
        setInformation4("invisible");
    };
    function showProject2(){
    setIcon2("visible");
    setInformation2("visible");
    setIcon1("invisible");
    setIcon3("invisible");
    setIcon4("invisible");
    setInformation1("invisible");
    setInformation3("invisible");
    setInformation4("invisible");
    };
    function showProject3(){
    setIcon3("visible");
    setInformation3("visible");;
    setIcon1("invisible");
    setIcon2("invisible");
    setIcon4("invisible");
    setInformation1("invisible");
    setInformation2("invisible");
    setInformation4("invisible");
    };
        
    
    function showProject4(){
        setIcon4("visible");
        setInformation4("visible");;
        setIcon1("invisible");
        setIcon2("invisible");
        setIcon3("invisible");
        setInformation1("invisible");
        setInformation2("invisible");
        setInformation3("invisible");
      
    };
return(
    <div>
        <div className={(icon1==="invisible" ? "" : "offseticon") + " row"}>
        <div className="project1" onClick={showProject1}>
        <img src={moviemagic} alt="movie magic icon "className ={(icon1==="invisible"? "sleep":"activate")}></img>
        </div>
        <div className={"offset-md-1 "+(information1==="invisible"? "sleep":"activate")}>
            <a href="https://movie-magic-bootcamp2019newest.herokuapp.com/"><h3>Movie Magic</h3></a>
            <p>a website to search for movie recommendations and other users with same movie interests</p>
        </div>
        </div>
        <div className={(icon2==="invisible" ? "" : "offseticon") + " row"}>
        <div className="project2" onClick={showProject2}>
        <img src={burger} alt= "burgericon" className ={(icon2==="invisible"? "sleep":"activate")}></img>
        </div>
        <div className={"offset-md-1 "+(information2==="invisible"? "sleep":"activate")}>
            <a href="https://viscount-of-sandwich.herokuapp.com/"><h3>Burger Logger</h3></a>
            <p>a Fun way to Make a Sandwich using Handlebars and Mysql</p>
        </div>
        </div>
        <div className={(icon3==="invisible" ? "" : "offseticon") + " row"}>
        <div className="project3" onClick={showProject3}>
        <img src={meshicon} alt= "meshicon" className ={(icon3==="invisible"? "sleep":"activate")}></img>
        </div>
        <div className={"offset-md-1 "+(information3==="invisible"? "sleep":"activate")}>
            <a href="https://howarddaniels.github.io/the-daily-mesh/news.html"><h3>The Daily MESH</h3></a>
            <p>a website featuring news, stocks and weatherupdates</p>
        </div>
        </div>
        <div className={(icon4==="invisible" ? "" : "offseticon") + " row"}>
        <div className="project4" onClick={showProject4}>
        <img src={weathericon} alt= "weatherIcon" className ={(icon4==="invisible"? "sleep":"activate")}></img>
        </div>
        <div className={"offset-md-1 "+(information4==="invisible"? "sleep":"activate")}>
            <a href="https://shawnwhy.github.io/WeatherDash/"><h3>Weather Tracker</h3></a>
            <p>Find out about weather in Different Cities</p>
        </div>
        </div>
       
       


    </div>





)



}

export default PortfolioPage;
