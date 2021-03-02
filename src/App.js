import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import "./css/app.css";
import { Route, Switch } from "react-router";
import FreeStocks from "./Pages/FreeStocks";
import Portfolio from "./Pages/Portfolio";
import Cash from "./Pages/Cash";
import Messages from "./Pages/Messages";
import Account from "./Pages/Account";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <Switch>
          <Route path="/free-stocks" component={FreeStocks}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/cash" component={Cash}></Route>
          <Route path="/messages" component={Messages}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
