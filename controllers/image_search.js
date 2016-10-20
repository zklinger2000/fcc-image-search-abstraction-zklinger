const SearchTerm = require('../models/SearchTerm');

exports.getRecentSearches = function(req, res) {
  // See if a shortURL with the given slug exists
  SearchTerm.find({}, { '_id': 0, '__v': 0 }).sort({ searchDate: -1 }).limit(10).exec(function(err, searchTerms) {
    if (err) return res.status(500).send({ error: err });

    res.json(searchTerms);
  });
};

exports.searchImages = function(req, res) {
  const searchTerm = req.params['0'] && req.params['0'].slice(0,128);
  const offset = req.query && req.query.offset || 0;
  console.log('searchTerm:', searchTerm);
  console.log('offset:', offset);

  // Add search term to the DB
  const newSearchTerm = new SearchTerm({ searchTerm });
  newSearchTerm.save();
  // TODO: We are here.  Need to create new Google Project, get new API key, etc.
  // Make a request to Google Custom Search API for term at page=offset
    // Return an array of objects

  res.json({ message: 'imagesearch' });
};
