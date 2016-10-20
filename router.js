const ImageSearch = require('./controllers/image_search');

module.exports = function(app) {
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ message: 'Super secret code is ABC123' });
  // });

  app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.get('/api/imagesearch/*', ImageSearch.searchImages);

  app.get('/api/latest/imagesearch/', ImageSearch.getRecentSearches);
  // app.param('postId', Blogger.blogPostById);
};
