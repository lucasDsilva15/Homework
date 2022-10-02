const express = require('express')
const router = express.Router()
const { showNewPage, createLog, showAllLogs, showCurrentLog, deleteLog, showEditPage, updateCurrentLog, clearDatabase, seedDatabase,  } = require('../controllers/captains_logcontrollers')
//I.N.D.U.C.E.S. 

//INDEX
router.get('/', showAllLogs )
//NEW
router.get('/new', showNewPage)
//DELETE
router.delete('/:id', deleteLog)
//UPDATE
router.put('/:id', updateCurrentLog)
//CREATE
router.post('/', createLog)
//EDIT
router.get('/:id/edit', showEditPage)
//CLEAR
router.get('/clear', clearDatabase)
//SEED
router.get('/seed', seedDatabase)
//SHOW
router.get('/:id', showCurrentLog)

module.exports = router