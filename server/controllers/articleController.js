const Article = require("../models");

// Defining methods for the booksController
module.exports = {
  find: function(req, res) {
    db.Article
      .find()
      .then(function(doc){res.json(doc);})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(doc => doc.remove())
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  }
};
