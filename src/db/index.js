import mongodb from 'mongodb';

module.exports = {

    findAll: (collection, res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    },
    getById: (collection, id, res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    },
    insert: (collection, body, res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    },
    update: (collection, id, body, res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    },
    delete: (collection,id,res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    },
    query: (collection, body, res) =>{
        console.log(collection);
        res.send("collection is set to " + collection);
    }
} ;


