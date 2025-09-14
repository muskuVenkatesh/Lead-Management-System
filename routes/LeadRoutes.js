const express = require('express');
const {createLead,getLeads} = require('../controllers/leadcontroller');
const router = express.Router();

router.post('/leads', createLead);
router.get('/getleads', getLeads);

module.exports = router;
