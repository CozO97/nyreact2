'use strict'

let React = require("react");


let Form = React.createClass({

  getInitialState: function() {
    return {term: "", startYear: "", endYear: ""};
  },
  
  handleSubmit: function(event) {

    event.preventDefault();

    this.props.setTerm(this.state.term);
    this.props.setSyear(this.state.startYear);
    this.props.setEyear(this.state.endYear);


    this.setState({term: "", startYear: "", endYear: ""});


  },
  render: function() {
    return (

                <div className="col l12">
                  <h5>SEARCH CITY</h5>
                 <form onSubmit={this.handleSubmit}>
                      <div className="row">

                        <div className="input-field col l12">
                          <input value={this.props.term} type="text" className="input-field validate" id="term" onChange={(e) => {this.props.setTerm(e.currentTarget.value)}} required/>
                          <label>TOPIC:
                          </label>
                        </div>

                        <div className="input-field col l6">
                          <input value={this.props.sYear} type="text" className="input-field col l12 validate" id="startYear" onChange={(e) => {this.props.setSyear(e.currentTarget.value)}} required/>
                          <label>START YEAR:
                          </label>
                        </div>

                        <div className="input-field col l6">
                          <input value={this.props.eYear} type="text" className="input-field  col l12 validate" id="endYear" onChange={(e) => { this.props.setEyear(e.currentTarget.value)}} required/>
                          <label>END YEAR:
                          </label>
                        </div>

                        <br/>

                         
                      </div>
                </form>
                </div>
              );
                     }
});

export default Form;
// module.exports = Form;
