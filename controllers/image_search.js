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
  const searchTerm = req.params['0'] && req.params['0'].slice(0,96);
  const offset = req.query && Number(req.query.offset) || 1;
  console.log('searchTerm:', searchTerm);
  console.log('offset:', offset);

  // Add search term to the DB
  const newSearchTerm = new SearchTerm({ searchTerm });
  newSearchTerm.save();
  // Make a request to Google Custom Search API for term at page=offset
  request('https://www.googleapis.com/customsearch/v1?q=' + searchTerm +
          '&cx=' + process.env.SEARCH_ENGINE_ID +
          '&num=10&safe=high&start=' + offset +
          '&key=' + process.env.GOOGLE_API_KEY, function(err, response, body) {
    if (err) return res.status(500).send({ error: err });
    // Format search results
    const results = JSON.parse(body).items.reduce((acc, item) => {
      acc.push({
        url: item.pagemap.cse_image && item.pagemap.cse_image[0] && item.pagemap.cse_image[0].src,
        thumbnail: item.pagemap.cse_thumbnail && item.pagemap.cse_thumbnail[0] && item.pagemap.cse_thumbnail[0].src,
        snippet: item.snippet,
        title: item.title,
        context: item.link
      });
      return acc;
    }, []);
    // Return an array of formatted search results
    res.contentType('application/json');
    res.send(results);
  });

};
