# rest-metapi-js


Dynamic REST API:
Just create a MongoDB collection and it's all.. you got a RESTful Web Service to manage that collection.
+ Avoid any back-end implementation.
+ Feel free to focus on improving your front-end.
+ No additional commands needed.

> Based on [rest-metapi](https://github.com/lexmartinez/rest-metapi) (Java implementation)

## Service Endpoints
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
