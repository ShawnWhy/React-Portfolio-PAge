import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import HomePage from "./pages/homepage";
import PortfolioPage from "./pages/portfoliopage";
import ContactPage from "./pages/contactpage"
import Style from "./App.css"

function App() {
  const[button, setButton]=useState(
    {one:"invisible",
    two:"invisible",
    three:"invisible"}
  )

  const[dropDowncolor, setDropDowncolor]=useState(
    "white"
  )
  const seeLinks=function(){
    setDropDowncolor("black");
    setTimeout(() => {
      setButton({...button, one:"visible"})
      
    }, 100);
    setTimeout(() => {
      setButton({...button, one:"visible", two:"visible"})
      
    }, 200);
    setTimeout(() => {
      setButton({...button, one:"visible", two:"visible", three:"visible"})
      
    }, 300);

  }

  return (
    <Router>
      <div>
      <div className = "jumbotron">
      <div className={"drop " + dropDowncolor} onClick={seeLinks}>
        <div className="arrow down"></div>
    
    </div>
    <div className={"SelectionButton "+ button.one}>
      <a href="/">About</a></div>
      <div className={"SelectionButton "+button.two}>
      <a href="/portfolio">Portfolio</a></div>
      <div className={"SelectionButton "+button.three}>
      <a href="/contact">Contact</a></div>
    </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
           <Route exact path="/portfolio">
            <PortfolioPage />
            </Route>
           
          <Route exact path = "/contact">
             <ContactPage />
         </Route> 
          
        </Switch>
        <div className="footer">@ 2020 copyright: Shawn Yu</div>
      
      </div>
     </Router>

  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div>
//         <NavTabs />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/blog" component={Blog} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   );
// }