const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.id).then((user) => {
            res.send(user)
        })
    },
    create: (req, res) => {
        User.create(req.body).then((user) => {
            res.send(user)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id).then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((user) => {
            res.send(user)
        })
    }
}

module.exports = userController