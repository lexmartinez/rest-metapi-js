import monk from 'monk';

module.exports = {

    findAll: (service, res) =>{
        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.find({}).then((docs) => {
                db.close();
                res.send(docs)
            });
        }catch (err){
            res.status(500).send(err)
        }
    },
    getById: (service, id, res) =>{
        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.findOne({_id:id}).then((docs) => {
                db.close();
                if(docs){
                    res.send(docs)
                }else{
                    res.status(404).send(docs);
                }

            });
        }catch (err){
            res.status(500).send(err)
        }
    },
    insert: (service, body, res) =>{

        if(Object.keys(body).length === 0 && body.constructor === Object){
            res.status(400).send({});
            return;
        }

        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.insert(body).then((docs) => {
                db.close();
                res.send(docs)
            });
        }catch (err){
            res.status(500).send(err)
        }
    },
    update: (service, id, body, res) =>{

        if(Object.keys(body).length === 0 && body.constructor === Object){
            res.status(400).send({});
            return;
        }

        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.update({_id:id},body).then((docs) => {
                db.close();
                res.send(docs)
            });
        }catch (err){
            res.status(500).send(err)
        }
    },
    delete: (service,id,res) =>{
        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.remove({_id:id}).then((docs) => {
                db.close();
                res.send(docs)
            });
        }catch (err){
            res.status(500).send(err)
        }
    },
    query: (service, body, res) =>{

        if(Object.keys(body).length === 0 && body.constructor === Object){
            res.status(400).send({});
            return;
        }

        try{
            const url = process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_URL;
            const db = monk(url);
            const collection = db.get(service);
            collection.find(body).then((docs) => {
                db.close();
                res.send(docs)
            });
        }catch (err){
            res.status(500).send(err)
        }
    }
} ;


