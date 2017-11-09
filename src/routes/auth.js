import express from 'express';
import GitHubApi from 'github';

const router  = express.Router();
const github = new GitHubApi();

router.post('/', (req, res) => {
    if(Object.keys(req.body).length === 0 && req.body.constructor === Object){
        res.status(401).send({});
        return;
    }else{
        github.authenticate({
            type: 'basic',
            username: req.body.username,
            password: req.body.password
        });

        github.authorization.create({
            scopes: ['user'],
            note: 'rest-metapi-js login at '+new Date().getTime(),
            note_url: 'https://github.com/lexmartinez/rest-metapi-js',
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            headers: {}
        },  (err, response) => {
            if (err) {
                res.status(401).send(err.message||err);
                return;
            }
            res.send({token:response.data.token})
        })
    }
});

module.exports = router;