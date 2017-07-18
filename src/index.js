import React from "react";
import ReactDOM from "react-dom";


//import css
import "./index.css";
//import components
import NameContainer from "./containers/name-container.js";


class App extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <NameContainer />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
