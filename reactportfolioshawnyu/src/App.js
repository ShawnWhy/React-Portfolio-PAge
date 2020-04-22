import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import PortfolioPage from "./pages/portfoliopage";
// import ContactPage from "./pages/contactpage"
function App() {
  return (

    <Router>
      <div>
      <div className = "jumbotron">
    <div className="SelectionButton">
      <a href="/">about</a></div>
    <div className="SelectionButton">
      <a href="/portfolio">Portfolio</a></div>
    <div className="SelectionButton">
      <a href="/contact">Contact</a></div>
    </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
           <Route exact path="/portfolio">
            <PortfolioPage />
            </Route>
          {/* 
          // <Route exact path = "/contact">
          //   <ContactPage />
          // </Route> 
          //  <Route>
          //   <NoMatch />
          // </Route>  */}
        </Switch>
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