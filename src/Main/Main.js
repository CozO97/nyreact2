import React, {Component} from "react";
import Form from "./Form";
import Search from "./Search";
import Saved from "./Saved";

let axios = require("./helpers");

var Main = React.createClass({

  getInitialState: function() {
    return {searchTerm: "", startYear: "", endYear: "", results: "", article: []};
  },

  componentDidMount: function() {
    axios.getArticle().then(function(response) {
        
      if (response !== this.state.article) {
        
        this.setState({article: response.data});
      }
    }.bind(this));
  },


  mainSearch: function() {
    console.log("THIS STATE " + this.state)
    axios.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
          
          for (var i = 0; i < data.length; i++) {
            
            this.setState({results: data[i]});

            
          }


      } 
    }.bind(this)); 
  },
  
  setTerm: function(term) {
    this.setState({searchTerm: term});
  },
  setSyear:function(startYear) {
    this.setState({ startYear: startYear });
  },
  setEyear: function (endYear) {
    this.setState({ endYear: endYear });
  },
  
  render: function() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">

          <div className="col l12">

            <Form setTerm={this.setTerm} setSyear = {this.setSyear} setEyear = {this.setEyear}
             term ={this.state.term} sYear={this.state.sYear} eYear={this.state.eYear} />
             <button  className = "btn waves-effect waves-light" onClick={ () => { this.mainSearch()}}>Search</button>

          </div>

          <div className="col l12">

            <Search Results={this.state.results}/>

          </div>

        </div>

        <div className="row">

          <div className="col l12">

            <Saved Article={this.state.article}/>

          </div>

        </div>

      </div>
    );
  }
});

export default Main;
// module.exports = Main;