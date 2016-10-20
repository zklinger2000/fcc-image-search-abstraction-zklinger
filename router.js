const searchTerms = require('./controllers/searchTerms');

module.exports = function(app) {
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ message: 'Super secret code is ABC123' });
  // });

  app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.post('/api/imagesearch/', searchTerms.create);
  // app.param('postId', Blogger.blogPostById);
};
