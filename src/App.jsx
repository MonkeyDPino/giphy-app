import "App.css";
import Header from "components/Header";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route } from "wouter";
import { UserContext } from "context/UserContext";
import { Suspense, lazy } from "react";

const Search = lazy(() => import("pages/Search"));
const DetailsGif = lazy(() => import("pages/Details"));
const Home = lazy(() => import("pages/Home"));

function App() {
  return (
    <UserContext>
      <div className="App">
        <Suspense fallback={null}>
          <Header />
          <section className="App-content">
            <Route path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/gif/:id" component={DetailsGif} />
            <Route path="/search/:keyword/:rating?" component={Search} />
          </section>
        </Suspense>
      </div>
    </UserContext>
  );
}

export default App;
