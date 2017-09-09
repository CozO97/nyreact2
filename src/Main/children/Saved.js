let React = require("react");


let Article = React.createClass({
 
  render: function() {
    return (
      <div className = "card indigo lighten-5">
          <div className = "card-content">
                <div className = "card-title"> Saved Articles </div>

          
          {this.props.article.map(function(search, i) {
            return (
              <p key={i}>{search.title} - {search.date}</p>
            );
          })}

           <button className="btn waves-effect waves-light" name="delete">
            DELETE
          </button>
         </div>
      </div>
    );
  }
});
module.exports = Article;