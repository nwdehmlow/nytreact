import axios from "axios";

const api = {
  // searches for articles
  searchNYT: function(topic, startYear, endYear) {
    const authKey = '01e89f0d663c425b878d283fe5b0d7ea';
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + 
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);

  },
  // gets saved articles
  getArticle: function() {
    return axios.get("/api/saved/");
  },
  // saves article to db
  saveArticle: function(id) {
    return axios.post("/api/saved/" + id);
  },
  // deletes article from db
  deleteArticle: function(id) {
    return axios.delete("/api/saved/", id);
  }
};

export default api;