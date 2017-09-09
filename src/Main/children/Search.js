let React = require("react");


let Results = React.createClass({
  render: function() {
    return (
      <div className="card indigo lighten-5">
        <div className="card-content white-text">
          <span className="card-title black-text">Results</span>
          <h2>{this.props.results}</h2>

          <button className="btn waves-effect waves-light" name="save">
            SAVE
          </button>
        </div>
      </div>
    ); 
  } 

}); 

module.exports = Results;