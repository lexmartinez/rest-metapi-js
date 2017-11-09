import express from 'express';
import * as db from '../db' ;
import GitHubApi from 'github';

const router  = express.Router();
const github = new GitHubApi();

const auth = function (req, res, next) {

    const token = req.headers['metapi-js-token'];

    if(!token){
        res.status(401).send({code:401, message:'Unauthorized'});
        return;
    }

    github.authenticate({
        type: 'basic',
        username:  process.env.GITHUB_CLIENT_ID,
        password:  process.env.GITHUB_CLIENT_SECRET
    });

    github.authorization.check({
        client_id: process.env.GITHUB_CLIENT_ID,
        access_token:token
    }, (err, response)=>{
        if(err) {
            console.log(err)
            res.status(401).send(err.message|err)
            return;
        }
        next();
    })
};

router.use(auth)

router.get('/:collection', (req, res) => {
    db.findAll(req.params.collection, res);
});

router.get('/:collection/:id', (req, res) => {
    db.getById(req.params.collection, req.params.id, res)
});

router.post('/:collection', (req, res) => {
    db.insert(req.params.collection, req.body, res)
});

router.post('/:collection/query', (req, res) => {
    db.query(req.params.collection, req.body, res)
});

router.put('/:collection/:id', (req, res) => {
    db.update(req.params.collection, req.params.id, req.body, res)
});

router.delete('/:collection/:id', (req, res) => {
    db.delete(req.params.collection, req.params.id, res)
});

module.exports = router;