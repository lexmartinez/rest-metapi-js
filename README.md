# rest-metapi-js


Dynamic REST API:
Just create a MongoDB collection and it's all.. you got a RESTful Web Service to manage that collection.
+ Avoid any back-end implementation.
+ Feel free to focus on improving your front-end.
+ No additional commands needed.

> Based on [rest-metapi](https://github.com/lexmartinez/rest-metapi) (Java implementation)


### Quick start

```bash
# clone repo
$ git clone https://github.com/lexmartinez/rest-metapi-js

# change directory to cloned app
$ cd rest-metapi-js

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:3000](http://localhost:3000) in your browser.


# Table of Contents

* [Dependencies](#dependencies)
* [Developing](#developing)
* [Environment](#environment)
* [Production](#production)
* [Service Endpoints](#service-endpoints)
* [Github Security](#github-security)
    
 ## Dependencies
 
 What you need to run this app:
 * `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
 * Ensure you're running Node (`v7.x.x`+) and NPM (`4.x.x`+)
 
 ## Developing
 
 After you have installed all dependencies you can now start developing with:
 
 * `npm start`
 
 It will start a local server using `nodemon` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:3000`.
 
 ## Environment
 Environment variables must be configured into `.env` file located at project root

```
DB_URL = mongodb://localhost:27017/database
DB_USER = username
DB_PASSWORD = password
GITHUB_CLIENT_ID = YourGithubAppClientKey
GITHUB_CLIENT_SECRET = YourGithubAppSecretKey
```````
> For help about the Github OAuth Apps see [Github Docs - Registering Oauth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

> You also can run your compiled project locally  using the command `npm run serve`


## Service Endpoints
Every RESTful Webservice includes this endpoints:

+ findAll
```ruby
    GET: /api/{collection}
```

+ getById
```ruby
    GET: /api/{collection}/{id}
```

+ insert
```ruby
    POST: /api/{collection}
```

+ query (requires JSON body request with search prototype)
```ruby
    POST: /api/{collection}/query
```

+ update
```ruby
    PUT: /api/{collection}/{id}
```

+ delete
```ruby
    DELETE: /api/{collection}/{id}
```

## Github Security
This project includes an Github/OAuth integration using [node-github](https://github.com/octokit/node-github) library.

To use RESTful API endpoints, user must get a token access with `POST` request like that:

```json
    URL: htttp://localhost:3000/auth
    
    {
      "username":"yourusername", 
      "password":"password12344"
    }
```

Server will response a JSON like that:

```json
   {
      "token":"ddc9105ebffe8f986015284ebcc3b5750d5d9920"
   }
```

Add `metapi-js-token` request header to API request and voil&#224;, now our dynamic api is protected via Github
