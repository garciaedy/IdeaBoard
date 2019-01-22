const User = require('../models/User')
const Idea = require('../models/Idea')

const ideaController = {
    index: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).populate('ideas').then((user) => {
            const ideas = user.ideas
            res.send(ideas)
        })
    },
    show: (req, res) => {
        Idea.findById(req.params.id).then((idea) => {
            res.send(idea)
        })
    },
    create: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).then((user) => {
            Idea.create(req.body).then((idea) => {
                user.ideas.push(idea)
                user.save()
                res.send(idea)
            })
        })
    },
    delete: (req, res) => {
        Idea.findByIdAndDelete(req.params.id).then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
        Idea.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((idea) => {
            res.send(idea)
        })
    }
}

module.exports = ideaController