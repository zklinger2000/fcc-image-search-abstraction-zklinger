const request = require('request');
const SearchTerm = require('../models/SearchTerm');

exports.getRecentSearches = function(req, res) {
  // Find 10 most recent searchTerms
  SearchTerm.find({}, { '_id': 0, '__v': 0 }).sort({ searchDate: -1 }).limit(10).exec(function(err, searchTerms) {
    if (err) return res.status(500).send({ error: err });
    // Return searchTerms
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
  // Make a request to Google Custom Search API for term at page=offset
  request('https://www.googleapis.com/customsearch/v1?q=funny+lolcats&cx=001871838372440385157%3A7s964won_2a&num=10&start=1&key=' + process.env.GOOGLE_API_KEY, function(err, response, body) {
    if (err) return res.status(500).send({ error: err });
    // Return an array of objects
    // console.log(body);
    res.json(JSON.parse(body));
  });

};
