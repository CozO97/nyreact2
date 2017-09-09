
let axios = require("axios");



let helper = {
  runQuery: function(qTerm, sYear, eYear) {
    console.log("Query Run");
    
    var qTerm = qTerm.trim();
    var sYear = sYear.trim();
    var eYear = eYear.trim();

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "9173adc3ff5d44dbbf60feb5b15a0969",
        "q": qTerm,
        "begin_date": sYear + "0101",
        "end_date": eYear + "0101"
      }

    })
    .then(function(results) {
      
      return results.data.response.docs;
    });
  },

  getArticle: function() {
    return axios.get("/api/saved")
  },
  postArticle: function(title,url) {
    return axios.post("/api/saved" , {
      title : title,
      url: url
    })
  }
};

module.exports = helper;