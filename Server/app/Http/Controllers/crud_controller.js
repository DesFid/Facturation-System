const config = require('../../../knexfile');
const db = require('knex')(config['development']);

const get = (req, res) => {
    const {table} = req.query;
    db(table).select('*')
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

const update = (req, res) => {
    const {table, id, params} = req.body;
    db(table).update(params).where('id', id)
        .then(result => {
            return res.status(200).json({
                ok: true,
                action: 'UPDATE',
                data: result
            })
        })
        .catch(err => {
                return res.status(500).json({
                    ok: false,
                    action: 'UPDATE',
                    message: err
                })
            }
        )
};

const put = (req, res) => {
    const {table, params} = req.body;
    db(table).insert(params)
        .then(result => {
            return res.status(200).json({
                ok: true,
                action: 'PUT',
                data: result
            })
        })
        .catch(err => {
                return res.status(500).json({
                    ok: false,
                    action: 'PUT',
                    message: err
                })
            }
        )
};

const del = (req, res) => {
    console.log(req.query);
    const {table, id} = req.query;
    db(table).where('id', id).del()
        .then(result => {
            return res.status(200).json({
                ok: true,
                action: 'DELETE',
                data: result
            })
        })
        .catch(err => {
                return res.status(500).json({
                    ok: false,
                    action: 'DELETE',
                    message: err
                })
            }
        )
};

module.exports = {
    get,
    put,
    update,
    del
};