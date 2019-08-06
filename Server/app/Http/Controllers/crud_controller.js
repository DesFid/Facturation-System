const config = require('../../../knexfile');
const db = require('knex')(config['development']);

const get = (req, res) => {
    db('users').select('*')
        .then(result => {
            return res.status(200).json({
                ok: true,
                action: 'GET',
                data: result
            })
        })
        .catch(err => {
                return res.status(500).json({
                    ok: false,
                    action: 'GET',
                    message: err
                })
            }
        )
};

module.exports = {
    get
};