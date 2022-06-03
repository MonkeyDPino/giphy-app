import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DetailsGif from "./pages/Details";
import { Link, Route } from "wouter";
import StaticContext from "./context/StaticContext";
import StaticContext from "./context/StaticContext";

function App() {
  return (
    <StaticContext.Provider value={{name:"Juan"}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App__logo" alt="Logo" src="/logo.png" />
          </Link>
          <Route path="/" component={Home} />
          <Route path="/gif/:id" component={DetailsGif} />
          <Route path="/search/:keyword" component={Search} />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
