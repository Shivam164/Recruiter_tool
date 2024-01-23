/*
    There can be three kinds of requests from the client side.
    1. Add a candidate to the database
    2. Update the details of the candidate in the database.
    3. Delete the details of the candidate from the database.
*/

const express = require("express");
const router = express.Router();

const { addCandidate, updateCandidate, deleteCandidate, getAllCandidates, getSingleCandidate } = require('../controllers/candidate');

router.post('/addCandidate', addCandidate);
router.put('/updateCandidate', updateCandidate);
router.delete('/deleteCandidate', deleteCandidate);
router.get('/getAllCandidates', getAllCandidates);
router.get('/getSingleCandidate', getSingleCandidate);

module.exports = router;