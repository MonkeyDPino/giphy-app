import "App.css";
// import Home from "pages/Home";
// import Search from "pages/Search";
// import DetailsGif from "pages/Details";
import { Link, Route } from "wouter";
import StaticContext from "context/StaticContext";
import { Suspense, lazy } from "react";

const Search = lazy(() => import("pages/Search"));
const DetailsGif = lazy(() => import("pages/Details"));
const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <StaticContext.Provider value={{ name: "Juan" }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <img className="App__logo" alt="Logo" src="/logo.png" />
            </Link>
            <Route path="/" component={Home} />
            <Route path="/gif/:id" component={DetailsGif} />
            <Route path="/search/:keyword" component={Search} />
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
