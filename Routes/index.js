const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({ message: 'Get in root is ok!' })
})
router.post('/', (req, res) => {
    return res.send({ message: 'Post in root is ok!' })
})

module.exports = router