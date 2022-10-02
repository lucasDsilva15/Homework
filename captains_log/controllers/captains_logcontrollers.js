const Logs = require('../models/logs')
const seed = require('../models/seed')
//INDEX
const showAllLogs = (req, res) => {
    Logs.find({}, (err, foundLog) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).render('./Index', {logs: foundLog})
            
        }
    })
}
//NEW
const showNewPage = (req, res) => {
    res.render('./New')
}
//DELETE
const deleteLog = (req, res) => {
    Logs.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}
//UPDATE
const updateCurrentLog = (req, res) => {
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true 
    } else {
        req.body.shipIsBroken = false
    }
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs/${req.params.id}`)
        }
    })
}
//CREATE
const createLog = (req, res) => {
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true 
    } else {
        req.body.shipIsBroken = false
    }
    Logs.create(req.body, (err, logCreated) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}
//EDIT
const showEditPage = (req, res) => {
    Logs.findById(req.params.id, (err, currentLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('./Edit', {logs: currentLog})
        }
    })
}

//CLEAR 
const clearDatabase = (req, res) => {
    Logs.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

//SEED
const seedDatabase = (req, res) => {
        //delete all remaining docs (if there are any)
    Logs.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Logs.create(seed.logs, (err, createdLogs) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
        }
    })
}

//SHOW
const showCurrentLog = (req, res) => {
    Logs.findById(req.params.id, (err, currentLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show' , {logs: currentLog})
        }
    })
}

module.exports = {
    showNewPage,
    createLog,
    showAllLogs,
    showCurrentLog,
    deleteLog,
    showEditPage,
    updateCurrentLog,
    seedDatabase,
    clearDatabase


}