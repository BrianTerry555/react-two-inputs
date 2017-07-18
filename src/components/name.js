import React from "react";


class Name extends React.Component {
  render() {
    return (
      <div className="input">
        <h3>Input your Name</h3>
        <input onChange={(event)=>{this.props.handleInput("firstname", event);}} value={this.props.input.firstname} placeholder="Firstname"/>
        <input onChange={(event)=>{this.props.handleInput("lastname", event);}} value={this.props.input.lastname} placeholder="Lastname"/>
        <button onClick={()=>{this.props.handleSubmit();}}>Submit</button>
        <h2>{this.props.firstname}</h2>
        <h2>{this.props.lastname}</h2>
      </div>
    );
  }
}

export default Name;
