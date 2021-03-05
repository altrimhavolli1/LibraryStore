const Book = require('../models/Books');

module.exports.findAll = async (req, res) => {
    try{
        await Book.find(req.body).then((books) => {
            res.send(books);
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

module.exports.findOne = async (req, res) => {
    try {
        Book.findOne({_id: req.params.id}).then((book) => {
            res.send(book);
        })
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

module.exports.create = async (req, res) => {
    try {
        Book.create(req.body).then((book) => {
            res.send(book);
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

module.exports.updateOne = async (req, res) => {
    try{
        Book.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
            Book.findOne({_id: req.params.id}).then((book) => {
                res.send(book);
            });
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}

module.exports.deleteOne = async (req, res) => {
    try{
        Book.findByIdAndRemove({_id: req.params.id}).then((book) => {
            res.send(book);
        });
        res.status(200);
    }catch(err){
        res.status(404).json({ err });
    }
}