import express from 'express';
import * as db from '../db' ;
const router  = express.Router();

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