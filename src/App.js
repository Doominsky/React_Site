import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Gallery, More } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/gallery" exact component={() => <Gallery />} />
          <Route path="/more" exact component={() => <More/>}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
