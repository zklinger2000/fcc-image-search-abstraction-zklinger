# fcc-image-search-abstraction-zklinger

![FreeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

A full stack JavaScript app that allows you to search for images and see a list of recent queries.

# API Basejump: Image Search Abstraction Layer
### User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.  
1. I can paginate through the responses by adding a `?offset=2` parameter to the URL.
1. I can get a list of the most recently submitted search strings.  

### Example usage:
`https://fcc-image-search-abstraction-zklinger.herokuapp.com/api/imagesearch/` **+** `search terms` **+** `?offset=10`  
Like:  
`https://fcc-image-search-abstraction-zklinger.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10`

### Example output:
```
{
  "url": "http://google.com/somephot/here/",
  "snippet": "lolcats are funny",
  "thumbnail": "http://google.com/somephot/here/",
  "context": "http://google.com/somephot/here/"
}
```
### Example usage:
to get a list of recent search terms  
`https://fcc-image-search-abstraction-zklinger.herokuapp.com/api/latest/imagesearch/`

Built as a Node.js app using [Express 4](http://expressjs.com/).

This application came from the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed and `mongod` running.

```sh
$ git clone https://github.com/zklinger2000/fcc-image-search-abstraction-zklinger.git
$ cd fcc-image-search-abstraction-zklinger
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
