import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/userpage" component={UserPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
