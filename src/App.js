import "App.css";
// import Home from "pages/Home";
// import Search from "pages/Search";
// import DetailsGif from "pages/Details";
import Header from "components/Header"
import Login from "pages/Login"
import { Link, Route } from "wouter";
import {UserContext} from "context/UserContext";
import { Suspense, lazy } from "react";

const Search = lazy(() => import("pages/Search"));
const DetailsGif = lazy(() => import("pages/Details"));
const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <UserContext>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header/>
            <Link to="/" className="App__link">
              <img className="App__logo" alt="Logo" src="/logo3.png" />
            </Link>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/gif/:id" component={DetailsGif} />
            <Route path="/search/:keyword/:rating?" component={Search} />
          </section>
        </Suspense>
      </div>
    </UserContext>
  );
}

export default App;
