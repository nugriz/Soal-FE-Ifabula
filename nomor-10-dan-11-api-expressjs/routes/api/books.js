const express = require('express')
const router = express.Router()
const Book = require('../../models/Book')

// Validation for No. 11
const validateHeaders = (req, res, next) => {
    const userIdHeader = req.get('User-id');
    const scopeHeader = req.get('Scope');

    if (userIdHeader === 'ifabula' && scopeHeader === 'user') {
        next();
    } else {
        res.status(401).json({
        responseCode: 401,
        responseMessage: "UNAUTHORIZED"
        });
    }
};

router.get('/', validateHeaders, (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

module.exports = router;