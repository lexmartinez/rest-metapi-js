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

### Service Endpoints
Every RESTful Webservice includes this endpoints:

+ findAll
```java
    GET: /api/{collection}
```

+ getById
```java
    GET: /api/{collection}/{id}
```

+ insert
```java
    POST: /api/{collection}
```

+ query
```java
    POST: /api/{collection}/query
    //REQUIRES JSON Body request with search prototype
```

+ update
```java
    PUT: /api/{collection}/{id}
```

+ delete
```java
    DELETE: /api/{collection}/{id}
```

# Table of Contents

* [Getting Started](#getting-started)
* [Dependencies](#dependencies)
* [Developing](#developing)
* [Production](#production)
    
 ## Dependencies
 
 What you need to run this app:
 * `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
 * Ensure you're running Node (`v7.x.x`+) and NPM (`4.x.x`+)
 
 ## Developing
 
 After you have installed all dependencies you can now start developing with:
 
 * `npm start`
 
 It will start a local server using `nodemon` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:3000`.
 
 
## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

> You also can run your compiled project locally  using the command `npm run serve`


