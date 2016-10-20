const SearchTerm = require('../models/SearchTerm');

exports.getRecentSearches = function(req, res) {
  // See if a shortURL with the given slug exists
  SearchTerm.find({}).sort('-lastSearched').limit(10).exec(function(err, searchTerms) {
    if (err) return res.status(500).send({ error: err });
    // If a shortURL DOES exist update requestCount
    // Then, return the url of the existing API endpoint
    res.json(searchTerms);
  });
};

exports.searchImages = function(req, res) {
  const searchTerm = req.params['0'] && req.params['0'].slice(0,128);
  const offset = req.query && req.query.offset || 0;
  console.log('searchTerm:', searchTerm);
  console.log('offset:', offset);
  res.json({ message: 'imagesearch' });
};
